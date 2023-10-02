import React, { Component } from "react";

export default class Students extends Component {
  render() {
    return (
      <div className="bg-white p-2">
        <p className="text-xl md:text-2xl lg:text-3xl font-bold py-4 text-gray-600">
          ছাত্র-ছাত্রীর সংখ্যাঃ
        </p>
        <div className="grid grid-cols-2 gap-1">
          <div className="grid grid-cols-4">
            <p className="border p-2 border-gray-600 text-base md:text-xl">
              শ্রেণি
            </p>
            <p className="border p-2 border-gray-600 text-base md:text-xl">
              ছাত্র
            </p>
            <p className="border p-2 border-gray-600 text-base md:text-xl">
              ছাত্রী
            </p>
            <p className="border p-2 border-gray-600 text-base md:text-xl">
              মোট
            </p>
          </div>
          <div className="grid grid-cols-3">
            <p className="border p-2 border-gray-600 text-base md:text-xl">
              বিজ্ঞান
            </p>
            <p className="border p-2 border-gray-600 text-base md:text-xl">
              ব্যবসায় শিক্ষা
            </p>
            <p className="border p-2 border-gray-600 text-base md:text-xl">
              মানবিক
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-1">
          <div className="grid grid-cols-4">
            <p className="border p-2 border-gray-600 text-base md:text-xl">
              ৬ষ্ঠ
            </p>
            <p className="border p-2 border-gray-600 text-base md:text-xl">
              ৮৪
            </p>
            <p className="border p-2 border-gray-600 text-base md:text-xl">
              ৮৭
            </p>
            <p className="border p-2 border-gray-600 text-base md:text-xl">
              ১৭১
            </p>
          </div>
          <div className="grid grid-cols-3">
            <p className="border p-2 border-gray-600 text-base md:text-xl">-</p>
            <p className="border p-2 border-gray-600 text-base md:text-xl">-</p>
            <p className="border p-2 border-gray-600 text-base md:text-xl">-</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1">
          <div className="grid grid-cols-4">
            <p className="border p-2 border-gray-600 text-base md:text-xl">
              ৭ম
            </p>
            <p className="border p-2 border-gray-600 text-base md:text-xl">
              ৯৬
            </p>
            <p className="border p-2 border-gray-600 text-base md:text-xl">
              ৮৫
            </p>
            <p className="border p-2 border-gray-600 text-base md:text-xl">
              ১৮১
            </p>
          </div>
          <div className="grid grid-cols-3">
            <p className="border p-2 border-gray-600 text-base md:text-xl">-</p>
            <p className="border p-2 border-gray-600 text-base md:text-xl">-</p>
            <p className="border p-2 border-gray-600 text-base md:text-xl">-</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1">
          <div className="grid grid-cols-4">
            <p className="border p-2 border-gray-600 text-base md:text-xl">
              ৮ম
            </p>
            <p className="border p-2 border-gray-600 text-base md:text-xl">
              ৬০
            </p>
            <p className="border p-2 border-gray-600 text-base md:text-xl">
              ৬৬
            </p>
            <p className="border p-2 border-gray-600 text-base md:text-xl">
              ১২৬
            </p>
          </div>
          <div className="grid grid-cols-3">
            <p className="border p-2 border-gray-600 text-base md:text-xl">-</p>
            <p className="border p-2 border-gray-600 text-base md:text-xl">-</p>
            <p className="border p-2 border-gray-600 text-base md:text-xl">-</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1">
          <div className="grid grid-cols-4">
            <p className="border p-2 border-gray-600 text-base md:text-xl">
              ৯ম
            </p>
            <p className="border p-2 border-gray-600 text-base md:text-xl">
              ৭০
            </p>
            <p className="border p-2 border-gray-600 text-base md:text-xl">
              ৬৮
            </p>
            <p className="border p-2 border-gray-600 text-base md:text-xl">
              ১৩৮
            </p>
          </div>
          <div className="grid grid-cols-3">
            <p className="border p-2 border-gray-600 text-base md:text-xl">
              ৪৬
            </p>
            <p className="border p-2 border-gray-600 text-base md:text-xl">-</p>
            <p className="border p-2 border-gray-600 text-base md:text-xl">
              ৯২
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1">
          <div className="grid grid-cols-4">
            <p className="border p-2 border-gray-600 text-base md:text-xl">
              ১০ম
            </p>
            <p className="border p-2 border-gray-600 text-base md:text-xl">
              ৮০
            </p>
            <p className="border p-2 border-gray-600 text-base md:text-xl">
              ৭৩
            </p>
            <p className="border p-2 border-gray-600 text-base md:text-xl">
              ১৫৩
            </p>
          </div>
          <div className="grid grid-cols-3">
            <p className="border p-2 border-gray-600 text-base md:text-xl">
              ৫৩
            </p>
            <p className="border p-2 border-gray-600 text-base md:text-xl">-</p>
            <p className="border p-2 border-gray-600 text-base md:text-xl">
              ১০০
            </p>
          </div>
        </div>
        <div className="text-xl">
          <div className="pt-10 grid grid-cols-2">
            <p className="border border-violet-900 p-3 font-semibol">
              মোট শিক্ষার্থীঃ
            </p>
            <p className="border border-violet-900 p-3 text-center">৭৬৯ জন</p>
          </div>
          <div className="grid grid-cols-2">
            <p className="border border-violet-900 p-3 font-semibol">
              মোট ছাত্রঃ
            </p>
            <p className="border border-violet-900 p-3 text-center">৩৯০ জন</p>
          </div>
          <div className="grid grid-cols-2">
            <p className="border border-violet-900 p-3 font-semibol">
              মোট ছাত্রীঃ
            </p>
            <p className="border border-violet-900 p-3 text-center">৩৭৯ জন</p>
          </div>
          <div className="grid grid-cols-2">
            <p className="border border-violet-900 p-3 font-semibol">
              বিজ্ঞানঃ
            </p>
            <p className="border border-violet-900 p-3 text-center">৯৯ জন</p>
          </div>
          <div className="grid grid-cols-2">
            <p className="border border-violet-900 p-3 font-semibol">
              ব্যবসায় শিক্ষাঃ
            </p>
            <p className="border border-violet-900 p-3 text-center">-</p>
          </div>
          <div className="grid grid-cols-2">
            <p className="border border-violet-900 p-3 font-semibol">মানবিকঃ</p>
            <p className="border border-violet-900 p-3 text-center">১৯২ জন</p>
          </div>
        </div>
      </div>
    );
  }
}
