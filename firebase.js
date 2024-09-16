// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAu7NZVbjY8fduPhlbw-D2VCyxLpw8duPg",
  authDomain: "sdeabhi-5a0ac.firebaseapp.com",
  projectId: "sdeabhi-5a0ac",
  storageBucket: "sdeabhi-5a0ac.appspot.com",
  messagingSenderId: "1071924742577",
  appId: "1:1071924742577:web:80defdf68056a0cb4b5590",
  measurementId: "G-PX6KF4JS56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);