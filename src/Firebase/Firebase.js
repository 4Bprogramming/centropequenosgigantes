import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAf1ws2IdKIIU5R0zdAzpvonUb3vry9Esg",
  authDomain: "pequegigante-2c960.firebaseapp.com",
  projectId: "pequegigante-2c960",
  storageBucket: "pequegigante-2c960.appspot.com",
  messagingSenderId: "184025777342",
  appId: "1:184025777342:web:1a72b26e5bead70b5f4aef",
  measurementId: "G-LG7C1FJ1C5",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
