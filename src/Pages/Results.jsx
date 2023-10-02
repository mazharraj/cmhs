import React, { useEffect, useState } from "react";
import {
  getStorage,
  ref,
  listAll,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import Swal from "sweetalert2";

const storage = getStorage(); // Initialize Firebase Storage
const resultsRef = ref(storage, "Results"); // Reference to the "Results" folder in your Storage bucket

function Results() {
  const [fileNames, setFileNames] = useState([]);

  useEffect(() => {
    // Fetch and set the file names when the component mounts
    listFileNames();
  }, []);

  const listFileNames = () => {
    listAll(resultsRef)
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
      const fileRef = ref(resultsRef, fileName);

      // Get the download URL of the file
      const downloadURL = await getDownloadURL(fileRef);

      // Open the file in a new browser tab or window
      window.open(downloadURL, "_blank");
    } catch (error) {
      console.error("Error opening file:", error);
    }
  };

  const deleteFile = async (fileName) => {
    try {
      // Create a reference to the file to be deleted
      const fileRef = ref(resultsRef, fileName);
      Swal.fire("Result Deleted Successfully!");
      // Delete the file from Firebase Storage
      await deleteObject(fileRef);

      // Update the file list after deleting
      listFileNames();
    } catch (error) {
      console.error("Error deleting file:", error);
    }
  };

  return (
    <div className="p-4">
      <p className="bg-black mb-4 text-white text-xl md:text-2xl lg:text-3xl px-4 py-4">
        বিদ্যালয়ের আভ্যন্তরীন পরীক্ষার ফলাফলঃ
      </p>
      <ul className="">
        {fileNames.map((fileName) => (
          <li key={fileName} className="mb-2 flex items-start gap-4">
            <div className="bg-violet-600 w-full hover:bg-violet-800 rounded shadow-md py-1 flex px-4 text-white cursor-pointer">
              {fileName.split(".").slice(0, -1).join(".")}{" "}
              {/* Hide text after the file extension */}
            </div>
            <button
              className="bg-red-600 hover:bg-red-700 rounded py-1 px-4 text-white"
              onClick={() => deleteFile(fileName)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Results;
