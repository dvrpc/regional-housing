import React from "react";
import { Link } from "gatsby";
import { titleCase } from "../utils";

const Breadcrumbs = ({ params }) => {
  const { county, municipality } = params;
  let crumbs = [];
  if (!county && !municipality) {
    crumbs = [...["submarkets", `submarket ${params["frontmatter__slug"]}`]];
  } else crumbs = [...[county, municipality]];

  return (
    <div className="flex">
      {crumbs.map((crumb, idx) => {
        const isLast = crumbs.length - 1 === idx ? true : false;
        return (
          <>
            <Link to={!isLast && `/${crumb}`}>{titleCase(crumb)}</Link>
            {!isLast && <span className="px-1">{">"}</span>}
          </>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;