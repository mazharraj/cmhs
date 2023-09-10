import { useState, useEffect } from "react";

import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "../firebase";
import { v4 } from "uuid";

function Res() {
  const [ResUpoad, setResUpoad] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (ResUpoad == null) return;
    const imageRef = ref(storage, `Results/${ResUpoad.name + v4()}`);
    uploadBytes(imageRef, ResUpoad).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
        alert("পরীক্ষার ফলাফল সফলভাবে আপলোড হয়েছে!!");
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
          setResUpoad(event.target.files[0]);
        }}
      />
      <button
        className="uppercase font-bold font-[arial] bg-violet-900 hover:bg-violet-700 py-1 px-6 text-white rounded"
        onClick={uploadFile}>
        {" "}
        Upload Result
      </button>
    </div>
  );
}

export default Res;
