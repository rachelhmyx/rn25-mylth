import React from "react";
import "../SaleProduct/style.css";

interface ProductNameProps {
  productName?: string;
}

function ProductName(props: ProductNameProps) {
  return (
    <>
      <div className="product_name">
        <h5>{props.productName}</h5>
      </div>
    </>
  );
}

export default ProductName;
