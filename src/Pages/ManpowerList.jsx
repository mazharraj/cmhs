import React, { useState } from "react";
import Footer from "./Footer";
import TeachersProfile from "./TeachersProfile";
import ManagingCommittee from "./ManagingCommittee";

export default function ManpowerList() {
  const [toggle, setToggle] = useState(1);

  function updateToggle(id) {
    setToggle(id);
  }
  return (
    <div>
      <div className="flex justify-center text-xl lg:text-2xl items-center gap-10">
        <p
          onClick={() => {
            updateToggle(1);
          }}
          className="bg-green-700 text-white py-2 rounded-md hover:bg-green-800 cursor-pointer duration-300 px-4">
          শিক্ষক-কর্মচারীঃ
        </p>
        <p
          onClick={() => {
            updateToggle(2);
          }}
          className="bg-green-700 text-white py-2 rounded-md hover:bg-green-800 cursor-pointer duration-300 px-4">
          পরিচালনা কমিটিঃ
        </p>
      </div>
      {/* Teachers Profile */}
      <div className={toggle === 1 ? "block" : "hidden"}>
        <TeachersProfile />
      </div>
      {/* Managing Committee Profile */}
      <div className={toggle === 2 ? "block" : "hidden"}>
        <ManagingCommittee />
      </div>
    </div>
  );
}
