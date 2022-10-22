import React from "react";
import { useState } from "react";
import "../ImageViewer/style.css";

const maxImageIndex = 6;

function ImageViewer() {
  const [imageIndex, setImageIndex] = useState(1);

  let imagePath = `/images/landscape${imageIndex}.jpg`;

  return (
    <>
      <div className="image-container">
        <img src={imagePath} alt="landscape_1" />

        <div className="btn_container">
          <button
            disabled={imageIndex === 1}
            className="btn_imageviewer"
            onClick={() => {
              setImageIndex(imageIndex - 1);
            }}
          >
            Previous
          </button>
          <span>{imageIndex}/6</span>
          <button
            disabled={imageIndex === maxImageIndex}
            className="btn_imageviewer"
            onClick={() => {
              setImageIndex(imageIndex + 1);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default ImageViewer;
