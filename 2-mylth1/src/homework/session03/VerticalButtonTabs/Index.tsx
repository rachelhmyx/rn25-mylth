import React, { useState } from "react";
import "../VerticalButtonTabs/style.css";

const defaultVerticalTabs = [
  {
    button: "History",
    title: "Let's Talk Tabs",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni doloreNeque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
  {
    button: "Approach",
    title: "Cool Tabs",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni doloreNeque porro quisquam est, qui dolorem ipsum quia dolor sit amet Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.",
  },
  {
    button: "Culture",
    title: "Shorter Tabs",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia.",
  },
  {
    button: "Method",
    title: "Longer Tabs",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni doloreNeque porro quisquam est, qui dolorem ipsum quia dolor sit amet.adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
  },
];

function VerticalButtonTabs() {
  const [selectedVertical, setSelectedVertical] = useState(0);
  return (
    <>
      <div className="vertical_tabs_container">
        <div className="vertical_button">
          {defaultVerticalTabs.map((item, index) => {
            const isActiveButton = index === selectedVertical;
            return (
              <button
                key={index}
                onClick={() => {
                  setSelectedVertical(index);
                }}
                style={{
                  backgroundColor: isActiveButton ? "#47B475" : "#F0F0F0",
                  color: isActiveButton ? "#fff" : "gray",
                }}
              >
                {item.button}
              </button>
            );
          })}
        </div>

        <div className="vertical_content">
          {defaultVerticalTabs.map((item, index) => {
            if (index === selectedVertical) {
              return (
                <div key={index}>
                  <h4>{item.title}</h4>
                  <hr />
                  <div>{item.content}</div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </>
  );
}

export default VerticalButtonTabs;
