import { useState, useEffect } from "react";

import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "./../firebase";
import { v4 } from "uuid";

function Pdf() {
  const [pdfUpoad, setpdfUpoad] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (pdfUpoad == null) return;
    const imageRef = ref(storage, `Notices/${pdfUpoad.name + v4()}`);
    uploadBytes(imageRef, pdfUpoad).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
        alert("নোটিশ সফলভাবে আপলোড হয়েছে!!");
      });
    });
  };
  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <div className="flex flex-col gap-6 mx-auto">
      <input
        className="shadow-md p-6"
        type="file"
        onChange={(event) => {
          setpdfUpoad(event.target.files[0]);
        }}
      />
      <button
        className="uppercase font-bold font-[arial] bg-violet-900 hover:bg-violet-700 py-1 px-6 text-white rounded"
        onClick={uploadFile}>
        {" "}
        Upload Notice
      </button>
    </div>
  );
}

export default Pdf;
