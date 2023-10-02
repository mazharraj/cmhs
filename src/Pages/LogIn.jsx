import React from "react";
import SignIn from "./../components/auth/SignIn";
import SignUp from "./../components/auth/SignUp";

const LogIn = () => {
  return (
    <div className="lg:px-[200px]">
      <div className="px-1 ">
        <SignIn />
      </div>
      {/* <SignUp /> */}
    </div>
  );
};

export default LogIn;
