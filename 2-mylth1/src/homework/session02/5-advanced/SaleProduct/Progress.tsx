import React from "react";
import "../SaleProduct/style.css";

interface ProgressProps {
  progress?: number;
}

function Progress(props: ProgressProps) {
  return (
    <>
      <div className="progress">
        <div
          className="progress-bar bg-warning"
          role="progressbar"
          aria-label="Warning example"
          style={{ width: props.progress }}
        ></div>
      </div>
    </>
  );
}

export default Progress;
