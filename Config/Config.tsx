// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKDt5AKb5ZzQxNir4em0vensYY2ghRxds",
  authDomain: "prueba-bc41a.firebaseapp.com",
  databaseURL: "https://prueba-bc41a.firebaseio.com",
  projectId: "prueba-bc41a",
  storageBucket: "prueba-bc41a.appspot.com",
  messagingSenderId: "498740797720",
  appId: "1:498740797720:web:4cb9ee512744369296fe6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize and export the database
const db = getDatabase(app);
export { db };
