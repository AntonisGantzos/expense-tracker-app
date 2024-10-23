// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1E2ZviqTT6OizjTZFrtctDjckYW3hkQA",
  authDomain: "expense-tracker-95fe5.firebaseapp.com",
  projectId: "expense-tracker-95fe5",
  storageBucket: "expense-tracker-95fe5.appspot.com",
  messagingSenderId: "740446670876",
  appId: "1:740446670876:web:f852dfd17716276159cfd9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()

//run the following commands
//firebase login
//firebase init
//firebase deploy