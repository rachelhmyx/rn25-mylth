import React from "react";
import "../SocialBlock/style.css";
import { FaFacebookF } from "react-icons/fa";

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
        <FaFacebookF size={50} color="#fff" />
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
