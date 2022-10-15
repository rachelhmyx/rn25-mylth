import React from "react";
import "../Person/style.css";

import Avatar from "./Avatar";
import Info from "./Info";
import DetailInfo from "./DetailInfo";
import Email from "./Email";
import PhoneNumber from "./PhoneNumber";

import image1 from "../../../../images/person1.jpg";
import image2 from "../../../../images/person2.jpg";
import image3 from "../../../../images/person3.jpg";
import image4 from "../../../../images/person4.jpg";

interface PersonProps {}

function Person(props: PersonProps) {
  return (
    <>
      <div className="person-block">
        <Avatar imageLink={image1} />
        <Info personName="Rachel Green" jobTitle="Developer" />
        <DetailInfo
          dateOfBirth="12/01/1998"
          bloodType="O+"
          edu="MCA"
          res="Bangalore"
        />
        <div className="contact-block">
          <Email email="rachelgreen@gmail.com" color1="#f75354" />
          <PhoneNumber phoneNumber="0353987564" color2="#51d567" />
        </div>
      </div>

      <div className="person-block">
        <Avatar imageLink={image2} />
        <Info personName="Ross Geller" jobTitle="Designer" />
        <DetailInfo
          dateOfBirth="25/06/1997"
          bloodType="AB"
          edu="Oxford University"
          res="London"
        />
        <div className="contact-block">
          <Email email="rossgeller@gmail.com" color1="#31C8DD" />
          <PhoneNumber phoneNumber="0352678435" color2="#619CEC" />
        </div>
      </div>

      <div className="person-block">
        <Avatar imageLink={image3} />
        <Info personName="Monica Geller" jobTitle="Chef" />
        <DetailInfo
          dateOfBirth="10/10/1989"
          bloodType="A"
          edu="Cambridge University"
          res="Birmingham"
        />
        <div className="contact-block">
          <Email email="monicageller@gmail.com" color1="#F78153" />
          <PhoneNumber phoneNumber="0352678879" color2="#FCD518" />
        </div>
      </div>
      <div className="person-block">
        <Avatar imageLink={image4} />
        <Info personName="Chandler Bing" jobTitle="Teacher" />
        <DetailInfo
          dateOfBirth="18/11/1987"
          bloodType="B"
          edu="Bristol University"
          res="Bristol"
        />
        <div className="contact-block">
          <Email email="chandlerbing@gmail.com" color1="#CB79E7" />
          <PhoneNumber phoneNumber="0352678765" color2="#FE60E8" />
        </div>
      </div>
    </>
  );
}

export default Person;
