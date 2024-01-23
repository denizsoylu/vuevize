// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBO-zUzYn8gYdXptCRJ88CgOZdPBnWtJyE",
  authDomain: "vuevize.firebaseapp.com",
  projectId: "vuevize",
  storageBucket: "vuevize.appspot.com",
  messagingSenderId: "932079460330",
  appId: "1:932079460330:web:ded815dca106e776f59c93",
  measurementId: "G-N87C2MY0Z7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);