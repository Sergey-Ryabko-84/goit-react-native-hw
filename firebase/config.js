import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getReactNativePersistence, initializeAuth } from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { getAuth } from "firebase/auth";

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
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
// export const auth = getAuth(app);