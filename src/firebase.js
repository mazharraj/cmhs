// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAOSrgaSODg42PBHiiqPu8p3aTk5FTi2Oo",
  authDomain: "log-in-form-5e657.firebaseapp.com",
  projectId: "log-in-form-5e657",
  storageBucket: "log-in-form-5e657.appspot.com",
  messagingSenderId: "131244340961",
  appId: "1:131244340961:web:0bf4fdc59bbea0732669a0",
  measurementId: "G-7P94T86V8Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const storage = getStorage(app);
