import React from "react";

const getPercent = (x, value) => {
  const range = 25;
  let ret = (value < 1 ? value * 100 : value) / (2 * x);
  ret *= 100;
  let diff = ret - 50;
  if ((diff < range + 5 && diff > 0) || (diff > range * -1 - 5 && diff < 0)) {
    if (diff > 0 && diff < 20) ret += range;
    else if (diff < 0 && diff > -20) ret += range * -1;
  }
  if (ret > 85) ret = 85;
  return ret;
};

const MedianViz = ({ type, value }) => {
  const regionalAverages = {
    median: 295000,
    change: 23.1,
    percent: 68.9,
  };
  value = parseFloat(value.replace(/[^0-9\.]+/g, ""));
  if (type === "change" || type === "percent") value /= 100;
  const plotValue = parseInt(getPercent(regionalAverages[type], value));
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  });

  return (
    <div className="col-span-2 relative text-sm">
      <div className="w-6 absolute left-[45%] -mt-5 flex flex-col items-center">
        <span className="text-gray-500 text-xs">
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
        className="w-6 absolute -mt-5 flex flex-col items-center"
        style={{ left: `${plotValue}%` }}
      >
        <span className="text-[#015ab8] text-xs">
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
