import React from "react";
import "../Product/style.css";
import dress from "../../../../images/dress.jpg";
import bag from "../../../../images/bag.jpg";
import shirt from "../../../../images/shirt.jpg";
import jean from "../../../../images/jean.jpg";
import ProductImage from "./ProductImage";
import ProductName from "./ProductName";
import ProductInfo from "./ProductInfo";
import ProductSize from "./ProductSize";
import ProductPrice from "./ProductPrice";
import ButtonAdd from "./ButtonAdd";

interface ProductProps {}

function Product(props: ProductProps) {
  return (
    <>
      <div className="product_block">
        <ProductImage imageLink={dress} />
        <ProductName productName="Tea Length Dress" />
        <ProductInfo
          productInfo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            cumque."
        />
        <ProductSize productSize="XL/XXL/S" />
        <ProductPrice productPrice="$25" />
        <ButtonAdd />
      </div>
      <div className="product_block">
        <ProductImage imageLink={bag} />
        <ProductName productName="Satchel" />
        <ProductInfo
          productInfo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            cumque."
        />
        <ProductSize productSize="XL/XXL/S" />
        <ProductPrice productPrice="$25" />
        <ButtonAdd />
      </div>
      <div className="product_block">
        <ProductImage imageLink={shirt} />
        <ProductName productName="Raglan Sleeve" />
        <ProductInfo
          productInfo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            cumque."
        />
        <ProductSize productSize="XL/XXL/S" />
        <ProductPrice productPrice="$25" />
        <ButtonAdd />
      </div>
      <div className="product_block">
        <ProductImage imageLink={jean} />
        <ProductName productName="Baggy Jean" />
        <ProductInfo
          productInfo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            cumque."
        />
        <ProductSize productSize="XL/XXL/S" />

        <span>
          <ProductPrice productPrice="$25" />
          <del>$75</del>
        </span>

        <ButtonAdd />
      </div>
    </>
  );
}

export default Product;
