import React from "react";

const Input = ({ placeholder, value = null, onChange = null }) => {
  return (
    <input
      class="text-black font-normal appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 focus:outline-none focus:bg-white focus:border-blue-500 placeholder:italic"
      type="text"
      placeholder={placeholder ? placeholder : ""}
      value={value}
      onChange={onChange}
    ></input>
  );
};

export default Input;
