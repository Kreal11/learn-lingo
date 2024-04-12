import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDUgRo-2dTPogXF6EpCEWBqcxS8bEkDppQ",
  authDomain: "learn-lingo-44075.firebaseapp.com",
  projectId: "learn-lingo-44075",
  storageBucket: "learn-lingo-44075.appspot.com",
  messagingSenderId: "663459083405",
  appId: "1:663459083405:web:05dd2162148b239b26dec4",
  measurementId: "G-527H4Z7V9W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
