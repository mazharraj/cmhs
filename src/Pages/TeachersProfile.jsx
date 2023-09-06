export default function TeachersProfile() {
  return (
    <div>
      <p className="text-xl md:text-2xl lg:text-3xl font-bold py-4 text-gray-600">
        কর্মরত শিক্ষক-কর্মচারীঃ
      </p>
      <div className="grid lg:grid-cols-2 gap-2">
        <div className="bg-white py-2 px-4 flex md:flex-row flex-col gap-4">
          <img
            src="teachers/man.jpg"
            className="w-36 shadow-md object-cover h-[180px] md:h-full border mx-auto border-gray-400"
            alt=""
          />
          <div className="border rounded shadow-md p-2 w-full">
            <p className="text-xl font-semibold">আলহাজ মোঃ শহিদুল ইসলাম</p>
            <div className="bg-gray-300 w-full h-[1px]"></div>
            <div className="text-gray-700">
              <p>পদবী : প্রধান শিক্ষক / অধ্যক্ষ (ভারপ্রাপ্ত)</p>
              <p>শিক্ষাগত যোগ্যতা : এম.এ , বি.এড</p>
              <p>ঠিকানা : দাইন্যা রামপাল, টাঙ্গাইল সদর</p>
              <p>মোবাইল : ০১৭১৮-১১৯৩৩০</p>
              <p>
                ইমেইল :
                <a href="mailto:tepablhs65@gmail.com" className="text-blue-600">
                  -
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white py-2 px-4 flex md:flex-row flex-col gap-4">
          <img
            src="teachers/man.jpg"
            className="w-36 shadow-md object-cover h-[180px] md:h-full border mx-auto border-gray-400"
            alt=""
          />
          <div className="border rounded shadow-md p-2 w-full">
            <p className="text-xl font-semibold">মোহাম্মদ মতিয়ার রহমান</p>
            <div className="bg-gray-300 w-full h-[1px]"></div>
            <div className="text-gray-700">
              <p>পদবী : সহঃ প্রধান শিক্ষক</p>
              <p>শিক্ষাগত যোগ্যতা : এম.কম , বি.এড</p>
              <p>ঠিকানা : মহেলা, কালিহাতি, টাঙ্গাইল</p>
              <p>মোবাইল : ০১৭১৫-৬৬০৭৫৩</p>
              <p>
                ইমেইল :
                <a href="mailto:tepablhs65@gmail.com" className="text-blue-600">
                  -
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white py-2 px-4 flex md:flex-row flex-col gap-4">
          <img
            src="teachers/man.jpg"
            className="w-36 shadow-md object-cover h-[180px] md:h-full border mx-auto border-gray-400"
            alt=""
          />
          <div className="border rounded shadow-md p-2 w-full">
            <p className="text-xl font-semibold">আব্দুল্যা আল ফারুক সিদ্দিকী</p>
            <div className="bg-gray-300 w-full h-[1px]"></div>
            <div className="text-gray-700">
              <p>পদবী : প্রভাষক / জ্যেষ্ঠ প্রভাষক (বাংলা)</p>
              <p>শিক্ষাগত যোগ্যতা : এম.এ (বাংলা)</p>
              <p>ঠিকানা : টাঙ্গাইল</p>
              <p>মোবাইল : ----</p>
              <p>
                ইমেইল :
                <a href="mailto:tepablhs65@gmail.com" className="text-blue-600">
                  -
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white py-2 px-4 flex md:flex-row flex-col gap-4">
          <img
            src="teachers/woman.jpg"
            className="w-36 shadow-md object-cover h-[180px] md:h-full border mx-auto border-gray-400"
            alt=""
          />
          <div className="border rounded shadow-md p-2 w-full">
            <p className="text-xl font-semibold">মোসাম্মৎ সালমা আক্তার</p>
            <div className="bg-gray-300 w-full h-[1px]"></div>
            <div className="text-gray-700">
              <p>পদবী : প্রভাষক / জ্যেষ্ঠ প্রভাষক (ইংরেজী)</p>
              <p>শিক্ষাগত যোগ্যতা : এম.এ (ইংরেজী)</p>
              <p>ঠিকানা : টাঙ্গাইল</p>
              <p>মোবাইল : -</p>
              <p>
                ইমেইল :
                <a href="mailto:tepablhs65@gmail.com" className="text-blue-600">
                  -
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white py-2 px-4 flex md:flex-row flex-col gap-4">
          <img
            src="teachers/man.jpg"
            className="w-36 shadow-md object-cover h-[180px] md:h-full border mx-auto border-gray-400"
            alt=""
          />
          <div className="border rounded shadow-md p-2 w-full">
            <p className="text-xl font-semibold">মোঃ কামরুল হাসান</p>
            <div className="bg-gray-300 w-full h-[1px]"></div>
            <div className="text-gray-700">
              <p>পদবী : প্রভাষক (ইসলাম শিক্ষা)</p>
              <p>শিক্ষাগত যোগ্যতা : এম.এ , বি.এড</p>
              <p>ঠিকানা : টাঙ্গাইল</p>
              <p>মোবাইল : -</p>
              <p>
                ইমেইল :
                <a href="mailto:tepablhs65@gmail.com" className="text-blue-600">
                  {" "}
                  tepablhs65@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
