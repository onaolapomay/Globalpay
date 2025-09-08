import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'




// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUAwqXPXEPlNVuDSyv3PXRGusZ1IX5Jeg",
  authDomain: "globalpay-auth.firebaseapp.com",
  projectId: "globalpay-auth",
  storageBucket: "globalpay-auth.firebasestorage.app",
  messagingSenderId: "882349130229",
  appId: "1:882349130229:web:64180d83544c81769620bc",
  measurementId: "G-PY4RTGSQP6"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);