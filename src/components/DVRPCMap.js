import React, { useCallback, useContext } from "react";
import Map, { Source, Layer, Popup, NavigationControl } from "react-map-gl";
import { LngLatBounds } from "mapbox-gl";
import { boundaryLayers, fillLayer, highlightLayer } from "../map-layers";
import AppContext from "../utils/AppContext";
import { useEffect } from "react";
import { navigate } from "gatsby";
import { kebabCase, getBoundingBox, titleCase } from "../utils";
import { useRef } from "react";
import { useState } from "react";
import SubmarketDropdown from "./SubmarketDropdown";

const DVRPCMap = (props) => {
  const {
    mapRef,
    activeFeature,
    setActiveFeature,
    counties,
    municipalities,
    submarketFilter,
    setSubmarketFilter,
  } = useContext(AppContext);
  const maxExtent = new LngLatBounds([
    [-76.09405517578125, 39.49211914385648],
    [-74.32525634765625, 40.614734298694216],
  ]);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const prevActiveFeature = useRef(activeFeature);
  const { county, municipality } = props.params;
  const [isLoaded, setIsLoaded] = useState(false);

  // click event
  const onClick = useCallback(
    (event) => {
      const { features } = event;
      if (features.length) {
        const feature = features && features[0];
        if (
          prevActiveFeature.current &&
          prevActiveFeature.current.properties.cty
        ) {
          const source =
            prevActiveFeature.current.properties.cty === "Philadelphia"
              ? "phlplanningareas"
              : "municipalities";
          mapRef.current.removeFeatureState(
            {
              source: source,
              sourceLayer: source,
              id: prevActiveFeature.current.id,
            },
            "clicked"
          );
        }
        if (feature.properties.cty) {
          mapRef.current.setFeatureState(
            {
              source: "municipalities",
              sourceLayer: "municipalities",
              id: feature.id,
            },
            { clicked: true }
          );
        }
        navigate(
          feature.properties.cty
            ? `/${kebabCase(feature.properties.cty)}/${kebabCase(
                feature.properties.name
              )}`
            : `/${kebabCase(feature.properties.name)}`
        );
        prevActiveFeature.current = feature;
      }
    },
    [prevActiveFeature, mapRef]
  );

  // hover effect
  const onHover = useCallback(
    (event) => {
      const { features } = event;
      if (features.length) {
        if (!hoveredFeature) {
          const feature = features && features[0];
          setHoveredFeature({
            feature: feature,
            latitude: event.lngLat.lat,
            longitude: event.lngLat.lng,
          });
          mapRef.current.setFeatureState(
            {
              source: feature.source,
              sourceLayer: feature.sourceLayer,
              id: feature.id,
            },
            { hover: true }
          );
        } else {
          mapRef.current.removeFeatureState({
            source: hoveredFeature.feature.source,
            sourceLayer: hoveredFeature.feature.sourceLayer,
          });
          const feature = features && features[0];
          setHoveredFeature({
            feature: features[0],
            latitude: event.lngLat.lat,
            longitude: event.lngLat.lng,
          });
          mapRef.current.setFeatureState(
            {
              source: feature.source,
              sourceLayer: feature.sourceLayer,
              id: feature.id,
            },
            { hover: true }
          );
        }
      }
    },
    [mapRef, hoveredFeature]
  );

  // mouse leave effect
  const onMouseLeave = useCallback(() => {
    if (hoveredFeature) {
      setHoveredFeature(null);
      mapRef.current.setFeatureState(
        {
          source: hoveredFeature.feature.source,
          sourceLayer: hoveredFeature.feature.sourceLayer,
          id: hoveredFeature.feature.id,
        },
        { hover: false }
      );
    }
  }, [mapRef, hoveredFeature, setHoveredFeature]);

  // zoom effect
  useEffect(() => {
    if (isLoaded) {
      if (activeFeature && mapRef.current) {
        if (activeFeature.geometry.type !== "MultiPolygon") {
          const coords = activeFeature.geometry.coordinates[0];
          const bounds = new LngLatBounds(coords[0], coords[0]);
          for (const coord of coords) {
            bounds.extend(coord);
          }
          mapRef.current.fitBounds(bounds);
        } else {
          const bbox = getBoundingBox(activeFeature);
          const { xMin, xMax, yMin, yMax } = bbox;
          xMin &&
            mapRef.current.fitBounds(
              [
                [xMin, yMin],
                [xMax, yMax],
              ],
              {
                maxZoom: 12,
              }
            );
        }
      } else if (mapRef.current && !activeFeature)
        mapRef.current.fitBounds(
          new LngLatBounds([
            [-76.09405517578125, 39.49211914385648],
            [-74.32525634765625, 40.614734298694216],
          ])
        );
    }
  }, [activeFeature, mapRef, county, municipality, isLoaded]);

  // navigation handler
  useEffect(() => {
    if (counties && municipalities) {
      if (!Object.keys(counties).length || !Object.keys(municipalities).length)
        return;
      let feature = null;
      prevActiveFeature.current = null;
      if (municipality) {
        const name = titleCase(municipality);
        feature = municipalities[`${name}, ${titleCase(county)}`];
        if (county === "philadelphia") feature.sourceLayer = "phlplanningareas";
        else feature.sourceLayer = "municipalities";
      } else if ((county && !municipality) || (!county && !municipality)) {
        if (prevActiveFeature.current) {
          const prevLayer =
            prevActiveFeature.current.properties.cty === "Philadelphia"
              ? "phlplanningareas"
              : "municipalities";
          mapRef.current &&
            mapRef.current.removeFeatureState(
              {
                source: prevLayer,
                sourceLayer: prevLayer,
                id: prevActiveFeature.current.id,
              },
              "clicked"
            );
        }
        if (county) {
          feature = counties[titleCase(county)];
          feature.sourceLayer = "county";
        }
      }

      // set active feature and trigger zoom effect
      prevActiveFeature.current = activeFeature;
      setActiveFeature(feature);
      // remove submarket filter
      mapRef.current &&
        submarketFilter &&
        mapRef.current.removeFeatureState(
          { source: "submarkets", id: parseInt(submarketFilter) },
          "hover"
        );
      if (activeFeature) setSubmarketFilter("");
    }
  }, [
    activeFeature,
    mapRef,
    county,
    municipality,
    counties,
    municipalities,
    setActiveFeature,
    submarketFilter,
    setSubmarketFilter,
  ]);

  const onMapLoad = useCallback(() => {
    if (mapRef.current) setIsLoaded(true);
  }, [mapRef, isLoaded, setIsLoaded]);

  return (
    <div className="md:flex h-[85vh]">
      <div className="sidebar overflow-auto h-[35vh] md:h-[85vh] md:w-[35vw] md:float-left">
        {props.children && (
          <div
            id="sidebar"
            className="overflow-y-auto h-full bg-white z-[999] p-4 md:px-10 md:py-8 md:border-r-2 border-[#f05a22] top-0"
          >
            {props.children}
          </div>
        )}
      </div>
      <div className="w-full h-[50vh] md:h-[85vh]">
        <Map
          interactiveLayerIds={["municipalities", "phlplanningareas"]}
          ref={mapRef}
          initialViewState={{ bounds: maxExtent }}
          mapStyle="mapbox://styles/crvanpollard/clmqidmqj04uh01ma2mkla3yz"
          mapboxAccessToken="pk.eyJ1IjoiY3J2YW5wb2xsYXJkIiwiYSI6ImNseHVpZmprazI4bWoycXB2MTljMWF1YjUifQ.jLMaSXqIUV5N2IxYlk5ZiQ"
          onLoad={onMapLoad}
          onClick={onClick}
          onMouseMove={onHover}
          onMouseLeave={onMouseLeave}
          minZoom={8}
        >
          <NavigationControl />
          <div
            id="default-extent-btn"
            className="overlays shadow"
            aria-label="Default DVRPC Extent"
            onClick={() => mapRef.current?.fitBounds(maxExtent)}
          >
            <img
              id="default-extent-img"
              src="https://www.dvrpc.org/img/banner/new/bug-favicon.png"
              alt="DVRPC logo"
            />
          </div>
          {!activeFeature && <SubmarketDropdown />}
          <Source
            id={fillLayer.id}
            type={fillLayer.type}
            data={fillLayer.data}
            promoteId={fillLayer.promoteId}
          >
            <Layer
              beforeId="waterway-shadow"
              {...fillLayer.layer}
              filter={
                submarketFilter
                  ? ["==", "submarket", parseInt(submarketFilter)]
                  : ["!=", "submarket", ""]
              }
            />
            <Layer {...highlightLayer} />
          </Source>

          <Source
            id="dvrpc-municipal"
            type="vector"
            url="https://tiles.dvrpc.org/data/dvrpc-municipal.json"
            promoteId="geoid"
          >
            {boundaryLayers.map((source) => {
              const { layer, ...props } = source;
              let id;

              return (
                <>
                  {activeFeature && activeFeature.sourceLayer === source.id && (
                    <>
                      <Layer
                        id={`mask-${source.id}`}
                        type="fill"
                        source="dvrpc-municipal"
                        source-layer={source.id}
                        paint={{ "fill-color": "rgba(0,0,0,0.3)" }}
                        filter={["!=", "geoid", activeFeature.properties.geoid]}
                      />
                      {activeFeature.sourceLayer != "county" && (
                        <Layer
                          id={`clicked-${source.id}`}
                          type="line"
                          source="dvrpc-municipal"
                          source-layer={source.id}
                          paint={{ "line-color": "#f05a22", "line-width": 3 }}
                          filter={[
                            "==",
                            "geoid",
                            activeFeature.properties.geoid,
                          ]}
                        />
                      )}
                    </>
                  )}
                  {activeFeature &&
                    activeFeature.sourceLayer === "phlplanningareas" && (
                      <>
                        <Layer
                          id="mask-philadelphia"
                          type="fill"
                          source="dvrpc-municipal"
                          source-layer={source.id}
                          paint={{ "fill-color": "rgba(0,0,0,0.3)" }}
                          filter={["!=", "name", "Philadelphia"]}
                        />
                        <Layer
                          id={`clicked-${source.id}`}
                          type="line"
                          source="dvrpc-municipal"
                          source-layer={source.id}
                          paint={{ "line-color": "#f05a22", "line-width": 3 }}
                          filter={[
                            "==",
                            "geoid",
                            activeFeature.properties.geoid,
                          ]}
                        />
                      </>
                    )}
                  <Layer
                    source="dvrpc-municipal"
                    beforeId={"admin-0-boundary-disputed"}
                    {...layer}
                  />
                  <Layer
                    id={`highlight-${source.id}-line`}
                    beforeId={"admin-0-boundary-disputed"}
                    type="line"
                    source="dvrpc-municipal"
                    source-layer={source.id}
                    paint={{
                      "line-color": "#f05a22",
                      "line-width": [
                        "case",
                        ["boolean", ["feature-state", "hover"], false],
                        3,
                        0,
                      ],
                    }}
                  />
                </>
              );
            })}
          </Source>

          {hoveredFeature ? (
            <Popup
              longitude={hoveredFeature.longitude}
              latitude={hoveredFeature.latitude}
              closeButton={true}
              closeOnClick={false}
              maxWidth="350px"
              className="opacity-90 py-4"
            >
              <div className="divide-y text-center text-base">
                <div>{hoveredFeature.feature.properties.name}</div>
                <div>{`${hoveredFeature.feature.properties.cty} County`}</div>
              </div>
            </Popup>
          ) : null}
        </Map>
      </div>
    </div>
  );
};

export default DVRPCMap;
