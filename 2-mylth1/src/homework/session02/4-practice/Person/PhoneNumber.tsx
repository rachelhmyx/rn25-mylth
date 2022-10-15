import React from "react";
import "../Person/style.css";

interface PhoneNumberProps {
    phoneNumber ?: string;
    color2 ?: string;
}

function PhoneNumber(props: PhoneNumberProps) {
  return (
    <>
      <div className="zone phone-number" style={{backgroundColor : props.color2}}>
        <h5>Phone No</h5>
        <p>
          <i className="fas fa-phone"></i>
          {props.phoneNumber}
        </p>
      </div>
    </>
  );
}

export default PhoneNumber;
