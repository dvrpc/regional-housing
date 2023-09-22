import React, { useCallback, useContext } from "react";
import Map, { Source, Layer, Popup } from "react-map-gl";
import { LngLatBounds } from "mapbox-gl";
import { boundaryLayers, fillLayer, highlightLayer } from "../map-layers";
import AppContext from "../utils/AppContext";
import { useEffect } from "react";
import { navigate } from "gatsby";
import { kebabCase, getBoundingBox, reducerFunc, titleCase } from "../utils";
import { useRef } from "react";
import { useState } from "react";

const DVRPCMap = (props) => {
  const {
    mapRef,
    activeFeature,
    setActiveFeature,
    setCounties,
    setMunicipalities,
    counties,
    municipalities,
    phlplanningareas,
    setPhlplanningareas,
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
          mapRef.current.removeFeatureState(
            {
              source: hoveredFeature.feature.source,
              sourceLayer: hoveredFeature.feature.sourceLayer,
              id: hoveredFeature.feature.id,
            },
            "hover"
          );
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

  // onload store data in state for search
  const onLoad = useCallback(() => {
    if (mapRef.current) {
      let counties = mapRef.current
        .querySourceFeatures("county", {
          sourceLayer: "county",
          filter: ["==", "dvrpc", "Yes"],
        })
        .reduce(reducerFunc, []);
      let municipalities = mapRef.current
        .querySourceFeatures("municipalities", {
          sourceLayer: "municipalities",
        })
        .reduce(reducerFunc, []);
      let phlplanningareas = mapRef.current
        .querySourceFeatures("phlplanningareas", {
          sourceLayer: "phlplanningareas",
        })
        .reduce(reducerFunc, []);

      setCounties(counties);
      setMunicipalities(municipalities);
      setPhlplanningareas(phlplanningareas);
    }
  }, [mapRef, setCounties, setMunicipalities, setPhlplanningareas]);

  // zoom effect
  useEffect(() => {
    if (activeFeature) {
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
              maxZoom: activeFeature.properties.cty ? 12 : 9,
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
  }, [activeFeature, mapRef, county, municipality]);

  // navigation handler
  useEffect(() => {
    if (counties.length) {
      let feature = null;
      if (municipality) {
        let name = titleCase(municipality);
        if (county === "philadelphia") {
          feature = phlplanningareas.filter(
            (municipality) => municipality.properties.name === name
          )[0];
          feature.sourceLayer = "phlplanningareas";
        } else {
          feature = municipalities.filter(
            (municipality) =>
              municipality.properties.name === name &&
              municipality.properties.cty === titleCase(county)
          )[0];
          feature.sourceLayer = "municipalities";
        }
      } else if ((county && !municipality) || (!county && !municipality)) {
        if (prevActiveFeature.current) {
          const prevLayer =
            prevActiveFeature.current.properties.cty === "Philadelphia"
              ? "phlplanningareas"
              : "municipalities";
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
          feature = counties.filter(
            (test) => test.properties.name === titleCase(county)
          )[0];
          feature.sourceLayer = "county";
        }
      }

      // set active feature and trigger zoom effect
      prevActiveFeature.current = activeFeature;
      setActiveFeature(feature);
      // remove submarket filter
      mapRef.current.removeFeatureState(
        { source: "submarkets", id: parseInt(submarketFilter) },
        "hover"
      );
      if (activeFeature) setSubmarketFilter("");
    }
  }, [
    county,
    municipality,
    mapRef,
    counties,
    municipalities,
    phlplanningareas,
    setActiveFeature,
    activeFeature,
    submarketFilter,
    setSubmarketFilter,
  ]);

  return (
    <Map
      interactiveLayerIds={["municipalities", "phlplanningareas"]}
      ref={mapRef}
      initialViewState={{ bounds: maxExtent }}
      mapStyle="mapbox://styles/crvanpollard/clmqidmqj04uh01ma2mkla3yz"
      mapboxAccessToken="pk.eyJ1IjoibW1vbHRhIiwiYSI6ImNqZDBkMDZhYjJ6YzczNHJ4cno5eTcydnMifQ.RJNJ7s7hBfrJITOBZBdcOA"
      onClick={onClick}
      onMouseMove={onHover}
      onMouseLeave={onMouseLeave}
      onLoad={onLoad}
      minZoom={8}
      style={{ height: "85vh", width: "70vw" }}
    >
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

      {boundaryLayers.map((source) => {
        const { layer, ...props } = source;

        return (
          <Source {...props}>
            {activeFeature && activeFeature.sourceLayer === source.id && (
              <Layer
                id={`mask-${source.id}`}
                type="fill"
                source-layer={source.id}
                paint={{ "fill-color": "rgba(0,0,0,0.3)" }}
                filter={["!=", "geoid", activeFeature.properties.geoid]}
              />
            )}
            {activeFeature &&
              activeFeature.sourceLayer === "phlplanningareas" && (
                <Layer
                  id="mask-philadelphia"
                  type="fill"
                  source-layer={source.id}
                  paint={{ "fill-color": "rgba(0,0,0,0.3)" }}
                  filter={["!=", "name", "Philadelphia"]}
                />
              )}
            <Layer
              id={`highlight-${source.id}`}
              type="line"
              source-layer={source.id}
              paint={{
                "line-color": "#0159b8",
                "line-width": [
                  "case",
                  [
                    "boolean",
                    ["feature-state", "hover"],
                    ["feature-state", "clicked"],
                    false,
                  ],
                  3,
                  0,
                ],
              }}
            />
            <Layer beforeId={`highlight-${source.id}`} {...layer} />
          </Source>
        );
      })}

      {hoveredFeature ? (
        <Popup
          longitude={hoveredFeature.longitude}
          latitude={hoveredFeature.latitude}
          closeButton={false}
          closeOnClick={false}
          maxWidth="350px"
          offset={[0, -10]}
          anchor="bottom"
        >
          <div>
            <div className="divide-y text-center text-base">
              <div>{hoveredFeature.feature.properties.name}</div>
              <div>{`${hoveredFeature.feature.properties.cty}, ${
                hoveredFeature.feature.properties.state || "PA"
              }`}</div>
            </div>
          </div>
        </Popup>
      ) : null}
    </Map>
  );
};

export default DVRPCMap;
