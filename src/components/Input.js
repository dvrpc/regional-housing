import React from "react";

const Input = ({ placeholder }) => {
  return (
    <input
      class="appearance-none border-2 border-gray-200 w-full rounded py-2 px-4 focus:outline-none focus:bg-white focus:border-blue-500"
      type="text"
      placeholder={placeholder ? placeholder : ""}
    ></input>
  );
};

export default Input;