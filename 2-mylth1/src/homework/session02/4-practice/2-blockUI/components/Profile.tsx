import React from "react";

type Props = {
  iconType: string;
  bgIcon: string;
  text: string;
  bgInnerBar: string;
  widthInnerBar: number;
};

function Profile(prop: Props) {
  let barStyle = {
    height: "60px",
    display: "flex",
    marginBottom: "50px",
  };

  let textStyle = {
    width: "200px",
    fontSize: "30px",
    fontWeight: "bold",
    color: "#767678",
    padding: "5px 20px",
  };

  let progressStyle = {
    width: "800px",
    height: "30px",
  };

  let innerBarStyle = {
    padding: "13px 0",
  };

  return (
    <>
      <div className="bar" style={barStyle}>
        <div
          className="icon"
          style={{
            width: 80,
            height: 60,
            paddingTop: 5,
            paddingBottom: 5,
            fontSize: 30,
            color: "#fff",
            textAlign: "center",
            background: prop.bgIcon,
          }}
        >
          <i className={prop.iconType}></i>
        </div>

        <div className="text" style={textStyle}>
          {prop.text}
        </div>

        <div className="inner-bar" style={innerBarStyle}>
          <div className="progress" style={progressStyle}>
            <div
              className="progress-bar"
              style={{ width: prop.widthInnerBar, background: prop.bgInnerBar }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
