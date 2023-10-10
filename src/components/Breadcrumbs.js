import React from "react";
import { Link } from "gatsby";
import { titleCase } from "../utils";

const Breadcrumbs = ({ params }) => {
  const { county, municipality } = params;
  let crumbs = [];
  if (!county && !municipality) crumbs = [...["submarkets"]];
  else {
    crumbs = [...[{ str: "Greater Philadelphia Region", path: "/submarkets" }]];
    if (municipality) crumbs.push(county);
  }
  return (
    <div className="flex text-xs">
      {crumbs.map((crumb, idx) => {
        const isLast = crumbs.length - 1 === idx ? true : false;
        return (
          <>
            <Link
              to={crumb.path || `/${crumb}`}
              className="w-min md:w-fit whitespace-nowrap md:whitespace-normal"
            >
              {crumb.str || titleCase(crumb)}
            </Link>
            {!isLast && <span className="px-1">{">"}</span>}
          </>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
