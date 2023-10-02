import React, { useEffect, useState } from "react";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

const storage = getStorage(); // Initialize Firebase Storage
const noticesRef = ref(storage, "Notices"); // Reference to the "Notices" folder in your Storage bucket

function PbNotice() {
  const [fileNames, setFileNames] = useState([]);

  useEffect(() => {
    // Fetch and set the file names when the component mounts
    listFileNames();
  }, []);

  const listFileNames = () => {
    listAll(noticesRef)
      .then((result) => {
        // Extract the names of all files in the "Notices" folder
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
      const fileRef = ref(noticesRef, fileName);

      // Get the download URL of the file
      const downloadURL = await getDownloadURL(fileRef);

      // Open the file in a new browser tab or window
      window.open(downloadURL, "_blank");
    } catch (error) {
      console.error("Error opening file:", error);
    }
  };

  return (
    <div className="py-4 md:px-0 px-2">
      <ul>
        {fileNames.map((fileName) => (
          <li
            className="bg-blue-800 py-1 px-4 mb-2 cursor-pointer hover:bg-blue-900 text-white"
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

export default PbNotice;
