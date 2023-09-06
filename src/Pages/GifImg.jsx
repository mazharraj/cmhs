import React from "react";

export default function GifImg() {
  return (
    <div>
      <div className="bg-white">
        <div className="grid grid-cols-3 gap-12 p-4">
          <div className="border-2 rounded border-gray-200 flex items-center justify-center">
            <img src="flag.gif" className="h-auto w-full" alt="" />
          </div>
          <div className="border-2 rounded border-gray-200 flex items-center justify-center">
            <img src="lily.jpg" className="h-auto w-full" alt="" />
          </div>
          <div className="border-2 rounded border-gray-200 flex items-center justify-center">
            <img src="sriti.gif" className="h-full w-full" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
