import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9INSRyrz5QZW2HcEcP9-yiNbVwzRMicw",
  authDomain: "note-taking-app-eba62.firebaseapp.com",
  projectId: "note-taking-app-eba62",
  storageBucket: "note-taking-app-eba62.appspot.com",
  messagingSenderId: "679631075737",
  appId: "1:679631075737:web:504b3b85db7e8dbec13b08"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
