// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBPFKHsQOhIq3CyI3b-eeKgXpkXxQdtMKI",
    authDomain: "authentication-app-a7cc7.firebaseapp.com",
    projectId: "authentication-app-a7cc7",
    storageBucket: "authentication-app-a7cc7.appspot.com",
    messagingSenderId: "347517848609",
    appId: "1:347517848609:web:41bda1534eeda369b6a760",
    measurementId: "G-8XQDSQZKP3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { analytics, auth, firestore }