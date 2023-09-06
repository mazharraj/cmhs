import React from "react";
import Carousel from "./Carousel";
const pictures = [
  "schoolimage/image1.jpg",
  "schoolimage/image2.jpg",
  "schoolimage/image3.jpg",
];
const PhotoAndNotice = ({ notice, destination }) => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row  justify-between lg:py-4 lg:px-4 bg-white gap-4">
        <div className="lg:w-[70%] md:h-[380px] overflow-hidden">
          <Carousel picture={pictures} />
        </div>
        <div className="lg:w-[30%] md:h-[380px] px-1 overflow-hidden">
          <div className="bg-gray-500 text-white p-2 flex items-center justify-between">
            <p>সকল নোটিশ</p>
          </div>
          <marquee direction="up">
            <div className="flex flex-col gap-4 justify-between">
              <div className="bg-gray-200 p-2">
                <a href={destination[0]} target="blank">
                  {notice[0]}
                </a>
              </div>
              <div className="bg-gray-200 p-2">
                <a href={destination[1]} target="blank">
                  {notice[1]}
                </a>
              </div>
              <div className="bg-gray-200 p-2">
                <a href={destination[2]} target="blank">
                  {notice[2]}
                </a>
              </div>
              <div className="bg-gray-200 p-2">
                <a href={destination[3]} target="blank">
                  {notice[3]}
                </a>
              </div>
              <div className="bg-gray-200 p-2">
                <a href={destination[4]} target="blank">
                  {notice[4]}
                </a>
              </div>
              <div className="bg-gray-200 p-2">
                <a href={destination[5]} target="blank">
                  {notice[5]}
                </a>
              </div>
              <div className="bg-gray-200 p-2">
                <a href={destination[6]} target="blank">
                  {notice[6]}
                </a>
              </div>
            </div>
          </marquee>
        </div>
      </div>
    </div>
  );
};

export default PhotoAndNotice;
