import React from "react";

export default function HeadMaster() {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-4 bg-white p-4 md:h-[350px]">
        <div>
          <p className="text-center text-2xl font-bold pb-3 underline">
            প্রধান শিক্ষকের বাণীঃ
          </p>
          <div className="grid md:grid-cols-2">
            <div className="flex justify-center items-center flex-col ">
              <img
                src="teachers/headmaster.jpg"
                className="w-32 mb-2 border-2 border-blue-800 rounded-xl"
                alt=""
              />
              <p className="text-xl font-bold">মোঃ আনোয়ার হোসেন</p>
              <p>বি.এস.সি, বি.এড</p>
              <p className=" font-semibold">প্রধান শিক্ষক</p>
            </div>
            <p className="text-justify md:pr-4 md:overflow-y-scroll text-base md:text-[18px] md:h-[270px]">
              সমস্ত শিক্ষার্থীদের সাদরে জানাই আমার অভিনন্দন। আমি আপনাদের
              সম্পূর্ণ সহযোগিতা এবং সমর্থন করবো যেন আপনাদের সবকিছুই সফল হয়। আমরা
              সর্বদা শিক্ষার্থীদের উন্নতি এবং নিরাপত্তার জন্য কঠোর কাজ করবো।
              আপনাদের অধিকার এবং নিরাপত্তা সংরক্ষণের জন্য আমার সম্পূর্ণ ভরসা
              আছে। আমি আশা করি আপনারা সমস্ত শিক্ষার্থী আদর্শ পাঠকের মতো হবেন এবং
              মূল্যবান মানবাধিকার সম্পর্কে সচেতন হবেন। আমাদের সকলের জন্য আমি
              শুভেচ্ছা জানাই এবং আমাদের শিক্ষা সম্প্রদায়ের উন্নতির জন্য সমস্তের
              সাথে একত্ব করতে আহ্বান জানাই। ধন্যবাদ।
            </p>
          </div>
        </div>

        <div>
          <p className="text-center text-2xl font-bold pb-3 underline">
            সভাপতির বাণীঃ
          </p>
          <div className="grid md:grid-cols-2">
            <div className="flex justify-center items-center flex-col ">
              <img
                src="chairman.jpg"
                className="w-32 border-2 border-blue-800 rounded-xl"
                alt=""
              />
              <p className="text-xl font-bold py-1">এস এম মতিয়ার রহমান</p>
              <p className=" font-semibold">সভাপতি</p>
            </div>
            <p className="text-justify md:pr-4 md:overflow-y-scroll text-base md:text-[18px] md:h-[270px]">
              সমস্ত শিক্ষার্থীদের সাদরে জানাই আমার অভিনন্দন। আমি আপনাদের
              সম্পূর্ণ সহযোগিতা এবং সমর্থন করবো যেন আপনাদের সবকিছুই সফল হয়। আমরা
              সর্বদা শিক্ষার্থীদের উন্নতি এবং নিরাপত্তার জন্য কঠোর কাজ করবো।
              আপনাদের অধিকার এবং নিরাপত্তা সংরক্ষণের জন্য আমার সম্পূর্ণ ভরসা
              আছে। আমি আশা করি আপনারা সমস্ত শিক্ষার্থী আদর্শ পাঠকের মতো হবেন এবং
              মূল্যবান মানবাধিকার সম্পর্কে সচেতন হবেন। আমাদের সকলের জন্য আমি
              শুভেচ্ছা জানাই এবং আমাদের শিক্ষা সম্প্রদায়ের উন্নতির জন্য সমস্তের
              সাথে একত্ব করতে আহ্বান জানাই। ধন্যবাদ।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
