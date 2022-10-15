import React from "react";
import "../SocialBlock/style.css";

interface SocialBlockProps {
  color?: string;
  text?: string;
  iconName?: string;
  total?: number;
  unit?: string;
}

function SocialBlock(props: SocialBlockProps) {
  return (
    <>
      <div className="social-block" style={{ backgroundColor: props.color }}>
        <i className={props.iconName}></i>
        <h1 className="social-name">{props.text}</h1>
        <p className="total">
          {props.total}
          {props.unit}
        </p>
      </div>
    </>
  );
}

export default SocialBlock;
