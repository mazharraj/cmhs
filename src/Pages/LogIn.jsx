import React from "react";
import SignIn from "./../components/auth/SignIn";
import SignUp from "./../components/auth/SignUp";

const LogIn = () => {
  return (
    <div className="grid md:grid-cols-2 gap-12">
      <div className="px-1">
        <SignIn />
      </div>
      <SignUp />
    </div>
  );
};

export default LogIn;
