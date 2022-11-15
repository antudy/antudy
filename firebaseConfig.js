// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtgotFirQ0TCaSZvFFFJf1apMq7vblkNs",
  authDomain: "antudy-66cb6.firebaseapp.com",
  projectId: "antudy-66cb6",
  storageBucket: "antudy-66cb6.appspot.com",
  messagingSenderId: "575659192517",
  appId: "1:575659192517:web:e8890618cc2b65b8b700ac",
  measurementId: "G-J4GZM650FX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
