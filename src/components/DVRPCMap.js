import React, { useCallback, useContext } from "react";
import Map, { Source, Layer } from "react-map-gl";
import { LngLatBounds } from "mapbox-gl";
import { boundaryLayers } from "../map-layers";
import AppContext from "../utils/AppContext";
import { useEffect } from "react";
import { navigate } from "gatsby";
import { kebabCase, getBoundingBox, reducerFunc } from "../utils";
import { useRef } from "react";

const DVRPCMap = (props) => {
  const {
    mapRef,
    activeFeature,
    setActiveFeature,
    setCounties,
    setMunicipalities,
  } = useContext(AppContext);
  const maxExtent = new LngLatBounds([
    [-77.92498363575237, 39.40815950072073],
    [-74.3760451631676, 40.88377285238582],
  ]);
  let hoveredFeature = useRef(null);
  const prevActiveFeature = useRef(activeFeature);

  const onClick = useCallback(
    (event) => {
      const { features } = event;
      if (features.length) {
        const feature = features && features[0];
        const layer = feature.properties.cty ? "municipalities" : "county";
        if (prevActiveFeature.current) {
          const prevLayer = prevActiveFeature.current.properties.cty
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
        mapRef.current.setFeatureState(
          {
            source: layer,
            sourceLayer: layer,
            id: feature.id,
          },
          { clicked: true }
        );
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
    [activeFeature, setActiveFeature, prevActiveFeature, mapRef]
  );

  const onHover = useCallback(
    (event) => {
      const { features } = event;
      if (features.length) {
        if (!hoveredFeature.current) {
          hoveredFeature.current = features && features[0];
          mapRef.current.setFeatureState(
            {
              source: "municipalities",
              sourceLayer: "municipalities",
              id: hoveredFeature.current.id,
            },
            { hover: true }
          );
        } else {
          mapRef.current.removeFeatureState(
            {
              source: "municipalities",
              sourceLayer: "municipalities",
              id: hoveredFeature.current.id,
            },
            "hover"
          );
          hoveredFeature.current = features && features[0];
          mapRef.current.setFeatureState(
            {
              source: "municipalities",
              sourceLayer: "municipalities",
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

      setCounties(counties);
      setMunicipalities(municipalities);
    }
  }, [mapRef, setCounties, setMunicipalities]);

  useEffect(() => {
    if (activeFeature) {
      if (activeFeature.geometry.type !== "MultiPolygon") {
        const coords = activeFeature.geometry.coordinates[0];
        const bounds = new LngLatBounds(coords[0], coords[0]);
        for (const coord of coords) {
          bounds.extend(coord);
        }
        mapRef.current.fitBounds(bounds, {
          padding: { left: 700, right: 100, top: 100, bottom: 100 },
        });
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
              padding: {
                left: 700,
              },
            }
          );
      }
    }
  }, [activeFeature, mapRef]);

  return (
    <Map
      interactiveLayerIds={["municipalities", "county"]}
      ref={mapRef}
      initialViewState={{ bounds: maxExtent }}
      mapStyle="mapbox://styles/mapbox/light-v11"
      mapboxAccessToken="pk.eyJ1IjoibW1vbHRhIiwiYSI6ImNqZDBkMDZhYjJ6YzczNHJ4cno5eTcydnMifQ.RJNJ7s7hBfrJITOBZBdcOA"
      onClick={onClick}
      onMouseMove={onHover}
      onMouseLeave={onMouseLeave}
      onLoad={onLoad}
    >
      {props.children && (
        <div className="absolute h-full max-w-[30%] bg-white left-[15%] border-x-2 border-[#f05a22] px-12 py-8 overflow-y-scroll">
          {props.children}
        </div>
      )}
      {boundaryLayers.map((source) => {
        const { key, layer, ...props } = source;

        return (
          <Source key={key} {...props}>
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
