
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBjwp_F6feuJ2TXe0VqnddoU2rkzPRlw5A",
    authDomain: "fir-js-crud-47d68.firebaseapp.com",
    projectId: "fir-js-crud-47d68",
    storageBucket: "fir-js-crud-47d68.appspot.com",
    messagingSenderId: "1032018902510",
    appId: "1:1032018902510:web:cdf5a83ac285aa204fa2ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

export const saveTask = (title,description) => 
    addDoc(collection(db, 'task'),{title, description});

