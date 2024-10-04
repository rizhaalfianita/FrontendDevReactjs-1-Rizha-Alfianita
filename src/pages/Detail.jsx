import { React, useState, useEffect } from "react";
import { ReviewItem } from "../components/ReviewItem";
import axios from "axios";
import { useParams } from "react-router-dom";
import { DynamicStar } from "../components/DynamicStar";

export const Detail = () => {
  const { id } = useParams();
  const stars = Array(5).fill(0);
  const [detailResto, setDetailResto] = useState({});
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = "https://api-restaurant-ol2j.onrender.com/restaurants/" + id;
  const imageApiURl = "https://restaurant-api.dicoding.dev/images/small/";

  useEffect(() => {
    const fetchData = async () => {
      axios.get(apiUrl).then((res) => {
        setDetailResto(res.data);
        setReviews(res.data.customerReviews);
        console.log(res.data.customerReviews);
        setLoading(false);
      });
    };
    fetchData();
  }, [id, apiUrl]);

  return (
    <div className="min-h-screen overflow-auto scroll-smooth">
      <img
        src={imageApiURl + detailResto.pictureId}
        alt=""
        className="h-96 w-full object-cover max-sm:h-64"
      />
      <div className="py-16 w-10/12 mx-auto font-poppins text-softBlack">
        <div className="flex justify-between">
          <h2 className="text-3xl mb-8 font-medium max-sm:text-2xl">
            {detailResto.name}
          </h2>
          <div className="flex gap-x-1">
            {stars.map((_, index) => (
              <DynamicStar
                key={index}
                fill={detailResto.rating > index ? "accentAmber" : "gray"}
              />
            ))}
          </div>
        </div>
        <p className="text-justify mb-8 max-sm:text-sm">
          {detailResto.description}
        </p>
        <h3 className="font-medium text-lg mb-3 max-sm:text-base">
          Categories
        </h3>
        <div className="flex gap-x-2.5 mb-10">
          {detailResto.categories && detailResto.categories.length > 0 ? (
            detailResto.categories.map((category) => (
              <p
                key={category.id}
                className="px-5 py-0.5 bg-lightSky rounded max-sm:text-sm"
              >
                {category.name}
              </p>
            ))
          ) : (
            <p>No categories available</p>
          )}
        </div>
        <h3 className="font-medium text-lg mb-6 mt-8 max-sm:text-base">
          Review
        </h3>

        {loading ? (
          <p>Loading reviews...</p>
        ) : reviews.length > 0 ? (
          <div>
            {reviews.map((custReview) => (
              <ReviewItem customerReview={custReview} />
            ))}
          </div>
        ) : (
          <p>No review available</p>
        )}
      </div>
    </div>
  );
};
