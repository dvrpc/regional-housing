import React from "react";

const PercentageViz = ({ res, submarkets, title }) => {
  let { _id, _full_text, county, geoid, name, ...percentages } = res;
  const values = [];
  Object.keys(percentages).forEach((key, idx) => {
    if (percentages[key] > 0)
      values.push({ submarket: idx + 1, val: percentages[key] });
  });

  return (
    <div>
      <h3 className="text-lg">Submarkets</h3>
      <div className="flex w-full mb-4">
        {[...values]
          .sort((a, b) => b.val - a.val)
          .map((item) => (
            <div
              className="py-4 px-1"
              style={{
                backgroundColor: submarkets[item.submarket]
                  ? submarkets[item.submarket].hex
                  : "#c7d8e1",
                width: `${item.val * 100}%`,
              }}
            />
          ))}
      </div>
      <div className="flex flex-col space-y-4">
        {values.map((item) => {
          const submarket = submarkets[item.submarket] ?? null;
          if (submarket) {
            const value = parseFloat(item.val);
            return (
              <>
                <div className="flex">
                  <div
                    className="p-3 h-[20px] w-[20px] mr-2"
                    style={{
                      backgroundColor: submarket.hex,
                    }}
                  />
                  <div>
                    <span className="text-lg font-bold">
                      {value * 100 < 1
                        ? "<1%"
                        : value.toLocaleString(undefined, {
                            style: "percent",
                          })}{" "}
                      of {title[0].toUpperCase() + title.substr(1)} is
                      <span
                        className="px-1"
                        style={{
                          color: submarket.description && submarket.hex,
                        }}
                      >
                        {submarket.title}
                      </span>
                    </span>
                    <p>{submarket.description}</p>
                  </div>
                </div>
              </>
            );
          }
        })}
      </div>
    </div>
  );
};

export default PercentageViz;
