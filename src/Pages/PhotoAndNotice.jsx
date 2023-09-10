import React from "react";

import Carousel from "./Carousel";

const pictures = [
  "schoolimage/image1.jpg",
  "schoolimage/image2.jpg",
  "schoolimage/image3.jpg",
];
const PhotoAndNotice = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row  justify-between lg:py-4 lg:px-4 bg-white gap-4">
        <div>
          <Carousel picture={pictures} />
        </div>
      </div>
    </div>
  );
};

export default PhotoAndNotice;
