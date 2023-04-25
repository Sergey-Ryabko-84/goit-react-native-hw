import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqV4xggoeAGX1AYcHnF0q7eF6rHFdRRfA",
  authDomain: "react-native-social-a3cfc.firebaseapp.com",
  projectId: "react-native-social-a3cfc",
  storageBucket: "react-native-social-a3cfc.appspot.com",
  messagingSenderId: "934208767352",
  appId: "1:934208767352:web:79303d2b29578760bcb48d",
  measurementId: "G-6PKE6CH3RR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();