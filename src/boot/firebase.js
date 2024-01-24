import { boot } from "quasar/wrappers";

import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"; // eslint-disable-line

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


const fapp = initializeApp(firebaseConfig);

const db = getFirestore(fapp);

export default boot(async ({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$db = db;
  // ^ ^ ^ this will allow you to use this.$db (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$Firebaseapp = fapp;
  // ^ ^ ^ this will allow you to use this.$Firebaseapp (for Vue Options API form)
  //       so you can easily perform requests against your app's API
});
export { fapp };


