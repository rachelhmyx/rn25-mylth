import React, { useState } from "react";
import "../IconTabs/style.css";

const defaultIconTab = [
  {
    icon: "fas fa-wifi",
    title: "History",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    icon: "fas fa-star",
    title: "Approach",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore ver.",
  },
  {
    icon: "fas fa-carrot",
    title: "Culture",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo in.",
  },
  {
    icon: "fas fa-location-arrow",
    title: "Method",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
];

function IconTabs() {
  const [selectedIcon, setSelectedIcon] = useState(0);
  return (
    <>
      <div className="icon_tab_container">
        <div className="icon">
          {defaultIconTab.map((item, index) => {
            const isActiveIcon = index === selectedIcon;
            return (
              <div
                key={index}
                className="icon_tab"
                onClick={() => {
                  setSelectedIcon(index);
                }}
                style={{ color: isActiveIcon ? "#47B475" : "black" }}
              >
                <i className={item.icon}></i>
                <div className="title">{item.title}</div>
              </div>
            );
          })}
        </div>

        <div className="content">
          {defaultIconTab.map((item, index) => {
            if (index === selectedIcon) {
              return <div key={index}>{item.content}</div>;
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </>
  );
}

export default IconTabs;
