import React from "react";

export const CustomSelect = ({ initialValue, optionValue }) => {
  return (
    <div className="border-b-1 border-lightGray pb-0.5">
      <select name="" id="" className="focus:outline-none px-2">
        <option value={initialValue}>{initialValue}</option>
        <option value={optionValue}>{optionValue}</option>
      </select>
    </div>
  );
};
