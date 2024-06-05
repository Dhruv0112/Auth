// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDj9Wtxx3Ln31tc9eb-zz8OAboOginzDFA",
  authDomain: "authentication-1346b.firebaseapp.com",
  projectId: "authentication-1346b",
  storageBucket: "authentication-1346b.appspot.com",
  messagingSenderId: "713075724544",
  appId: "1:713075724544:web:bb78ed8e5c0e68601c23e5"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app)
 export {auth}