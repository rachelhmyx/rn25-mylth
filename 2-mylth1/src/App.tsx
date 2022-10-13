import React from "react";
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

function App() {
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

      {/* KẾT THÚC PHẦN LUYỆN TẬP */}

      {/* Social Block */}
      <div className="block">
        <SocialBlock
          color="#619BEC"
          text="Facebook"
          iconName=""
          total={500000}
          unit="Likes"
        />
        <SocialBlock
          color="#31C8DD"
          text="Twitter"
          iconName=""
          total={40000}
          unit="Tweets"
        />
        <SocialBlock
          color="#F78153"
          text="Google +"
          iconName=""
          total={460000}
          unit="Plus"
        />
        <SocialBlock
          color="#F75354"
          text="Pinterest"
          iconName=""
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
    </>
  );
}

export default App;
