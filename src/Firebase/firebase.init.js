// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUXWGIrZdBehF_Jcjnt0yIA6Qs94Un6Cs",
  authDomain: "job-portal-417be.firebaseapp.com",
  projectId: "job-portal-417be",
  storageBucket: "job-portal-417be.firebasestorage.app",
  messagingSenderId: "703701103381",
  appId: "1:703701103381:web:2aa0132b4724b24792ef1c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
