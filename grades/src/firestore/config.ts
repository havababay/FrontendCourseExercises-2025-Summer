// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAR2K39-mVUPbjSi8Mj7LvSjel6Dv5c9XA",
  authDomain: "fir-project-8e775.firebaseapp.com",
  projectId: "fir-project-8e775",
  storageBucket: "fir-project-8e775.firebasestorage.app",
  messagingSenderId: "492135002760",
  appId: "1:492135002760:web:9de1944aec33932357653d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);