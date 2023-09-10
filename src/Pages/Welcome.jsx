import React from "react";
import Marquee from "./Marquee";

export default function Notice() {
  return (
    <div>
      <div className="flex md:flex-row flex-col text-center items-center">
        <div className=" bg-blue-900 rounded-full text-white flex overflow-hidden items-center h-[50px] w-full">
          <Marquee />
        </div>
      </div>
    </div>
  );
}
