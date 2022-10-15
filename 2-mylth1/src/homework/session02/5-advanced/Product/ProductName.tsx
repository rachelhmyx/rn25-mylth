import React from "react";
import "../Product/style.css";

interface ProductNameProps {
  productName?: string;
}

function ProductName(props: ProductNameProps) {
  return (
    <>
      <div className="product-name">
        <h3>{props.productName}</h3>
      </div>
    </>
  );
}

export default ProductName;
