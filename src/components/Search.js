import React, { useContext, useEffect, useState } from "react";
import Input from "./Input";
import AppContext from "../utils/AppContext";
import useDebounce from "../utils/useDebounce";
import { navigate } from "gatsby";
import { kebabCase } from "../utils";

const Search = () => {
  const { counties, municipalities, phlplanningareas } = useContext(AppContext);
  const [suggestions, setSuggestions] = useState([]);
  const [input, setInput] = useState("");
  const debounceInput = useDebounce(input);

  const linkClick = (suggestion) => {
    setInput("");
    setSuggestions([]);
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
          return [...counties, ...municipalities, ...phlplanningareas].filter(
            (location) =>
              location.properties.name
                .toLowerCase()
                .includes(debounceInput.toLowerCase())
          );
        }
      });
    } else {
      setSuggestions([]);
    }
  }, [
    debounceInput,
    counties,
    municipalities,
    phlplanningareas,
    setSuggestions,
  ]);

  return (
    <>
      <div className="flex md:flex-row flex-col px-2.5">
        <span className="font-bold my-auto text-right tracking-[2px] md:mr-2 inline-block w-1/3 whitespace-nowrap laptop:text-sm">
          FIND A COMMUNITY:
        </span>
        <div className="md:w-2/3">
          <Input
            placeholder="Search by county or municipality"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </div>
      </div>
      <div className="bg-white divide-y md:max-h-[20vh] overflow-y-scroll text-black rounded-b-lg block ml-auto md:w-2/3 bg-gray-100 md:bg-white">
        {suggestions.map((suggestion) => {
          const name = !suggestion.properties.cty
            ? `${suggestion.properties.name} County`
            : suggestion.properties.name;

          return (
            <div className="py-2 px-3" key={suggestion.id}>
              <button
                className="cursor-pointer"
                onClick={() => linkClick(suggestion)}
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: name.replace(
                      new RegExp(debounceInput, "gi"),
                      (match) => `<span class="highlight">${match}</span>`
                    ),
                  }}
                />
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Search;
