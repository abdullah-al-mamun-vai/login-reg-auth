// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDq1BBdUMqxL8Zmm-g9jnGyFTH8fgJHU-g",
    authDomain: "simple-login-register-d5be2.firebaseapp.com",
    projectId: "simple-login-register-d5be2",
    storageBucket: "simple-login-register-d5be2.appspot.com",
    messagingSenderId: "485949587258",
    appId: "1:485949587258:web:3bb0c16e854945f53eda03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;