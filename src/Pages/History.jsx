import React from "react";

export default function History() {
  return (
    <div>
      <div className="flex md:flex-row flex-col items-center justify-between gap-10">
        <div className="bg-violet-800 shadow-xl p-2 rounded">
          <img src="teachers/founder.jpg" alt="" />
          <p className="text-center bg-white text-xl">প্রতিষ্ঠাতাঃ </p>
          <p className="text-center py-1 text-white">মরহুম ইনছান আলী এডভোকেট</p>
          <p className="text-center py-1 text-white text-xl">
            চৌধুরী মালঞ্চ উচ্চ বিদ্যালয়
          </p>
        </div>
        <div>
          <p className="text-2xl font-bold text-blue-800 py-4">
            আমাদের প্রতিষ্ঠানের ইতিহাস
          </p>
          <p className="text-justify  text-[18px]">
            ১৯৬৭ সালের পহেলা জানুয়ারী টাঙ্গাইল সদর উপজেলার ০১ নং মগড়া ইউনিয়নের
            চৌধুরী মালঞ্চ গ্রামের কৃতি সন্তান{" "}
            <span className="font-semibold">মরহুম ইনছান আলী এডভোকেট</span>{" "}
            চৌধুরী মালঞ্চ সহ প্রতিবেশি গ্রাম সমূহের সকল শ্রেণি পেশার মানুষের
            নিকট একটি বিশেষায়িত শিক্ষা প্রতিষ্ঠান উপহার দেয়ার অঙ্গীকার দিয়ে
            চৌধুরী মালঞ্চ উচ্চ বিদ্যালয় এর কার্যক্রম শুরু করেন। ছাত্র-ছাত্রীদেরকে
            পাঠ্যসূচির পাশাপাশি নৈতিক শিক্ষা ও আধুনিক জ্ঞান-বিজ্ঞানের শিক্ষায়
            শিক্ষিত করে জাতির জন্য একজন আদর্শ ও যোগ্য নাগরিক তৈরির উপযোগী
            পাঠ্যসূচী প্রণয়ন করে শিক্ষা দেয়ার ব্যবস্থা করেছে চৌধুরী মালঞ্চ উচ্চ
            বিদ্যালয় ।
          </p>
        </div>
      </div>
    </div>
  );
}
