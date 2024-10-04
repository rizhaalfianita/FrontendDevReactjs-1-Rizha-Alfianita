import { React } from "react";
import { DynamicStar } from "./DynamicStar";

export const ReviewItem = ({ customerReview }) => {
  const stars = Array(5).fill(0);
  return (
    <div className="flex gap-x-4 font-poppins text-softBlack mb-6 max-sm:text-sm">
      <img
        src={customerReview.image}
        alt=""
        className="h-8 w-8 rounded-full object-cover"
      />
      <div>
        <p className="font-medium mb-1">{customerReview.name}</p>
        <div className="flex gap-x-1 mb-2">
          {stars.map((_, index) => (
            <DynamicStar
              key={index}
              fill={customerReview.rating > index ? "accentAmber" : "gray"}
            />
          ))}
        </div>
        <p className="mb-3 text-justify">{customerReview.review}</p>
      </div>
    </div>
  );
};
