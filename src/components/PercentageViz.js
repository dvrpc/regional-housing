import React from "react";
import { Link } from "gatsby";

const PercentageViz = ({ res, submarkets, title }) => {
  let { _id, _full_text, county, geoid, name, ...percentages } = res;
  let values = [];
  Object.keys(percentages).forEach((key, idx) => {
    if (percentages[key] > 0)
      values.push({ submarket: idx + 1, val: percentages[key] });
  });

  if (values[values.length - 1].submarket === 9) {
    const none = values.pop();
    values = [...values.sort((a, b) => b.val - a.val), none];
  } else values.sort((a, b) => b.val - a.val);

  return (
    <div>
      <h3 className="text-lg">Submarkets</h3>
      <div className="flex w-full mb-4">
        {values.map((item) => (
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
                      is
                      <Link
                        to={
                          submarket.slug
                            ? `/submarkets/${submarket.slug}`
                            : null
                        }
                        className="px-1 brightness-75"
                        style={{
                          color: submarket.description && submarket.hex,
                        }}
                      >
                        {submarket.title}
                      </Link>
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
