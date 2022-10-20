import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import Content1 from "./homework/session02/1-basicUI/components/Content1";
import Content2 from "./homework/session02/2-basicUI/components/Content2";
import Content3 from "./homework/session02/3-basicUI/components/Content3";
import ChartBar1 from "./homework/session02/4-practice/1-blockUI/components/ChartBar1";
import Profile from "./homework/session02/4-practice/2-blockUI/components/Profile";

import SocialBlock from "./homework/session02/4-practice/SocialBlock";
import ChartColumn from "./homework/session02/4-practice/ChartColumn";
import Person from "./homework/session02/4-practice/Person/Person";

import ClassComponent from "./ComponentLifeCycle/ClassComponent";
import CountNumber from "./ComponentLifeCycle/CountNumber";
import ReactHook from "./StateinFunctionalComponent/FunctionalComponent";
import Product from "./homework/session02/5-advanced/Product/Product";
import SaleProduct from "./homework/session02/5-advanced/SaleProduct/SaleProduct";
import LikeButton from "./homework/session03/LikeButton/LikeButton";
import LikeButtonClassComponent from "./homework/session03/LikeButton/LikeButton";
import RateButtonForLoop from "./homework/session03/RateButton/RateButtonForLoop";
import RateButtonClassComponent from "./homework/session03/RateButton/RateButtonClassComponent";
import RateButtonFunctionalComponent from "./homework/session03/RateButton/RateButtonFunctionalComponent";




function App() {
  //Mua xăng: 

  //Case 1:b <= 2a -> mua 2 lít mua b
  //3 2L: 1 1L: 15
  //3: phan nguyen 7/2 ?? parseInt(7/2) * b
  //1: 7 - (parseInt(7/2)*2) * a

  //Case 2: b > 2a -> mua a
  //N * a

  //output: 3
  //n=5
  //1L: 1 đồng 
  //2L : 1 đồng









  let containerStyle = {
    height: "800px",
    margin: "200px auto",
    padding: "40px 40px",
    border: "1px solid gray",
  };

  let progressStyle = {
    height: "60px",
    margin: "0px 0px 50px 0px",
  };

  return (
    <>
      

      {/* Basic UI - Compulsory Part*/}

      <div className="basicUI">
        {/* Basic UI 1 */}
        <div className="basicUI-1">
          <div className="image-1">
            <img src={img1} alt="" />
          </div>
          <Content1 />
        </div>
        {/* End of Basic UI 1 */}

        {/* Basic UI 2 */}
        <div className="basicUI-2">
          <div className="image-2">
            <img src={img2} alt="" />
          </div>
          <Content2 />
        </div>
        {/* End of Basic UI 2 */}

        {/* Basic UI 3 */}
        <div className="basicUI-3">
          <div className="image-3">
            <img src={img3} alt="" />
          </div>
          <Content3 />
        </div>
        {/* End of Basic UI 3 */}
      </div>

      {/* End of Basic UI - Compulsory Part */}

      {/* PHẦN LUYỆN TẬP */}

      {/* 1-Block UI Chart Bar */}
      <div className="container" style={containerStyle}>
        <div className="progress" style={progressStyle}>
          <ChartBar1
            text="Bandwidth"
            segOneColor="#E54D4C"
            percentageText="20%"
            segTwoColor="#F75354"
            segTwoWidth={150}
          />
        </div>

        <div className="progress" style={progressStyle}>
          <ChartBar1
            text="Storage"
            segOneColor="#2DB8CD"
            percentageText="50%"
            segTwoColor="#31C8DD"
            segTwoWidth={400}
          />
        </div>

        <div className="progress" style={progressStyle}>
          <ChartBar1
            text="User"
            segOneColor="#4AC25E"
            percentageText="70%"
            segTwoColor="#51D567"
            segTwoWidth={550}
          />
        </div>

        <div className="progress" style={progressStyle}>
          <ChartBar1
            text="Visitors"
            segOneColor="#E9C318"
            percentageText="30%"
            segTwoColor="#FCD518"
            segTwoWidth={270}
          />
        </div>

        <div className="progress" style={progressStyle}>
          <ChartBar1
            text="Emails"
            segOneColor="#BB70D5"
            percentageText="45%"
            segTwoColor="#CB79E7"
            segTwoWidth={350}
          />
        </div>
        <div className="progress" style={progressStyle}>
          <ChartBar1
            text="Basic"
            segOneColor="#EB59D6"
            percentageText="80%"
            segTwoColor="#FE60E8"
            segTwoWidth={650}
          />
        </div>
        <div className="progress" style={progressStyle}>
          <ChartBar1
            text="Others"
            segOneColor="#5890DA"
            percentageText="37%"
            segTwoColor="#619BEC"
            segTwoWidth={310}
          />
        </div>
      </div>
      {/* End of 1-Block UI Chart bar */}

      {/* Block UI - Profile Component */}
      <div className="container" style={containerStyle}>
        <Profile
          iconType="fab fa-android"
          bgIcon="#53D261"
          text="HTML"
          bgInnerBar="#51D567"
          widthInnerBar={450}
        />
        <Profile
          iconType="fab fa-apple"
          bgIcon="#F1544D"
          text="CSS"
          bgInnerBar="#F65354"
          widthInnerBar={400}
        />
        <Profile
          iconType="fab fa-dropbox"
          bgIcon="#32C9DE"
          text="PHP"
          bgInnerBar="#33C8DC"
          widthInnerBar={250}
        />
        <Profile
          iconType="fab fa-java"
          bgIcon="#FFD11B"
          text="Java"
          bgInnerBar="#FFD11B"
          widthInnerBar={600}
        />
        <Profile
          iconType="fal fa-pepper-hot"
          bgIcon="#CD7CE3"
          text=".Net"
          bgInnerBar="#CD7CE3"
          widthInnerBar={300}
        />
      </div>
      {/* End of Block UI - Profile Component */}

      {/* Social Block */}
      <div className="block">
        <SocialBlock
          color="#619BEC"
          text="Facebook"
          iconName="fab fa-facebook-f"
          total={500000}
          unit="Likes"
        />
        <SocialBlock
          color="#31C8DD"
          text="Twitter"
          iconName="fab fa-twitter"
          total={40000}
          unit="Tweets"
        />
        <SocialBlock
          color="#F78153"
          text="Google +"
          iconName="fab fa-google-plus-g"
          total={460000}
          unit="Plus"
        />
        <SocialBlock
          color="#F75354"
          text="Pinterest"
          iconName="fab fa-pinterest"
          total={34000}
          unit="Pins"
        />
      </div>
      {/* End of Social Block */}

      {/* Chart Column */}
      <div className="block">
        <ChartColumn text="Today's Visitors" number={24599} />
        <ChartColumn text="Yesterday's Visitors" number={15699} />
        <ChartColumn text="Total Downloads" number={124599} />
      </div>
      {/* End of Chart Column */}

      {/* Person Block */}
      <div className="block">
        <Person />
      </div>
      {/* End of Person Block */}

      {/* KẾT THÚC PHẦN LUYỆN TẬP CỦA SESSION 02 */}

      {/* Phần Nâng cao của Session 02 */}
      <div className="block">
        <Product />
      </div>

      <SaleProduct />

      {/* Kết thúc phần Nâng cao của session 02 */}

      <ClassComponent text="Hello World" />

      <CountNumber />
      <ReactHook/>

      {/* Session 03 */}
      <LikeButton/>
      <LikeButtonClassComponent/>

      {/* <RateButton/> */}
      <RateButtonForLoop/>
      <RateButtonFunctionalComponent/><br></br>
      <RateButtonClassComponent/>
      
      {/* End of Session 03 */}

      {/* <Form/> */}

      
    </>
  );
}

export default App;
