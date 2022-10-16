import React from "react";
import "../Product/style.css";

interface ProductImageProps {
  imageLink?: string;
}

function ProductImage(props: ProductImageProps) {
  return (
    <>
      <div className="product_image">
        <img src={props.imageLink} alt="" />
      </div>
    </>
  );
}

export default ProductImage;
