import { useState } from "react";
import ManpowerList from "./ManpowerList";
import HeadMaster from "./HeadMaster";
import Footer from "./Footer";
import Students from "./Students";
import Notice from "./Notice";
import GifImg from "./GifImg";
import PhotoAndNotice from "./PhotoAndNotice";
import History from "./History";
import Contact from "./Contact";
import Admission from "./Admission";
import Result from "./Result";
import Login from "./LogIn";
import Attendance from "./Attendance";

//===================নোটিশ (এখানে পরিবর্তন করুন)=====================
let notice = [
  "পরীক্ষার ফলাফল ২৯-০৮-২০২৩ইং",
  "প্রধান শিক্ষকের আদেশ",
  "বার্ষিক বনভোজন",
  "সাংস্কৃতিক অনুষ্ঠান",
  "মাসিক বেতন পরিশোধ প্রসঙ্গে",
  "স্কুলের আভ্যন্তরীন নিয়ম",
  "ছুটির জন্য আবেদন পত্র",
];
let noticeDestination = [
  "notice/leave-notice-2020.pdf",
  "notice/প্রধান শিক্ষকের আদেশ.pdf",
  "notice/বার্ষিক বনভোজন.pdf",
  "notice/সাংস্কৃতিক অনুষ্ঠান.pdf",
  "notice/মাসিক বেতন পরিশোধ প্রসঙ্গে.pdf",
  "notice/স্কুলের আভ্যন্তরীন নিয়ম.pdf",
  "notice/ছুটির জন্য আবেদন পত্র.pdf",
];

function Header() {
  const [toggle, setToggle] = useState(1);
  const [open, setOpen] = useState(false);

  function updateToggle(id) {
    setToggle(id);
  }
  return (
    <div>
      <div className="px-3 lg:px-[60px] xl:px-[100px] max-w-[1600px] mx-auto">
        <div className="bg-violet-900 md:text-base text-sm py-2 px-4 flex items-center justify-between text-white">
          <p>EIIN : 114688, MPO CODE : 4211071301</p>
          <p>{new Date().toLocaleDateString()}</p>
        </div>

        <div className="py-4 flex md:flex-row flex-col md:items-center md:gap-4">
          <img src="logo.png" className="w-20 md:w-28 h-20 md:h-28 " alt="" />
          <div>
            <p className="font-bold text-xl md:text-3xl lg:text-5xl">
              চৌধুরী মালঞ্চ উচ্চ বিদ্যালয়
            </p>
            <div className="bg-gray-900 my-1 h-[1px] w-full"></div>
            <p className="text-blue-800 text-base md:text-xl lg:text-3xl uppercase font-bold">
              Chowdhury Malancha High School
            </p>
            {/* <p className="text-red-800 pt-2 text-base md:text-xl lg:text-3xl font-bold">
              প্রতিষ্ঠাতাঃ 
            </p> */}
          </div>
        </div>
        <div>
          <div
            onClick={() => setOpen(!open)}
            className="md:hidden block bg-violet-900 py-2 text-white text-2xl cursor-pointer px-4">
            <ion-icon name={open ? "close-outline" : "menu-outline"}></ion-icon>
          </div>
          <div
            className={`${
              open ? "block" : "hidden"
            } bg-violet-700 md:bg-violet-900 duration-500 flex md:flex md:flex-row flex-col justify-center gap-2 lg:gap-8 md:items-center text-white`}>
            <a
              onClick={() => updateToggle(1)}
              href="#"
              className={`${
                toggle === 1 ? "active" : null
              } hover:bg-violet-500 py-3 px-4`}>
              মূলপাতা
            </a>

            <a
              onClick={() => updateToggle(2)}
              href="#"
              className={`${
                toggle === 2 ? "active" : null
              } hover:bg-violet-500 py-3 px-4`}>
              জনবল
            </a>

            <a
              onClick={() => updateToggle(3)}
              href="#"
              className={`${
                toggle === 3 ? "active" : null
              } hover:bg-violet-500 py-3 px-4`}>
              শিক্ষার্থীদের তথ্য
            </a>
            <a
              onClick={() => updateToggle(4)}
              href="#"
              className={`${
                toggle === 4 ? "active" : null
              } hover:bg-violet-500 py-3 px-4`}>
              ভর্তি আবেদন
            </a>
            <a
              onClick={() => updateToggle(5)}
              href="#"
              className={`${
                toggle === 5 ? "active" : null
              } hover:bg-violet-500 py-3 px-4`}>
              অনলাইন হাজিরা
            </a>
            <a
              onClick={() => updateToggle(6)}
              href="#"
              className={`${
                toggle === 6 ? "active" : null
              } hover:bg-violet-500 py-3 px-4`}>
              পরীক্ষার ফলাফল
            </a>
            <a
              onClick={() => updateToggle(7)}
              href="#"
              className={`${
                toggle === 7 ? "active" : null
              } hover:bg-violet-500 py-3 px-4`}>
              যোগাযোগ
            </a>
            <a
              onClick={() => updateToggle(8)}
              href="#"
              className={`${
                toggle === 8 ? "active" : null
              } hover:bg-violet-500 py-3 px-4`}>
              লগ ইন
            </a>
          </div>
        </div>

        <div className={toggle === 1 ? "block" : "hidden"}>
          <div className="py-3 md:py-4 lg:py-6"></div>
          <Notice notice={notice} destination={noticeDestination} />
          <div className="py-3 md:py-4 lg:py-6"></div>
          <GifImg />
          <div className="py-3 md:py-4 lg:py-6"></div>
          <PhotoAndNotice notice={notice} destination={noticeDestination} />
          <div className="py-3 md:py-4 lg:py-6"></div>
          <HeadMaster />
          <div className="py-3 md:py-4 lg:py-6"></div>
          <History />
        </div>
        <div className={toggle === 2 ? "block" : "hidden"}>
          <div className="py-3 md:py-4 lg:py-6"></div>
          <ManpowerList />
        </div>
        <div className={toggle === 3 ? "block" : "hidden"}>
          <div className="py-3 md:py-4 lg:py-6"></div>
          <Students />
        </div>
        <div className={toggle === 4 ? "block" : "hidden"}>
          <div className="py-3 md:py-4 lg:py-6"></div>
          <Admission />
        </div>
        <div className={toggle === 5 ? "block" : "hidden"}>
          <div className="py-3 md:py-4 lg:py-6"></div>
          <Attendance />
        </div>
        <div className={toggle === 6 ? "block" : "hidden"}>
          <div className="py-3 md:py-4 lg:py-6"></div>
          <Result />
        </div>
        <div className={toggle === 7 ? "block" : "hidden"}>
          <div className="py-3 md:py-4 lg:py-6"></div>
          <Contact />
        </div>
        <div className={toggle === 8 ? "block" : "hidden"}>
          <div className="py-3 md:py-4 lg:py-6"></div>
          <Login />
        </div>
      </div>
      <div className="py-3 md:py-4 lg:py-6"></div>
      <Footer />
    </div>
  );
}

export default Header;
