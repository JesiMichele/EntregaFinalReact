import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

/*const firebaseConfig = {

  apiKey: import.meta.env.VITE_API_KEY,

  authDomain: import.meta.env.VITE_AUTH_DOMAIN,

  projectId: import.meta.env.VITE_PROJECT_ID,

  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,

  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,

  appId: import.meta.env.VITE_APP_ID,

  measurementId: import.meta.env.VITE_MEASUREMENT_ID,

};*/
const firebaseConfig = {

  apiKey: "AIzaSyCNNFTwOUa4VesrxDHkVeVn4mGFZ5iqiCU",

  authDomain: "reactjs-49598.firebaseapp.com",

  projectId: "reactjs-49598",

  storageBucket: "reactjs-49598.appspot.com",

  messagingSenderId: "779926726322",

  appId: "1:779926726322:web:cd72ff19c9f282a57f4bab",

  measurementId: "G-T7PC92Z7JD"

};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)