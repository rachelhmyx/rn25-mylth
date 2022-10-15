import React from "react";
import "../Product/style.css";

interface ButtonAddProps {}

function ButtonAdd(props: ButtonAddProps) {
  return (
    <>
      <button className="add-to-cart-btn">
        <i className="fas fa-shopping-cart"></i>Add to cart
      </button>
    </>
  );
}

export default ButtonAdd;
