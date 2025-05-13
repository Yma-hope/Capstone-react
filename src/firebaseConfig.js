// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDg4pVIbe_Kg74V1sad1kAisQn0D1HWiiQ",
  authDomain: "capstone-react-1db19.firebaseapp.com",
  projectId: "capstone-react-1db19",
  storageBucket: "capstone-react-1db19.firebasestorage.app",
  messagingSenderId: "892633618202",
  appId: "1:892633618202:web:baa60e3955e8081d03bea3",
  measurementId: "G-232LC3S604"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);