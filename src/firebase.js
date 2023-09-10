// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBySheA0s4B7dBzMvkucQYNq_XDPgLJ5tA",
  authDomain: "chowdhury-malancha-school.firebaseapp.com",
  projectId: "chowdhury-malancha-school",
  storageBucket: "chowdhury-malancha-school.appspot.com",
  messagingSenderId: "806009356456",
  appId: "1:806009356456:web:7a7107202b122b3987429d",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const storage = getStorage(app);
