// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAdVxj-OzNraaRp2zhoFbBxXBZQrvrPerE",
    authDomain: "hr-gifts.firebaseapp.com",
    projectId: "hr-gifts",
    storageBucket: "hr-gifts.appspot.com",
    messagingSenderId: "423092031030",
    appId: "1:423092031030:web:af20c896b08330c7121297",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
