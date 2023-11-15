import React from "react";
const Input = ({
  placeholder,
  value = null,
  onChange = null,
  textAlign,
  reduceFontSize,
  name,
  isRequired = false,
}) => {
  return (
    <input
      required={isRequired}
      name={name}
      class="font-normal appearance-none border-[1px] border-[#f05a22] rounded-lg w-full py-2 px-4 focus:outline-none focus:bg-white focus:border-blue-500 placeholder:italic text-gray-500 placeholder:text-gray-500"
      type="text"
      placeholder={placeholder ? placeholder : ""}
      value={value}
      onChange={onChange}
      style={{ textAlign: textAlign, fontSize: reduceFontSize && "0.675rem" }}
    ></input>
  );
};

export default Input;
