// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtbDE8RLewJ9pqFz19YZ0zgERNM9xt7uM",
  authDomain: "asistencia24-7.firebaseapp.com",
  projectId: "asistencia24-7",
  storageBucket: "asistencia24-7.appspot.com",
  messagingSenderId: "434390063737",
  appId: "1:434390063737:web:7eefd6ae7e6230d09bd2a8",
  measurementId: "G-V0Z3P5M45B"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);