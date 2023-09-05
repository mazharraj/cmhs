import React from "react";

export default function Admission() {
  return (
    <div className="bg-white p-2">
      <p className="text-2xl font-semibold">ভর্তি সংক্রান্ত তথ্যঃ</p>

      <p className="text-2xl font-semibold">ভর্তি আবেদন ফর্মঃ</p>
      <object
        data="/admission/admission_form.pdf"
        type="application/pdf"
        width="100%"
        height="500px">
        <p>
          Unable to display PDF file.{" "}
          <a href="/admission/admission_form.pdf">Download</a> instead.
        </p>
      </object>
    </div>
  );
}
