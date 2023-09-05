import React from "react";

export default function History() {
  return (
    <div>
      <div className="flex md:flex-row flex-col items-center justify-between gap-10">
        <div className=" md:bg-violet-400 shadow-xl p-2 rounded">
          <img src="logo.png" alt="" />
        </div>
        <div>
          <p className="text-2xl font-bold text-blue-800 py-4">
            আমাদের প্রতিষ্ঠানের ইতিহাস
          </p>
          <p className="text-justify  text-[18px]">
            ১৯৩৩ সালে টাঙ্গাইল সদর উপজেলার ধরেরবাড়ী গ্রামের কৃতি সন্তান{" "}
            <span className="font-semibold">মরহুম রফাতুল্লাহ সরকার</span>{" "}
            ধরেরবাড়ী সহ প্রতিবেশি গ্রাম সমূহের সকল শ্রেণি পেশার মানুষের নিকট
            একটি বিশেষায়িত শিক্ষা প্রতিষ্ঠান উপহার দেয়ার অঙ্গীকার দিয়ে ধরেরবাড়ী
            মুসলিম হাই স্কুল এর কার্যক্রম শুরু করে। ছাত্র-ছাত্রীদেরকে পাঠ্যসূচির
            পাশাপাশি নৈতিক শিক্ষা ও আধুনিক জ্ঞান-বিজ্ঞানের শিক্ষায় শিক্ষিত করে
            জাতির জন্য একজন আদর্শ ও যোগ্য নাগরিক তৈরির উপযোগী পাঠ্যসূচী প্রণয়ন
            করে শিক্ষা দেয়ার ব্যবস্থা করেছে ধরেরবাড়ী মুসলিম হাই স্কুল এন্ড কলেজ
            ।
          </p>
        </div>
      </div>
    </div>
  );
}
