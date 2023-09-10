import { useState, useEffect } from "react";
import ManpowerList from "./ManpowerList";
import HeadMaster from "./HeadMaster";
import Footer from "./Footer";
import Students from "./Students";
import Notice from "./Welcome";
import GifImg from "./GifImg";
import PhotoAndNotice from "./PhotoAndNotice";
import History from "./History";
import Contact from "./Contact";
import Admission from "./Admission";

import Login from "./LogIn";
import Attendance from "./Attendance";
import AuthDetails from "./../components/AuthDetails";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import Dashboard from "./Dashboard";
import Notices from "./Notices";
import Results from "./Results";

function Header() {
  const [toggle, setToggle] = useState(1);
  const [open, setOpen] = useState(false);
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  function updateToggle(id) {
    setToggle(id);
  }
  return (
    <div>
      <div className="px-3 lg:px-[60px] xl:px-[100px] max-w-[1600px] mx-auto">
        <div className="bg-green-900 md:text-base text-sm py-2 px-4 flex items-center justify-between text-white">
          <p>EIIN : 114688, MPO CODE : 4211071301</p>

          <div className="flex items-center gap-4">
            <p>{new Date().toLocaleDateString()}</p>
          </div>
        </div>
        <div className="flex justify-end">
          <AuthDetails />
        </div>

        <div className="py-4 flex md:flex-row flex-col md:items-center md:gap-4">
          <img src="logo.png" className="w-20 md:w-28 h-20 md:h-28 " alt="" />
          <div>
            <p className="font-bold text-xl md:text-3xl lg:text-5xl">
              চৌধুরী মালঞ্চ উচ্চ বিদ্যালয়
            </p>
            <div className="bg-gray-900 my-1 h-[1px] w-full"></div>
            <p className="text-blue-800 text-base md:text-xl lg:text-3xl uppercase font-bold">
              Chowdhury Malancha High School
            </p>
            <p className="text-red-800 pt-2 text-base md:text-xl lg:text-3xl font-bold">
              প্রতিষ্ঠাতাঃ মরহুম মৌলভী রফাতুল্লাহ সরকার
            </p>
          </div>
        </div>
        <div>
          <div
            onClick={() => setOpen(!open)}
            className="md:hidden block bg-green-900 py-2 text-white text-2xl cursor-pointer px-4">
            <ion-icon name={open ? "close-outline" : "menu-outline"}></ion-icon>
          </div>
          <div
            className={`${
              open ? "block" : "hidden"
            } bg-green-700 md:bg-green-900 duration-500 flex md:flex md:flex-row flex-col justify-center gap-2 lg:gap-8 md:items-center text-white`}>
            <a
              onClick={() => updateToggle(1)}
              href="/"
              className={`${
                toggle === 1 ? "active" : null
              } hover:bg-green-500 py-3 px-4 `}>
              মূলপাতা
            </a>

            <p
              onClick={() => updateToggle(2)}
              className={`${
                toggle === 2 ? "active" : null
              } cursor-pointer hover:bg-green-500 py-3 px-4 `}>
              জনবল
            </p>

            <p
              onClick={() => updateToggle(3)}
              className={`${
                toggle === 3 ? "active" : null
              } cursor-pointer hover:bg-green-500 py-3 px-4`}>
              শিক্ষার্থীদের তথ্য
            </p>
            <p
              onClick={() => updateToggle(4)}
              className={`${
                toggle === 4 ? "active" : null
              } cursor-pointer hover:bg-green-500 py-3 px-4`}>
              ভর্তি আবেদন
            </p>
            <p
              onClick={() => updateToggle(5)}
              className={`${
                toggle === 5 ? "active" : null
              } cursor-pointer hover:bg-green-500 py-3 px-4`}>
              অনলাইন হাজিরা
            </p>
            <p
              onClick={() => updateToggle(6)}
              className={`${
                toggle === 6 ? "active" : null
              } cursor-pointer hover:bg-green-500 py-3 px-4`}>
              পরীক্ষার ফলাফল
            </p>
            <p
              onClick={() => updateToggle(7)}
              className={`${
                toggle === 7 ? "active" : null
              } cursor-pointer hover:bg-green-500 py-3 px-4`}>
              যোগাযোগ
            </p>
            <p
              onClick={() => updateToggle(8)}
              className={`${
                toggle === 8 ? "active" : null
              } cursor-pointer hover:bg-green-500 py-3 px-4`}>
              লগ ইন
            </p>
            <p
              onClick={() => updateToggle(9)}
              className={`${
                toggle === 9 ? "active" : null
              } cursor-pointer hover:bg-green-500 py-3 px-4 ${
                authUser ? "block" : "hidden"
              }`}>
              ড্যাশবোর্ড
            </p>
          </div>
        </div>

        <div className={toggle === 1 ? "block" : "hidden"}>
          <div className="py-3 md:py-4 lg:py-6"></div>
          <Notice />
          <div className="py-3 md:py-4 lg:py-6"></div>
          <GifImg />
          <div className="py-3 md:py-4 lg:py-6"></div>
          <PhotoAndNotice />
          <div className="py-3 mt-10 md:py-4 lg:py-6 bg-white">
            <p className="text-xl md:text-2xl lg:text-3xl bg-black text-white py-1 text-center">
              নোটিশ বোর্ডঃ
            </p>
            <div className=" h-[400px] overflow-y-scroll">
              <Notices />
            </div>
          </div>
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
          <Results />
        </div>
        <div className={toggle === 7 ? "block" : "hidden"}>
          <div className="py-3 md:py-4 lg:py-6"></div>
          <Contact />
        </div>
        <div className={toggle === 8 ? "block" : "hidden"}>
          <div className="py-3 md:py-4 lg:py-6"></div>
          <Login />
        </div>
        <div className={toggle === 9 ? "block" : "hidden"}>
          <div className="py-3 md:py-4 lg:py-6"></div>
          <Dashboard />
        </div>
      </div>
      <div className="py-3 md:py-4 lg:py-6"></div>
      <Footer />
    </div>
  );
}

export default Header;
