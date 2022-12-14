import React from "react";
import "../Product/style.css";

interface ProductSizeProps {
  productSize?: string;
}

function ProductSize(props: ProductSizeProps) {
  return (
    <>
      <div className="product_size">
        <p>{props.productSize}</p>
      </div>
    </>
  );
}

export default ProductSize;
