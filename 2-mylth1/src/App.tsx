import React from "react";
import logo from "./logo.svg";
import "./App.css";
import img from "./images/traffic.jpg";
import Header from "./components/Header"
import Footer from "./components/Footer";
function App() {
  return (
    <>
      {/* Heading */}
      <Header/>
      {/* End of Heading */}

      {/* Content */}
      <div className="content">
        <div className="sub-content-1">
          <p>The Drive</p>
          <p>The Walk</p>
          <p>The Return</p>
          <p>The End</p>
        </div>

        <div className="sub-content-2">
          <h1>The Walk</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi nisi
            facilis est quasi officia in. Sint pariatur id distinctio autem!
          </p>
          <img src={img} alt="" className="sub-content-img" />
        </div>

        <div className="sub-content-3">
          <div className="detail content-1">
            <h1>What?</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="detail content-2">
            <h1>Where?</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="detail content-3">
            <h1>Price?</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
          </div>
        </div>
      </div>
      {/* End of Content */}

      {/* Footer */}
      <Footer/>
      {/* End of Footer */}
    </>
  );
}

export default App;
