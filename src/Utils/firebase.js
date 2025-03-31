// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTMeWSP8TiFQAkwtehrWU6CqVIsbwXSeY",
  authDomain: "netflixgpt-809f3.firebaseapp.com",
  projectId: "netflixgpt-809f3",
  storageBucket: "netflixgpt-809f3.firebasestorage.app",
  messagingSenderId: "1048276967304",
  appId: "1:1048276967304:web:cea3e3a7907ff321d7643d",
  measurementId: "G-4QWGVY57Z3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();