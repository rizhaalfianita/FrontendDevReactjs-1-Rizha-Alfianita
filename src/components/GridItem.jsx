import { React } from "react";
import { useNavigate } from "react-router-dom";
import { DynamicStar } from "./DynamicStar";

export const GridItem = ({ restaurant }) => {
  const stars = Array(5).fill(0);
  const imageApiURl =
    "https://restaurant-api.dicoding.dev/images/small/" + restaurant.pictureId;

  const navigate = useNavigate();
  return (
    <div>
      <img src={imageApiURl} alt="" className="h-48 w-full" />
      <p className="font-medium my-2">{restaurant.name}</p>
      <div className="flex gap-x-1 mb-2">
        {stars.map((_, index) => (
          <DynamicStar
            key={index}
            fill={restaurant.rating > index ? "accentAmber" : "gray"}
          />
        ))}
      </div>
      <div className="flex justify-between text-gray text-xs font-medium mb-5">
        <div className="flex items-center gap-x-1.5">
          <p className="uppercase">{restaurant.categories[0].name}</p>
          <span className="w-1 h-1 rounded-full bg-gray"></span>
          <p>{`Rp ${restaurant.price}`}</p>
        </div>
        <div className="flex items-center gap-x-1">
          <span
            className={`w-2 h-2 rounded-full ${
              restaurant.status === "open now" ? "bg-sky" : "bg-rose"
            }`}
          ></span>
          <p className="text-xs uppercase">{restaurant.status}</p>
        </div>
      </div>
      <button
        className="bg-darkerSky py-2.5 text-white w-full text-sm hover:shadow-2xl shadow-sky hover:bg-mediumSky"
        onClick={() => navigate("/detail/" + restaurant.id)}
      >
        LEARN MORE
      </button>
    </div>
  );
};
