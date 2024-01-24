import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBO-zUzYn8gYdXptCRJ88CgOZdPBnWtJyE",
    authDomain: "vuevize.firebaseapp.com",
    projectId: "vuevize",
    storageBucket: "vuevize.appspot.com",
    messagingSenderId: "932079460330",
    appId: "1:932079460330:web:ded815dca106e776f59c93",
    measurementId: "G-N87C2MY0Z7"
  };

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);