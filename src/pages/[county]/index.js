import React from "react";

const CountyPage = (props) => {
  const { county } = props.params;

  return (
    <div>
      <h3 className="text-xl">{county[0].toUpperCase() + county.substr(1)}</h3>
    </div>
  );
};

export default CountyPage;
