import React from "react";

const Contact = () => {
  return (
    <div>
      <p className="text-center font-semibold text-xl md:text-2xl lg:text-3xl pb-6">
        যোগাযোগঃ
      </p>
      <div className="space-y-3">
        <div className="grid md:grid-cols-2 gap-3">
          <input type="text" placeholder="নাম" className="w-full p-3" />
          <input type="email" placeholder="ইমেইল আইডি" className="w-full p-3" />
        </div>
        <input type="email" placeholder="বিষয়" className="w-full p-3" />
        <textarea
          name=""
          className="w-full p-3"
          placeholder="বার্তা"
          rows={10}></textarea>
        <button className="bg-green-700 text-white py-2 px-8 text-xl uppercase hover:bg-green-800">
          submit
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4 lg:gap-0 lg:grid-cols-4 pt-8">
        <div className="text-center space-y-2">
          <a
            href="https://maps.app.goo.gl/GPf9A98FcVzCXD6C8"
            target="blank"
            className="mx-auto text-4xl bg-blue-900 rounded-full w-16 h-16 hover:bg-blue-700 duration-500 cursor-pointer text-white flex items-center justify-center">
            <ion-icon name="location-outline"></ion-icon>
          </a>
          <p className="md:text-xl">
            <span className="font-bold">Address:</span> Chowdhury Malancha,
            Tangail
          </p>
        </div>
        <div className="text-center space-y-2">
          <a
            href="call:+8801309-114696"
            className="mx-auto text-4xl bg-blue-900 rounded-full w-16 h-16 hover:bg-blue-700 duration-500 cursor-pointer text-white flex items-center justify-center">
            <ion-icon name="call-outline"></ion-icon>
          </a>
          <p className="md:text-xl">
            <span className="font-bold">Phone:</span> ০১৩০৯-১১৪৬৯৬
          </p>
        </div>
        <div className="text-center space-y-2">
          <a
            href="mailto:cmhs1967@gmail.com"
            className="mx-auto text-4xl bg-blue-900 rounded-full w-16 h-16 hover:bg-blue-700 duration-500 cursor-pointer text-white flex items-center justify-center">
            <ion-icon name="mail-outline"></ion-icon>
          </a>
          <p className="md:text-xl">
            <span className="font-bold">Email:</span> cmhs1967@gmail.com
          </p>
        </div>
        <div className="text-center space-y-2">
          <a
            href="www.chowdhurymhschool.com"
            className="mx-auto text-4xl bg-blue-900 rounded-full w-16 h-16 hover:bg-blue-700 duration-500 cursor-pointer text-white flex items-center justify-center">
            <ion-icon name="globe-outline"></ion-icon>
          </a>
          <p className="md:text-xl">
            <span className="font-bold">Website:</span>{" "}
            www.chowdhurymhschool.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
