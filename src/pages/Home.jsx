import { React, useState, useEffect } from "react";
import { CustomRadioButton } from "../components/CustomRadioButton";
import { CustomSelect } from "../components/CustomSelect";
import { GridItem } from "../components/GridItem";
import axios from "axios";

export const Home = () => {
  const apiUrl = "https://api-restaurant-ol2j.onrender.com";
  const [restaurants, setRestaurants] = useState([]);
  const [prices, setPrices] = useState([]);
  const [categories, setCategories] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);
  const [isRadioChecked, setIsRadioChecked] = useState(false);
  const [isClearDisabled, setIsClearDisabled] = useState(true);

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [showOpenNow, setShowOpenNow] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(apiUrl + "/restaurants").then((res) => {
      setRestaurants(res.data.restaurants);
      setCategories(res.data.categories);
      setLoading(false);
      console.log(res.data.categories);
      console.log(res.data.restaurants);
    });
    setPrices(["20000 - 50000", "50000 - 100000", "100000 - 250000"]);
  }, []);

  useEffect(() => {
    let filtered = restaurants;

    if (showOpenNow) {
      filtered = filtered.filter(
        (restaurant) => restaurant.status === "open now"
      );
    }

    if (selectedPrice) {
      const [minPrice, maxPrice] = selectedPrice.split(" - ").map(Number);
      filtered = filtered.filter(
        (restaurant) =>
          restaurant.price >= minPrice && restaurant.price <= maxPrice
      );
    }

    if (selectedCategory) {
      axios
        .get(`${apiUrl}/restaurants/search/${selectedCategory}`)
        .then((res) => {
          let categoryFiltered = res.data;

          if (showOpenNow) {
            categoryFiltered = categoryFiltered.filter(
              (restaurant) => restaurant.status === "open now"
            );
          }

          if (selectedPrice) {
            const [minPrice, maxPrice] = selectedPrice.split(" - ").map(Number);
            categoryFiltered = categoryFiltered.filter(
              (restaurant) =>
                restaurant.price >= minPrice && restaurant.price <= maxPrice
            );
          }

          setFilteredRestaurants(categoryFiltered);
          console.log("Filtered by category and status:", categoryFiltered);
        });
    } else {
      setFilteredRestaurants(filtered);
    }
  }, [showOpenNow, selectedCategory, selectedPrice, restaurants]);

  const handleRadioChange = () => {
    setShowOpenNow(true);
    setIsRadioChecked(true);
    setIsClearDisabled(false);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setIsClearDisabled(false);
  };

  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
    setIsClearDisabled(false);
  };

  const handleClearFilter = () => {
    setShowOpenNow(false);
    setIsRadioChecked(false);
    setSelectedCategory("");
    setSelectedPrice("");
  };

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <div className="mx-auto w-10/12 p-10 min-h-screen overflow-y-auto scroll-smooth font-poppins text-softBlack">
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
          <CustomRadioButton
            label="Open Now"
            checked={isRadioChecked}
            onChange={handleRadioChange}
          />
          <CustomSelect
            selected={selectedPrice}
            initialValue={"Select price"}
            optionValue={prices}
            onChange={handlePriceChange}
          />
          <CustomSelect
            selected={selectedCategory}
            initialValue={"Select category"}
            optionValue={categories.map((cat) => cat.name)}
            onChange={handleCategoryChange}
          />
        </div>
        <button
          className={`${
            showOpenNow || selectedCategory !== "" || selectedPrice !== ""
              ? "border-darkerSky text-darkerSky"
              : "border-extraLightGray text-extraLightGray"
          } bg-white border-1 h-fit px-8 py-1`}
          disabled={isClearDisabled}
          onClick={handleClearFilter}
        >
          CLEAR ALL
        </button>
      </div>
      <hr className="border-extraLightGray" />
      <div className="py-10">
        <h3 className="font-medium text-softBlack text-xl mb-5">
          All Restaurants
        </h3>
        {loading ? (
          <p>Load data...</p>
        ) : restaurants.length > 0 ? (
          <div className="grid grid-cols-4 gap-x-4 gap-y-6 mb-14">
            {showOpenNow || selectedCategory !== "" || selectedPrice !== ""
              ? filteredRestaurants.map((restaurant) => (
                  <GridItem key={restaurant.id} restaurant={restaurant} />
                ))
              : restaurants
                  .slice(0, visibleCount)
                  .map((restaurant) => (
                    <GridItem key={restaurant.id} restaurant={restaurant} />
                  ))}
          </div>
        ) : (
          <p>No data available</p>
        )}
        <div className="flex justify-center">
          {showOpenNow || selectedCategory !== "" || selectedPrice !== "" ? (
            <div></div>
          ) : (
            visibleCount < restaurants.length && (
              <button
                className="border-1 border-darkerSky bg-white py-2.5 w-1/4 text-darkerSky text-sm transition-all hover:translate-y-2"
                onClick={handleLoadMore}
              >
                LOAD MORE
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};
