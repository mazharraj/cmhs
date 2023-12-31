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
const noticesRef = ref(storage, "Notices"); // Reference to the "Notices" folder in your Storage bucket

function Notices() {
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

  const deleteFile = async (fileName) => {
    try {
      // Create a reference to the file to be deleted
      Swal.fire("Notice Deleted Successfully!");
      const fileRef = ref(noticesRef, fileName);
      // Delete the file from Firebase Storage
      await deleteObject(fileRef);

      // Update the file list after deleting
      listFileNames();
    } catch (error) {
      console.error("Error deleting file:", error);
    }
  };

  return (
    <div className="py-4 md:px-0 px-2">
      <ul className="px-4">
        {fileNames.map((fileName) => (
          <li key={fileName} className="mb-2 flex items-start gap-4">
            <div
              className="bg-violet-600 w-full hover:bg-violet-800 rounded shadow-md py-1 flex px-4 text-white cursor-pointer"
              onClick={() => openFileInNewTab(fileName)}>
              {fileName.split(".").slice(0, -1).join(".")}{" "}
              {/* Hide text after the file extension */}
            </div>
            <button
              className="bg-red-600 hover:bg-red-700 rounded py-1 px-4 ml-2 text-white"
              onClick={() => deleteFile(fileName)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notices;
