import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="sign-in-container rounded-lg shadow-md bg-white py-20 px-4 md:px-6 lg:px-8 xl:px-12">
      <form onSubmit={signIn} className="flex flex-col gap-4">
        <h1 className="text-center bg-black text-white p-2 text-2xl">
          Log In to your Account :
        </h1>

        <input
          className="p-2 bg-blue-200 text-black rounded-full text-center text-xl border-2 border-black"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}></input>

        <input
          className="p-2 bg-blue-200 text-black rounded-full text-center text-xl border-2 border-black"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}></input>
        <button
          type="submit"
          className="bg-green-800 hover:bg-green-700 py-2 px-12 rounded text-white text-xl mx-auto">
          
          Log In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
