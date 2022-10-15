import React from "react";
import "../Person/style.css";

interface EmailProps {
    email ?: string;
    color1 ?: string;
}

function Email(props: EmailProps) {
  return (
    <>
      <div className="zone email" style={{backgroundColor : props.color1}}>
        <h5>Email ID</h5>
        <p>
          <i className="fas fa-envelope"></i>
          {props.email}
        </p>
      </div>
    </>
  );
}

export default Email;
