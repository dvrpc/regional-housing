import React from "react";

const getPercent = (x, value) => {
  let ret = (value < 1 ? value * 100 : value) / (2 * x);
  ret *= 100;
  if (Math.abs(ret - 50) < 20) ret += ret - 50;
  return ret;
};

const MedianViz = ({ type, value }) => {
  const regionalAverages = {
    median: 79540,
    change: 3.5,
    percent: 76,
  };
  const plotValue = parseInt(getPercent(regionalAverages[type], value));
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  });

  return (
    <div className="col-span-2 relative">
      <div className="w-6 absolute left-[50%] -mt-6 flex flex-col items-center">
        <span className="text-gray-500">
          {type === "median"
            ? formatter.format(regionalAverages[type])
            : (regionalAverages[type] / 100).toLocaleString(undefined, {
                style: "percent",
                minimumFractionDigits: 1,
              })}
        </span>
        <div className="h-6 w-6 rounded-full border-2 border-gray-500 bg-white" />
      </div>
      <div
        className={`absolute -mt-6 flex flex-col items-center`}
        style={{ left: `${plotValue}%` }}
      >
        <span className="text-[#015ab8]">
          {type === "median"
            ? formatter.format(value)
            : value.toLocaleString(undefined, {
                style: "percent",
                minimumFractionDigits: 1,
              }) || 0}
        </span>
        <div className="h-6 w-6 rounded-full border-2 border-[#015ab8] bg-white" />
      </div>
      <div className="border-x-2 py-2 border-gray-400">
        <hr className="border-gray-400" />
      </div>
    </div>
  );
};

export default MedianViz;
