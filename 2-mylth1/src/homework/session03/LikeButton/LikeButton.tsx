import React, { useState } from "react";
import "../LikeButton/style.css";

interface LikeButtonProps {}

function LikeButton(props: LikeButtonProps) {
  //Khởi tạo state:
  const [isLike, setIsLike] = useState(true);

  const handleOnClick = () => {
    setIsLike(!isLike);
  };

  return (
    <>
      <button className="like_btn" onClick={handleOnClick}>
        {isLike === true ? "unlike" : "like"}
        <i
          className={
            isLike === true ? "fas fa-thumbs-down" : "fas fa-thumbs-up"
          }
        ></i>
      </button>
    </>
  );
}

export default LikeButton;
