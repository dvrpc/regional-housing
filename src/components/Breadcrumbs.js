import React, { useEffect } from "react";
import { Link } from "gatsby";
import { titleCase } from "../utils";

const Breadcrumbs = ({ path, params }) => {
  let crumbs = path.split(/\/:/g);
  if (crumbs.length <= 1) {
    crumbs = path.split(/\//g).map((crumb, idx) => {
      if (params["frontmatter__slug"] === crumb) return `Submarket ${crumb}`;
      return crumb;
    });
  } else
    crumbs.map((crumb, idx) => {
      if (params[crumb]) crumbs[idx] = params[crumb];
    });
  crumbs = crumbs.filter((crumb) => crumb !== "");

  return (
    <div className="flex">
      {crumbs.map((crumb, idx) => {
        const isLast = crumbs.length - 1 === idx ? true : false;
        return (
          <>
            <Link to={!isLast && `/${crumb}`}>
              {titleCase(crumb.replace("-", " "))}
            </Link>
            {!isLast && <span className="px-1">{">"}</span>}
          </>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
