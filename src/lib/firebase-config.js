import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
export {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "@firebase/auth";
export { getFirestore, doc, getDoc, query, collection, where, getDocs, onSnapshot } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();

createUserWithEmailAndPassword(auth)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

export const logOut = async () => {
  const auth = getAuth();
  await signOut(auth);
};

export let saveData = (rol, name) => {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user) {
    const uid = user.uid;
    const displayName = name;
    const email = user.email;

    return addDoc(collection(db, "profile"), {
      uid,
      displayName,
      email,
     rol,
    });
  } else {
    // No user is signed in.
  }
};
