import React, { useState } from "react";
import "../../ReactHook/style.css";

function ColorBox() {
  const [color, setColor] = useState(true);
  const handleOnClick = () => {
    setColor(!color);
  };

  return (
    <>
      <div
        className="color_box"
        style={{ backgroundColor: color === true ? "pink" : "green" }}
        onClick={handleOnClick}
      >
        Color Box
      </div>
    </>
  );
}

export default ColorBox;
