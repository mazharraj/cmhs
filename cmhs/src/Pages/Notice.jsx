import React from "react";

export default function Notice({ notice, destination }) {
  return (
    <div>
      <div className="flex md:flex-row flex-col text-center">
        <p className="bg-violet-900 py-3 px-14 text-white">নোটিশ</p>
        <div className="border-2 border-gray-400 bg-white flex overflow-hidden items-center h-[50px] w-full">
          <marquee behavior="scroll" direction="left">
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-2 text-gray-700">
                <img src="logo.png" className="h-[20px]" alt="" />
                <a href={destination[0]} target="blank">
                  {notice[0]}
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <img src="logo.png" className="h-[20px]" alt="" />
                <a href={destination[1]} target="blank">
                  {notice[1]}
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <img src="logo.png" className="h-[20px]" alt="" />
                <a href={destination[2]} target="blank">
                  {notice[2]}
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <img src="logo.png" className="h-[20px]" alt="" />
                <a href={destination[3]} target="blank">
                  {notice[3]}
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <img src="logo.png" className="h-[20px]" alt="" />
                <a href={destination[4]} target="blank">
                  {notice[4]}
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <img src="logo.png" className="h-[20px]" alt="" />
                <a href={destination[5]} target="blank">
                  {notice[5]}
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <img src="logo.png" className="h-[20px]" alt="" />
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
}
