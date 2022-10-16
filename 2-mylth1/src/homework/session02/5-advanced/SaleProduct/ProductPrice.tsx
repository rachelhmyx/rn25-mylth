import React from "react";
import "../SaleProduct/style.css";

interface ProductPriceProps {
  currentPrice?: string;
  previousPrice?: string;
  sale?: string;
}

function ProductPrice(props: ProductPriceProps) {
  return (
    <>
      <div className="product_price">
        <h3>{props.currentPrice}</h3>
        <del>{props.previousPrice}</del>
        <h5>{props.sale}</h5>
      </div>
    </>
  );
}

export default ProductPrice;
