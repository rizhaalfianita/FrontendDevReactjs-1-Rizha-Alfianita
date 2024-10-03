import React from "react";

export const CustomRadioButton = ({ label }) => {
  return (
    <div className="flex gap-x-2 border-b-1 border-lightGray pb-0.5">
      <input type="radio" name="filter" className="" />
      <label htmlFor="filter">{label}</label>
    </div>
  );
};
