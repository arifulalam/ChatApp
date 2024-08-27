/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvRnaIc7uE4LdnDSI0Pp9uWE5jAcWYlF8",
  authDomain: "react-chatapp-01.firebaseapp.com",
  projectId: "react-chatapp-01",
  storageBucket: "react-chatapp-01.appspot.com",
  messagingSenderId: "91643115464",
  appId: "1:91643115464:web:04fdc1b01213c743bef2fd",
  measurementId: "G-ERRQYY4Q9B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;