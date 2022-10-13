import React from "react";
import "../ChartColumn/style.css";

interface ChartColumnProps {
  text?: string;
  number?: number;
}

function ChartColumn(props: ChartColumnProps) {
  return (
    <>
      <div className="zone">
        <p className="heading-text">{props.text}</p>
        <p className="number">{props.number}</p>

        <div className="column-part">
          <div className="column column-1"></div>
          <div className="column column-2"></div>
          <div className="column column-3"></div>
          <div className="column column-4"></div>
          <div className="column column-5"></div>
        </div>

        <div className="date">
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
        </div>
      </div>
    </>
  );
}

export default ChartColumn;
