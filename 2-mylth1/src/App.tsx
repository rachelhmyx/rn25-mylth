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

function App() {
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





      {/* Practice Part */}

      {/* 1-Block UI Chart Bar */}
      

      {/* End of 1-Block UI Chart bar */}

      {/* End of Practice Part */}
    </>
  );
}

export default App;
