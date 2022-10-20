import React, { useState } from "react";
import "../RateButton/style.css";

interface Props {}

const maxStar = 5;

function RateButtonForLoop(props: Props) {
  const [star, setStar] = useState(0);
  //Sẽ có hai vòng lặp: in ra số 1 và in ra số 0.
  //Trường hợp star = 3: user đánh giá 3 sao: 11100
  //- in ra 3 số 1 và 2 số 0.
  //Thuộc tính key trong JSX: dùng để định danh phần tử
  //Việc user đánh giá cũng giống như việc set lại giá trị cho star = setStar.
  const renderStar = () => {
    let result = [];
    for (let index = 0; index < star; index++) {
      result.push(
        <span
          key={index}
          onClick={() => {
            setStar(index + 1);
          }}
        >
          <i className="fas fa-star on"></i>
        </span>
      );
    }

    for (let index = star; index < maxStar; index++) {
      result.push(
        <span
          key={index}
          onClick={() => {
            setStar(index + 1);
          }}
        >
          <i className="fas fa-star off"></i>
        </span>
      );
    }

    return result;
  };

  return (
    <>
      <span>{renderStar()}</span>
    </>
  );
}

export default RateButtonForLoop;
