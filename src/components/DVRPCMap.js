import React, { useCallback, useContext } from "react";
import Map, { Source, Layer } from "react-map-gl";
import { LngLatBounds } from "mapbox-gl";
import { boundaryLayers } from "../map-layers";
import AppContext from "../utils/AppContext";
import { useEffect } from "react";
import { navigate } from "gatsby";
import { kebabCase } from "../utils";

const DVRPCMap = (props) => {
  const { mapRef, setMapRef, activeFeature, setActiveFeature } =
    useContext(AppContext);
  const maxExtent = new LngLatBounds([
    [-77.92498363575237, 39.40815950072073],
    [-74.3760451631676, 40.88377285238582],
  ]);
  let hoveredFeature = null;

  const onClick = useCallback(
    (event) => {
      const { features } = event;
      const feature = features && features[0];
      navigate(
        feature.properties.cty
          ? `/${kebabCase(feature.properties.cty)}/${kebabCase(
              feature.properties.name
            )}`
          : `/${kebabCase(feature.properties.name)}`
      );
      setActiveFeature(features && features[0]);
    },
    [setActiveFeature]
  );

  const onHover = useCallback(
    (event) => {
      const { features } = event;
      if (features.length) {
        if (!hoveredFeature) {
          hoveredFeature = features && features[0];
          mapRef.setFeatureState(
            {
              source: "municipalities",
              sourceLayer: "municipalities",
              id: hoveredFeature.id,
            },
            { hover: true }
          );
        } else {
          mapRef.setFeatureState(
            {
              source: "municipalities",
              sourceLayer: "municipalities",
              id: hoveredFeature.id,
            },
            { hover: false }
          );
          hoveredFeature = features && features[0];
          mapRef.setFeatureState(
            {
              source: "municipalities",
              sourceLayer: "municipalities",
              id: hoveredFeature.id,
            },
            { hover: true }
          );
        }
      }
    },
    [mapRef]
  );

  const onMouseLeave = useCallback(() => {
    if (hoveredFeature) {
      mapRef.setFeatureState(
        {
          source: "municipalities",
          sourceLayer: "municipalities",
          id: hoveredFeature.id,
        },
        { hover: false }
      );
    }
  }, [mapRef]);

  useEffect(() => {
    if (activeFeature) {
      const coords = activeFeature.geometry.coordinates[0];
      const bounds = new LngLatBounds(coords[0], coords[0]);
      for (const coord of coords) {
        bounds.extend(coord);
      }
      mapRef.fitBounds(bounds, { padding: { left: 700 } });
    }
  }, [activeFeature, mapRef]);

  return (
    <Map
      interactiveLayerIds={["municipalities"]}
      ref={(ref) => setMapRef(ref)}
      initialViewState={{ bounds: maxExtent }}
      mapStyle="mapbox://styles/mapbox/light-v11"
      mapboxAccessToken="pk.eyJ1IjoibW1vbHRhIiwiYSI6ImNqZDBkMDZhYjJ6YzczNHJ4cno5eTcydnMifQ.RJNJ7s7hBfrJITOBZBdcOA"
      onClick={onClick}
      onMouseMove={onHover}
      onMouseLeave={onMouseLeave}
    >
      {props.children && (
        <div className="absolute h-full max-w-[30%] bg-white left-[15%] border-x-2 border-[#f05a22] px-12">
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
              source-layer="municipalities"
              paint={{
                "line-color": "#0159b8",
                "line-width": [
                  "case",
                  ["boolean", ["feature-state", "hover"], false],
                  3,
                  0,
                ],
              }}
            />
            <Layer {...layer} />
          </Source>
        );
      })}
    </Map>
  );
};

export default DVRPCMap;
