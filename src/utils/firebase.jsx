import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAM6LEtNyHT0xO-8Fqo2QN65mjQrH-8BZk",
  authDomain: "netflixgpt-4.firebaseapp.com",
  projectId: "netflixgpt-4",
  storageBucket: "netflixgpt-4.appspot.com",
  messagingSenderId: "1092031328200",
  appId: "1:1092031328200:web:58e49b560ceb0a20f25afd",
  measurementId: "G-YC1BBMHYQ5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }
