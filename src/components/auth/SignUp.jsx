import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="sign-in-container rounded-xl shadow-md bg-gray-800 py-20 px-4 md:px-6 lg:px-8 xl:px-12">
      <h1 className="text-center pb-8 text-white p-2 text-2xl">
        Don't have an account? Simply Register here:
      </h1>
      <form onSubmit={signUp} className="flex flex-col gap-4">
        <h1 className="text-center bg-violet-500 text-white p-2 text-2xl">
          Create Account
        </h1>
        <input
          className="py-2 px-6 bg-blue-200 text-black rounded-full text-xl"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}></input>
        <input
          className="py-2 px-6 bg-blue-200 text-black rounded-full text-xl"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}></input>
        <button
          type="submit"
          className="bg-green-800 hover:bg-green-700 py-2 px-12 rounded text-white text-xl mx-auto">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
