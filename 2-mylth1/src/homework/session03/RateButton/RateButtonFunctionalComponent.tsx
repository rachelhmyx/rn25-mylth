import React, { useState } from "react";
import "../RateButton/style.css";

interface Props {}

function RateButtonFunctionalComponent(props: Props) {
  const [star, setStar] = useState(0);
  const arrStar = [1, 2, 3, 4, 5];

  return (
    <>
      {arrStar?.map((index) => {
        //Index ở đây đang chạy từ 1 đến 5, sao cho đủ 5 phần tử cho mảng mới.
        return index <= star ? (
          <i
            className="fas fa-star on"
            key={index}
            onClick={() => setStar(index)}
          ></i>
        ) : (
          <i
            className="fas fa-star off"
            key={index}
            onClick={() => setStar(index)}
          ></i>
        );
      })}
    </>
  );
}

export default RateButtonFunctionalComponent;
