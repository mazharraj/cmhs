import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import Swal from "sweetalert2";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        Swal.fire("সফলভাবে লগ ইন হয়েছে !!");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire("Wrong Email or Password!!");
      });
  };

  return (
    <div className="sign-in-container rounded-lg shadow-md bg-white py-20 px-4 md:px-6 lg:px-8 xl:px-12">
      <form onSubmit={signIn} className="flex flex-col gap-6">
        <h1 className="text-center bg-black text-white p-2 text-2xl">
          Log In to your Account :
        </h1>

        <input
          className="p-2 bg-gray-200 text-black text-center text-xl border border-black"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}></input>

        <input
          className="p-2 bg-gray-200 text-black text-center text-xl border border-black"
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
