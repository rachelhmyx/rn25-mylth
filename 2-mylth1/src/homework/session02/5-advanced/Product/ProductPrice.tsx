import React from "react";
import "../Product/style.css";

interface ProductPriceProps {
  productPrice?: string;
}

function ProductPrice(props: ProductPriceProps) {
  return (
    <>
      <p className="product_price">{props.productPrice}</p>
    </>
  );
}

export default ProductPrice;
