// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { collection, getDocs, getFirestore, query } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import firebaseConfig from "./firebase.json";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);

export const login = async ({ email, password }) => {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return user;
};

export const signup = async ({ email, password }) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  return user;
};

export const loadStudy = (setState) => {
  const study = query(collection(db, "study"));
  getDocs(study)
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setState((prevState) => [...prevState, doc.data()]);
        console.log(doc.data());
      });
    })
    .catch((e) => {
      console.log(`Error : ${e}`);
    });
};
