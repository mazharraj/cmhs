import React, { useEffect, useState } from "react";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

const storage = getStorage(); // Initialize Firebase Storage
const ResultsRef = ref(storage, "Results"); // Reference to the "Results" folder in your Storage bucket

function Result() {
  const [fileNames, setFileNames] = useState([]);

  useEffect(() => {
    // Fetch and set the file names when the component mounts
    listFileNames();
  }, []);

  const listFileNames = () => {
    listAll(ResultsRef)
      .then((result) => {
        // Extract the names of all files in the "Results" folder
        const fileNames = result.items.map((item) => item.name);
        setFileNames(fileNames);
      })
      .catch((error) => {
        console.error("Error listing files:", error);
      });
  };

  const openFileInNewTab = async (fileName) => {
    try {
      // Create a reference to the file to be opened
      const fileRef = ref(ResultsRef, fileName);

      // Get the download URL of the file
      const downloadURL = await getDownloadURL(fileRef);

      // Open the file in a new browser tab or window
      window.open(downloadURL, "_blank");
    } catch (error) {
      console.error("Error opening file:", error);
    }
  };

  return (
    <div className="p-4">
      <p className="bg-black mb-4 text-white text-xl md:text-2xl lg:text-3xl px-4 py-4">
        বিদ্যালয়ের আভ্যন্তরীন পরীক্ষার ফলাফলঃ
      </p>
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {fileNames.map((fileName) => (
          <li
            className="bg-green-700 hover:bg-green-800 py-2 px-4 duration-500 rounded shadow-md text-xl flex justify-center items-center cursor-pointer text-white"
            key={fileName}
            onClick={() => openFileInNewTab(fileName)}>
            {fileName.split(".").slice(0, -1).join(".")}{" "}
            {/* Hide text after the file extension */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Result;
