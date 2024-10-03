import React from "react";
import { CustomRadioButton } from "../components/CustomRadioButton";
import { CustomSelect } from "../components/CustomSelect";
import { GridItem } from "../components/GridItem";

export const Home = () => {
  return (
    <div className="mx-auto w-11/12 p-10 min-h-screen overflow-y-auto scroll-smooth font-poppins text-softBlack">
      <h2 className="font-medium mb-4 text-3xl">Restaurants</h2>
      <p className="text-base mb-6 text-gray">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minima quia,
        inventore libero assumenda atque eos sit deserunt fugiat adipisci in
        obcaecati ipsa odit repellendus nam reprehenderit quos praesentium
        numquam!
      </p>
      <hr className="border-extraLightGray" />
      <div className="flex justify-between text-sm items-center pr-10">
        <div className="flex gap-x-4 my-6">
          <p className="text-gray">Filter By:</p>
          <CustomRadioButton label="Open Now" />
          <CustomSelect
            initialValue={"Price"}
            optionValue={"25.000 - 50.000"}
          />
          <CustomSelect initialValue={"Categories"} optionValue={"Japanese"} />
        </div>
        <button className="bg-white border-1 border-extraLightGray text-extraLightGray h-fit px-6 py-1">
          CLEAR ALL
        </button>
      </div>
      <hr className="border-extraLightGray" />
      <div className="py-10">
        <h3 className="font-medium text-softBlack text-xl mb-5">
          All Restaurants
        </h3>
        <div className="grid grid-cols-4 gap-x-4 gap-y-6 mb-14">
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
        </div>
        <div className="flex justify-center">
          <button className="border-1 border-darkerSky bg-white py-2.5 w-1/4 text-darkerSky text-sm transition-all hover:translate-y-2">
            LOAD MORE
          </button>
        </div>
      </div>
    </div>
  );
};
