import React, { useState } from "react";
import "../RateButton/style.css";

interface Props {}

function RateButton(props: Props) {
  //Khởi tạo state:
  const [rating, setRating] = useState(0);

  return (
    <div className="star_rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= rating ? "on" : "off"}
            id="star_rating_btn"
            onClick={() => setRating(index)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
}

export default RateButton;
