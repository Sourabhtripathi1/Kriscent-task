// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6HOge2e4yEc4Z9nQI1wOcn77dtm4R5rs",
  authDomain: "kriscnet-task.firebaseapp.com",
  projectId: "kriscnet-task",
  storageBucket: "kriscnet-task.appspot.com",
  messagingSenderId: "172718336519",
  appId: "1:172718336519:web:7b9879789c94568c93d8a2",
  measurementId: "G-RRW9B15FD5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
