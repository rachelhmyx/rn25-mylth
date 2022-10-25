import React, { useState } from "react";
import "../ButtonAccordions/style.css";

const defaultAccordions = [
  {
    title: "Simple panels",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Toggle information",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Nice Touch",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

function ButtonAccordions() {
  const [selectedButton, setSelectedButton] = useState(0);
  const [selectedButton1, setSelectButton1] = useState(0);
  return (
    <>
      <div className="accordion_container">
        <div className="accordion1">
          {defaultAccordions.map((item, index) => {
            const isActiveButton = index === selectedButton;
            return (
              <div className="sub accordion1">
                <button
                  key={index}
                  onClick={() => {
                    setSelectedButton(index);
                  }}
                  style={{
                    backgroundColor: isActiveButton ? "#47B475" : "#F0F0F0",
                    color: isActiveButton ? "#fff" : "gray",
                  }}
                >
                  {item.title}
                </button>
                <div style={{ display: isActiveButton ? "block" : "none" }}>
                  {item.content}
                </div>
              </div>
            );
          })}
        </div>
        <div className="accordion2">
          {defaultAccordions.map((item, index) => {
            const isActiveButton = index === selectedButton1;
            return (
              <div className="sub accordion2">
                <button
                  key={index}
                  onClick={() => {
                    setSelectButton1(index);
                  }}
                  style={{
                    backgroundColor: isActiveButton ? "#47B475" : "#F0F0F0",
                    color: isActiveButton ? "#fff" : "gray",
                  }}
                >
                  {item.title}
                </button>
                <div style={{ display: "block" }}>{item.content}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ButtonAccordions;
