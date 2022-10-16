import React from "react";
import "../SaleProduct/style.css";
import washing from "../../../../images/washing.jpg";
import speaker from "../../../../images/speaker.jpg";
import camera from "../../../../images/camera.jpg";
import headphone from "../../../../images/headphone.jpg";
import sofa from "../../../../images/sofa.jpg";
import book from "../../../../images/book.jpg";
import Header from "../SaleProduct/Header";
import Image from "../SaleProduct/Image";
import ShopName from "./ShopName";
import ProductPrice from "./ProductPrice";
import ProductName from "./ProductName";
import RatingProduct from "./RatingProduct";
import Progress from "./Progress";
import SoldNumber from "./SoldNumber";

interface SaleProductProps {}

function SaleProduct(props: SaleProductProps) {
  return (
    <>
      <div className="sale_product_block">
        <Header
          text1="Deal of the day"
          text2="End in: 6:17:17:39"
          link="View all"
        />

        <div className="product_list">
          <div className="product product_1">
            <Image linkImage={washing} />

            <ShopName shopName="Young Shop" />

            <ProductPrice
              currentPrice="$1,422.7"
              previousPrice="$1,525.5"
              sale="18% off"
            />
            <ProductName productName="LG White Front Load Steam Washer" />

            <RatingProduct />

            <Progress progress={230} />

            <SoldNumber number={10} />
          </div>

          <div className="product product_2">
            <Image linkImage={speaker} />

            <ShopName shopName="Young Shop" />

            <ProductPrice
              currentPrice="$96"
              previousPrice="$106"
              sale="18% off"
            />
            <ProductName productName="Edifier Powered Bookshelf Speakers" />

            <RatingProduct />

            <Progress progress={200} />

            <SoldNumber number={15} />
          </div>

          <div className="product product_3">
            <Image linkImage={camera} />

            <ShopName shopName="Young Shop" />

            <ProductPrice
              currentPrice="$62.99"
              previousPrice="$75.8"
              sale="18% off"
            />
            <ProductName productName="Amcrest Security Camera in White color" />

            <RatingProduct />

            <Progress progress={210} />

            <SoldNumber number={20} />
          </div>

          <div className="product product_4">
            <Image linkImage={book} />

            <ShopName shopName="Young Shop" />

            <ProductPrice
              currentPrice="$41.99"
              previousPrice="$57.8"
              sale="18% off"
            />
            <ProductName productName="Grand Slam Indoor Of Show Jumping Novel" />

            <RatingProduct />

            <Progress progress={200} />

            <SoldNumber number={22} />
          </div>
          <div className="product product_5">
            <Image linkImage={headphone} />

            <ShopName shopName="Young Shop" />

            <ProductPrice
              currentPrice="$106.96"
              previousPrice="$100.8"
              sale="18% off"
            />
            <ProductName productName="Sound Intone !65 Earphone White Version" />

            <RatingProduct />

            <Progress progress={180} />

            <SoldNumber number={10} />
          </div>

          <div className="product product_6">
            <Image linkImage={sofa} />

            <ShopName shopName="Young Shop" />

            <ProductPrice
              currentPrice="$670.2"
              previousPrice="$567.8"
              sale="18% off"
            />
            <ProductName productName="Korea Long Sofa Fabric in Blue Navy Color" />

            <RatingProduct />

            <Progress progress={250} />

            <SoldNumber number={79} />
          </div>
        </div>
      </div>
    </>
  );
}

export default SaleProduct;
