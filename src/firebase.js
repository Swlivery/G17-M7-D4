// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0wTW8TOupBlPc2jOG7_GwZzQ8CIUAaSs",
  authDomain: "fir-1-95ff9.firebaseapp.com",
  projectId: "fir-1-95ff9",
  storageBucket: "fir-1-95ff9.firebasestorage.app",
  messagingSenderId: "207756572156",
  appId: "1:207756572156:web:2674aeb43282ad8fd8ee79",
  measurementId: "G-9DPY6PVFZN"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);  // Asegúrate de definir auth antes de exportarlo

export { auth };  // Ahora sí podemos exportar auth