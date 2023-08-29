import React, { useContext, useEffect, useState } from "react";
import Input from "./Input";
import AppContext from "../utils/AppContext";
import useDebounce from "../utils/useDebounce";
import { navigate } from "gatsby";
import { kebabCase } from "../utils";

const Search = () => {
  const { setActiveFeature, counties, municipalities } = useContext(AppContext);
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
    if (debounceInput.length) {
      setSuggestions((prev) => {
        if (prev.length) {
          return prev.filter((location) =>
            location.properties.name
              .toLowerCase()
              .includes(debounceInput.toLowerCase())
          );
        } else {
          return [...counties, ...municipalities].filter((location) =>
            location.properties.name
              .toLowerCase()
              .includes(debounceInput.toLowerCase())
          );
        }
      });
    } else {
      setSuggestions([]);
    }
  }, [debounceInput, counties, municipalities, setSuggestions]);

  return (
    <>
      <Input
        placeholder="Search by county or municipality"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <div className="bg-white divide-y max-h-[20vh] overflow-y-scroll text-black rounded-b-lg">
        {suggestions.map((suggestion) => (
          <div className="py-2 px-3">
            <button
              className="cursor-pointer"
              onClick={() => linkClick(suggestion)}
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: suggestion.properties.name.replace(
                    new RegExp(debounceInput, "gi"),
                    (match) => `<span class="highlight">${match}</span>`
                  ),
                }}
              />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Search;
