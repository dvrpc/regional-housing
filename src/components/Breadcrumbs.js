import React from "react";
import { Link } from "gatsby";
import { titleCase } from "../utils";

const Breadcrumbs = ({ params }) => {
  const { county, municipality } = params;
  let crumbs = [];
  if (!county && !municipality)
    crumbs = [...["submarkets", `submarket ${params["frontmatter__slug"]}`]];
  else {
    crumbs = [
      ...[{ str: "Greater Philadelphia Region", path: "/submarkets" }, county],
    ];
    if (municipality) crumbs.push(municipality);
  }
  return (
    <div className="flex text-xs">
      {crumbs.map((crumb, idx) => {
        const isLast = crumbs.length - 1 === idx ? true : false;
        return (
          <>
            <Link
              to={!isLast && (crumb.path || `/${crumb}`)}
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
