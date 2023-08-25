import React, { useContext, useEffect, useState } from "react";
import Input from "./Input";
import AppContext from "../utils/AppContext";
import useDebounce from "../utils/useDebounce";
import { navigate } from "gatsby";
import { titleCase, kebabCase } from "../utils";

const Search = () => {
  const { mapRef, setActiveFeature } = useContext(AppContext);
  const [suggestions, setSuggestions] = useState([]);
  const [input, setInput] = useState("");
  const debounceInput = useDebounce(input);

  const linkClick = (suggestion) => {
    setActiveFeature(suggestion);
    navigate(
      suggestion.properties.cty
        ? `/${kebabCase(suggestion.properties.cty)}/${kebabCase(
            suggestion.properties.name
          )}`
        : `/${kebabCase(suggestion.properties.name)}`
    );
  };

  useEffect(() => {
    if (debounceInput.length > 0) {
      const counties = mapRef.querySourceFeatures("county", {
        sourceLayer: "county",
        filter: [
          "all",
          ["in", titleCase(debounceInput), ["get", "name"]],
          ["==", "Yes", ["get", "dvrpc"]],
        ],
      });
      const municipalities = mapRef.querySourceFeatures("municipalities", {
        sourceLayer: "municipalities",
        filter: ["in", titleCase(debounceInput), ["get", "name"]],
      });
      setSuggestions([...counties, ...municipalities]);
    } else {
      setSuggestions([]);
    }
  }, [debounceInput, mapRef]);

  return (
    <>
      <Input
        placeholder="Search by county or municipality"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      {suggestions.length > 0 && (
        <div className="bg-white divide-y max-h-[20vh] overflow-y-scroll text-black rounded-b-lg">
          {suggestions.map((suggestion) => (
            <div className="py-2 px-3" key={suggestion.id}>
              <div onClick={() => linkClick(suggestion)}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: suggestion.properties.name.replace(
                      titleCase(debounceInput),
                      `<span class="highlight">${titleCase(
                        debounceInput
                      )}</span>`
                    ),
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Search;
