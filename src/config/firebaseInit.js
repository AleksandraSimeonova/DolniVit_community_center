// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnTgcdpmuUluc7Grkum8FIFWjN1No2Idc",
  authDomain: "dolni-vit-community-center.firebaseapp.com",
  projectId: "dolni-vit-community-center",
  storageBucket: "dolni-vit-community-center.firebasestorage.app",
  messagingSenderId: "912589977063",
  appId: "1:912589977063:web:a6a67328ac801deccdf942"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app