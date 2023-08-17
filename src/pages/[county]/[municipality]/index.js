import React from "react";
import { submarketHex } from "../../../utils/index";

const MunicipalityPage = (props) => {
  const { county, municipality } = props.params;
  const res = {
    help: "https://catalog.dvrpc.org/api/3/action/help_show?name=datastore_search_sql",
    success: true,
    result: {
      sql: "SELECT * from \"66807b47-0d95-4671-913b-0bf8e61d878e\" WHERE geoid ='3400503370'",
      records: [
        {
          _id: 1,
          _full_text: "#full str of json",
          geoid: "3400503370",
          name: "Bass River Township",
          county: "Burlington",
          one: 0,
          two: 0.12,
          three: 0,
          four: 0.27,
          five: 0,
          six: 0,
          seven: 0.61,
          eight: 0,
        },
      ],
      fields: [{ "array of fields from table": "" }],
    },
  };

  return (
    <div>
      <h3 className="text-xl">
        {municipality[0].toUpperCase() + municipality.substr(1)}
      </h3>
    </div>
  );
};

export default MunicipalityPage;
