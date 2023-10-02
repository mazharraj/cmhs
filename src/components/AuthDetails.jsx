import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {authUser ? (
        <>
          <div className="flex gap-6 text-white bg-green-900 items-center justify-between w-full pl-4">
            <p>{`Signed In as Admin`}</p>

            <button
              onClick={userSignOut}
              className="bg-red-500 py-1 px-4 text-white">
              Sign Out
            </button>
          </div>
        </>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default AuthDetails;
