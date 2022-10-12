import React from "react";

type Props = {
  text: string;
  segOneColor: string;
  percentageText: string;
  segTwoColor: string;
  segTwoWidth: number;
};

function ChartBar1(prop: Props) {
  return (
    <>
      <div
        className="progress-bar"
        role="progressbar"
        aria-label="Segment one"
        style={{
          backgroundColor: prop.segOneColor,
          width: 250,
          color: "#fff",
          fontSize: 25,
          fontWeight: "bold",
          textAlign: "right",
          paddingRight: 20,
          textTransform: "uppercase",
        }}
      >
        {prop.text}
      </div>

      <div
        className="progress-bar"
        role="progressbar"
        aria-label="Segment two"
        style={{
          backgroundColor: prop.segTwoColor,
          width: prop.segTwoWidth,
          color: "#fff",
          fontSize: 25,
          fontWeight: "bold",
        }}
      >
        {prop.percentageText}
      </div>
    </>
  );
}

export default ChartBar1;
