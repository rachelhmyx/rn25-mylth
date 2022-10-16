import React from "react";
import "../SaleProduct/style.css";

interface RatingProductProps {}

function RatingProduct(pros: RatingProductProps) {
  return (
    <>
      <div className="rating_product">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="far fa-star"></i>
      </div>
    </>
  );
}

export default RatingProduct;
