
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "oneclickproperty.firebaseapp.com",
  projectId: "oneclickproperty",
  storageBucket: "oneclickproperty.appspot.com",
  messagingSenderId: "969383493106",
  appId: "1:969383493106:web:d39f2a806767a74c00bf6b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
