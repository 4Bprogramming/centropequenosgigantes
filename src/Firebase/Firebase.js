import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage , ref , uploadBytes ,getDownloadURL} from 'firebase/storage'
import{v4} from 'uuid'

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
const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(app)

export async function uploadFile (file){
  const storageRef = ref(storage , v4()) 
  await uploadBytes(storageRef , file)
  const url = await getDownloadURL(storageRef)
  console.log('funcion uoloadFiles URL', url);
  return url
}

export { app, auth };
