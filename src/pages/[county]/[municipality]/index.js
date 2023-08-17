import React from "react";

const MunicipalityPage = (props) => {
  const { county, municipality } = props.params;

  return (
    <div>
      <h3 className="text-xl">
        {municipality[0].toUpperCase() + municipality.substr(1)}
      </h3>
    </div>
  );
};

export default MunicipalityPage;
