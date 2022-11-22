// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import config from './firebase.json';

// Initialize Firebase
const app = initializeApp(config);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
