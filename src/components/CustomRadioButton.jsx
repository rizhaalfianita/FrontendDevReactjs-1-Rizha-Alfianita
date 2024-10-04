import React from "react";

export const CustomRadioButton = ({ label, checked, onChange }) => {
  return (
    <div className="flex gap-x-2 border-b-1 border-lightGray pb-0.5 max-sm:text-base">
      <input type="radio" name="filter" checked={checked} onChange={onChange} />
      <label htmlFor="filter">{label}</label>
    </div>
  );
};
