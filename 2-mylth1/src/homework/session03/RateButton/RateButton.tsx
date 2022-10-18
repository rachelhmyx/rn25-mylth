import React, { useState } from "react";

import "../RateButton/style.css";
import { FaStar } from "react-icons/fa";

interface Props {}

function RateButton(props: Props) {
  //Khai báo State:
  const [rating, setRating] = useState(null);
  const [hoverFill, setHoverFill] = useState(null);

  return (
    <>
      <div className="star">
        {[...Array(5)].map((_, index) => {
          const ratingValue = index + 1;

          return (
            <button
              key={index}
              onMouseEnter={() => setHoverFill(ratingValue)}
              onMouseLeave={() => setHoverFill(null)}
              onClick={() => setRating(ratingValue)}
            >
              <FaStar
                className="FaStar"
                size={80}
                style={{
                  color:
                    ratingValue <= (hoverFill || rating) ? "#ffe101" : "#ccc",
                }}
                onChange={() => setRating(ratingValue)}
                value={ratingValue}
              />
            </button>
          );
        })}
      </div>
    </>
  );
}

export default RateButton;
