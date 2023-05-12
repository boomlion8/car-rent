// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6Ttipc8s1RrLWbiGQ3_rAHdNMsA0gJCE",
  authDomain: "car-rental-e3ace.firebaseapp.com",
  projectId: "car-rental-e3ace",
  storageBucket: "car-rental-e3ace.appspot.com",
  messagingSenderId: "586400140663",
  appId: "1:586400140663:web:783fa8c59a3cbe57d56572",
  measurementId: "G-YYQCGMD4SD",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
