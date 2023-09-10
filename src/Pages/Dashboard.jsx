import React from "react";
import Pdf from "./Pdf";
import Notices from "./Notices";
import Results from "./Results";
import Res from "./Res";

const Dashboard = () => {
  return (
    <div>
      <p className="text-xl mb-4 md:mb-6 lg:mb-10 md:text-2xl lg:text-3xl text-center text-white bg-black py-2">
        আপনার ওয়েবসাইটের বিভিন্ন তথ্য আপডেট করুন এখানে:
      </p>
      <div className="grid md:grid-cols-2 gap-10 mb-4">
        <div className="border border-black">
          <p className="text-white bg-violet-600 p-2 text-center shadow-md">
            নোটিশ সংযোজন করুন (শুধুমাত্র pdf ফাইল):
          </p>
          <div className="bg-white p-4 flex flex-col justify-start gap-4 items-start">
            <Pdf />
            <p className="text-green-700 mx-auto">
              [ এখানে আপলোডকৃত ফাইলগুলো নোটিশ বোর্ড এ দেখা যাবে ]
            </p>
          </div>
        </div>
        <div className="border border-black bg-white">
          <p className="text-white bg-violet-600 p-2 text-center shadow-md">
            সকল নোটিশ:
          </p>
          <Notices />
          <div className="bg-white  p-4 flex flex-col justify-start gap-4 items-start"></div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-10">
        <div className="border border-black bg-white">
          <p className="text-white bg-green-600 p-2 text-center shadow-md">
            পরীক্ষার ফলাফল সংযোজন করুন (শুধুমাত্র pdf ফাইল):
          </p>
          <div className="bg-white p-4 flex flex-col justify-start gap-4 items-start">
            <Res />
            <p className="text-green-700 mx-auto">
              [ এখানে আপলোডকৃত ফাইলগুলো আভ্যন্তরীন পরীক্ষার ফলাফল এ দেখা যাবে ]
            </p>
          </div>
        </div>
        <div className="border border-black bg-white">
          <p className="text-white bg-green-600 p-2 text-center shadow-md">
            বিদ্যালয়ের আভ্যন্তরীন পরীক্ষার ফলাফল:
          </p>
          <Results />
          <div className="bg-white  p-4 flex flex-col justify-start gap-4 items-start"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
