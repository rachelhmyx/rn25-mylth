import React, { useState } from "react";
import "../../ReactHook/style.css";

const getRandomColor = () => {
  const COLOR_LIST = ["green", "red", "yellow", "blue", "aqua"];
  const randomIndex = Math.trunc(Math.random() * 5);
  return COLOR_LIST[randomIndex];
};

function ColorBoxRandom() {
  //Làm thế nào để khi load lại trang mà ko mất đi màu hiện tại và trở về màu ban đầu:

  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("box_color") || "deeppink";
    return initColor;
  });
  const handleOnClick = () => {
    const newColor = getRandomColor(); //hàm getRandomColor này phải được khai báo ở bên ngoài component.
    setColor(newColor);

    //Làm thế nào để khi load lại trang mà ko mất đi màu hiện tại và trở về màu ban đầu:
    localStorage.setItem("box_color", newColor);
  };

  return (
    <>
      <div
        className="color_box_random"
        style={{ backgroundColor: color }}
        onClick={handleOnClick}
      >
        Random Color Box
      </div>
    </>
  );
}

export default ColorBoxRandom;
