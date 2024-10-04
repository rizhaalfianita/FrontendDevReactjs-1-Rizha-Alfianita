import React from "react";

export const CustomSelect = ({
  initialValue,
  optionValue,
  onChange,
  selected,
}) => {
  return (
    <div className="border-b-1 border-lightGray pb-0.5 max-sm:text-base">
      <select
        className="focus:outline-none px-2"
        value={selected}
        onChange={onChange}
      >
        <option value="">{initialValue}</option>
        {Array.isArray(optionValue) && optionValue.length > 0 ? (
          optionValue.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))
        ) : (
          <option disabled>No options available</option>
        )}
      </select>
    </div>
  );
};
