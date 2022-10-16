import React from "react";

interface ProductInfoProps {
  productInfo?: string;
}

function ProductInfo(props: ProductInfoProps) {
  return (
    <>
      <div className="product_info">
        <p>{props.productInfo}</p>
      </div>
    </>
  );
}

export default ProductInfo;
