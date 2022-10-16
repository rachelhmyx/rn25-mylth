import React from "react";
import "../SaleProduct/style.css";

interface HeaderProps {
  text1?: string;
  text2?: string;
  link?: string;
}

function Header(props: HeaderProps) {
  return (
    <>
      <header>
        <h4>{props.text1}</h4>
        <div>
          <h6>{props.text2}</h6>
        </div>

        <a href="!#">{props.link}</a>
      </header>
    </>
  );
}

export default Header;
