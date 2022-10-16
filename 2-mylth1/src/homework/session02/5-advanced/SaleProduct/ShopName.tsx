import React from "react";
import "../SaleProduct/style.css";

interface ShopNameProps {
  shopName?: string;
}

function ShopName(props: ShopNameProps) {
  return (
    <>
      <div className="shop_name">
        <p>{props.shopName}</p>
      </div>
    </>
  );
}

export default ShopName;
