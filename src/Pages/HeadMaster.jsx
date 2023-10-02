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
              শিক্ষা মানুষের অধিকার। দক্ষ, আদর্শ ও যুগোপযোগী মানব সম্পদ তৈরীতে
              পারিবারিক শিক্ষার পাশাপাশি প্রাতিষ্ঠানিক শিক্ষা অপরিহার্য। নতুন
              প্রজন্মকে সুশিক্ষায় এমন ভাবে গড়ে তুলতে হবে যাতে, তারা দক্ষ ও আদর্শ
              মানব সম্পদে পরিণত হয়ে দেশকে সম্পদশালী, দুর্ণীতি ও মাদকমুক্ত আদর্শ
              রাষ্টে পরিনত করতে পারে। যে রাষ্ট্রে থাকবেনা কোন অন্যায়, অনিয়ম ও
              অবিচার। পুলিশ ও জেলখানার প্রয়োজনীয়তা ক্রমাগত হ্রাস পাবে। বিদ্যালয়
              হবে সত্যিকার মানুষ গড়ার কারখানা। এমন সমাজ ব্যবস্থা গড়ে তোলার জন্য
              শিক্ষা ব্যবস্থার সংস্কার আবশ্যক। শিক্ষার্থীদের আচরণের কাঙ্ক্ষিত
              পরিবর্তন আনতে অবশ্যই দক্ষ, মেধাবী, দেশপ্রেমী ও আদর্শবান শিক্ষকের
              প্রয়োজন। এক্ষেত্রে রাষ্ট্র সহ সংশ্লিষ্ট সকলকে যথাযথ ভূমিকা পালন
              করতে হবে।
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
                src="teachers/chairman.jpg"
                className="w-32 border-2 border-blue-800 rounded-xl"
                alt=""
              />
              <p className="text-xl font-bold py-1">মোঃ মকিম উদ্দিন</p>
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
