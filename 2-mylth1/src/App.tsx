import React from "react";
import logo from "./logo.svg";
import "./App.css";
import img from "./images/traffic.jpg";
function App() {
  return (
    <>
      {/* Heading */}
      <header>
        <h1 className="heading-text">Pulpit Rock</h1>
      </header>
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
          <img src={img} alt="" />
        </div>

        <div className="sub-content-3">
          <h1>What?</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <h1>Where?</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <h1>Price?</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
        </div>
      </div>
      {/* End of Content */}

      {/* Footer */}
      <footer>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eveniet
          aspernatur quia obcaecati molestiae quisquam.
        </p>
      </footer>
      {/* End of Footer */}
    </>
  );
}

export default App;
