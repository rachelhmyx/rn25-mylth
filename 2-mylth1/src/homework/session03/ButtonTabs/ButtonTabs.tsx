import React, { useState } from "react";
import "./style.css";

function ButtonTabs() {
  const defaultTabs = [
    {
      title: "History",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque. ",
    },
    {
      title: "Approach",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis. ",
    },
    {
      title: "Culture",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. ",
    },
    {
      title: "Method",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et. ",
    },
  ];

  //Hình thái của các button có sự thay đổi, khi click vào mỗi button thì phần text title và background color sẽ có sự thay đổi, nên sẽ truyền vào state:

  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  return (
    <>
      <div className="tab_button_container">
        {defaultTabs.map((item, index) => {
          const isActiveTab = index === selectedTabIndex;
          return (
            <button
              className="tab_title"
              style={{
                backgroundColor: isActiveTab ? "#47B475" : "#bebebe",
                color: isActiveTab ? "#fff" : "black",
                textTransform: "uppercase",
              }}
              onClick={() => {
                setSelectedTabIndex(index);
              }}
            >
              {item.title}
            </button>
          );
        })}
      </div>
      <div className="tab_button_container">
        {defaultTabs.map((item, index) => {
          if (index === selectedTabIndex) {
            return <div className="tab_content">{item.content}</div>;
          } else {
            return null;
          }
        })}
      </div>
    </>
  );
}

export default ButtonTabs;
