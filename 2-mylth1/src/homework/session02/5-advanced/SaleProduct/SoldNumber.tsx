import React from "react";
import "../SaleProduct/style.css";

interface SoldNumberProps {
  number: number;
}

function SoldNumber(props: SoldNumberProps) {
  return (
    <>
      <div className="sold_number">
        <p>Sold: {props.number}</p>
      </div>
    </>
  );
}

export default SoldNumber;
