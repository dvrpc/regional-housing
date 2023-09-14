import React, { useCallback, useContext } from "react";
import Map, { Source, Layer } from "react-map-gl";
import { LngLatBounds } from "mapbox-gl";
import { boundaryLayers, fillLayer } from "../map-layers";
import AppContext from "../utils/AppContext";
import { useEffect } from "react";
import { navigate } from "gatsby";
import { kebabCase, getBoundingBox, reducerFunc, titleCase } from "../utils";
import { useRef } from "react";

const DVRPCMap = (props) => {
  const {
    mapRef,
    activeFeature,
    setActiveFeature,
    setCounties,
    setMunicipalities,
    counties,
    setPhlplanningareas,
    submarketFilter,
  } = useContext(AppContext);
  const maxExtent = new LngLatBounds([
    [-76.09405517578125, 39.49211914385648],
    [-74.32525634765625, 40.614734298694216],
  ]);
  const hoveredFeature = useRef(null);
  const prevActiveFeature = useRef(activeFeature);

  const onClick = useCallback(
    (event) => {
      const { features } = event;
      if (features.length) {
        const feature = features && features[0];
        if (
          prevActiveFeature.current &&
          prevActiveFeature.current.properties.cty
        ) {
          mapRef.current.removeFeatureState(
            {
              source: prevActiveFeature.current.source,
              sourceLayer: prevActiveFeature.current.source,
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
        setActiveFeature(feature);
      }
    },
    [setActiveFeature, prevActiveFeature, mapRef]
  );

  const onHover = useCallback(
    (event) => {
      const { features } = event;
      if (features.length) {
        if (!hoveredFeature.current) {
          hoveredFeature.current = features && features[0];
          mapRef.current.setFeatureState(
            {
              source: hoveredFeature.current.source,
              sourceLayer: hoveredFeature.current.sourceLayer,
              id: hoveredFeature.current.id,
            },
            { hover: true }
          );
        } else {
          mapRef.current.removeFeatureState(
            {
              source: hoveredFeature.current.source,
              sourceLayer: hoveredFeature.current.sourceLayer,
              id: hoveredFeature.current.id,
            },
            "hover"
          );
          hoveredFeature.current = features && features[0];
          mapRef.current.setFeatureState(
            {
              source: hoveredFeature.current.source,
              sourceLayer: hoveredFeature.current.sourceLayer,
              id: hoveredFeature.current.id,
            },
            { hover: true }
          );
        }
      }
    },
    [mapRef]
  );

  const onMouseLeave = useCallback(() => {
    if (hoveredFeature.current) {
      mapRef.current.setFeatureState(
        {
          source: "municipalities",
          sourceLayer: "municipalities",
          id: hoveredFeature.current.id,
        },
        { hover: false }
      );
    }
  }, [mapRef]);

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

      const { county, municipality } = props.params;
      if (municipality) {
        let name = titleCase(municipality);
        let feature = null;
        if (county === "philadelphia") {
          feature = phlplanningareas.filter(
            (municipality) => municipality.properties.name === name
          )[0];
        } else {
          feature = municipalities.filter(
            (municipality) =>
              municipality.properties.name === name &&
              municipality.properties.cty === titleCase(county)
          )[0];
        }

        mapRef.current.setFeatureState(
          {
            source: "municipalities",
            sourceLayer: "municipalities",
            id: feature.id,
          },
          { clicked: true }
        );
        prevActiveFeature.current = feature;
        setActiveFeature(feature);
      }

      setCounties(counties);
      setMunicipalities(municipalities);
      setPhlplanningareas(phlplanningareas);
    }
  }, [
    mapRef,
    setActiveFeature,
    setCounties,
    setMunicipalities,
    setPhlplanningareas,
    props.params,
    prevActiveFeature,
  ]);

  // zoom to effect
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
    }
  }, [activeFeature, mapRef]);

  useEffect(() => {
    if (counties.length) {
      const { county, municipality } = props.params;
      if (county && !municipality) {
        let feature = counties.filter(
          (location) => location.properties.name === titleCase(county)
        )[0];

        if (prevActiveFeature.current) {
          const prevLayer =
            prevActiveFeature.current.source ||
            prevActiveFeature.current.properties.cty
              ? "municipalities"
              : "county";

          mapRef.current.removeFeatureState(
            {
              source: prevLayer,
              sourceLayer: prevLayer,
              id: prevActiveFeature.current.id,
            },
            "clicked"
          );
        }

        setActiveFeature(feature);
      }
    }
  }, [props.params, counties, prevActiveFeature, mapRef, setActiveFeature]);

  return (
    <Map
      interactiveLayerIds={["municipalities", "phlplanningareas"]}
      ref={mapRef}
      initialViewState={{ bounds: maxExtent }}
      mapStyle="mapbox://styles/mapbox/light-v11"
      mapboxAccessToken="pk.eyJ1IjoibW1vbHRhIiwiYSI6ImNqZDBkMDZhYjJ6YzczNHJ4cno5eTcydnMifQ.RJNJ7s7hBfrJITOBZBdcOA"
      onClick={onClick}
      onMouseMove={onHover}
      onMouseLeave={onMouseLeave}
      onLoad={onLoad}
      minZoom={8}
      style={{ height: "85vh", width: "70vw" }}
    >
      <Source id={fillLayer.id} type={fillLayer.type} data={fillLayer.data}>
        <Layer
          {...fillLayer.layer}
          filter={
            submarketFilter
              ? ["==", "submarket", parseInt(submarketFilter)]
              : ["!=", "submarket", ""]
          }
        />
      </Source>

      {boundaryLayers.map((source) => {
        const { layer, ...props } = source;

        return (
          <Source {...props}>
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
    </Map>
  );
};

export default DVRPCMap;
