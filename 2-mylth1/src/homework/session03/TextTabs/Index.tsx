import React, { useState } from "react";
import "../TextTabs/style.css";

const defaultTextTabs = [
  {
    title: "History",
    content:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
  },
  {
    title: "Approach",
    content:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut.",
  },
  {
    title: "Culture",
    content:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.",
  },
  {
    title: "Method",
    content:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas.",
  },
];

function TextTabs() {
  const [selectedTextTab, setSelectedTextTab] = useState(0);
  return (
    <>
      <div className="text_tab_title">
        {defaultTextTabs.map((item, index) => {
          const isActiveTextTab = index === selectedTextTab;
          return (
            <div
              key={index}
              onClick={() => {
                setSelectedTextTab(index);
              }}
              className="title"
              style={{ color: isActiveTextTab ? "#47B475" : "gray" }}
            >
              {item.title}
            </div>
          );
        })}
      </div>

      <div className="text_tab_content">
        {defaultTextTabs.map((item, index) => {
          if (index === selectedTextTab) {
            return (
              <div key={index} className="content">
                {item.content}
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </>
  );
}

export default TextTabs;
