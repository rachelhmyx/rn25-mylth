import React from "react";
import "../SaleProduct/style.css";
interface ImageProps {
  linkImage?: string;
}

function Image(props: ImageProps) {
  return (
    <>
      <div className="image_product">
        <img src={props.linkImage} alt="" />
      </div>
    </>
  );
}

export default Image;
