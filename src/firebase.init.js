import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCh8ZAHzjKSz7Fo8rPDv02IZE2ONYZDczs",
    authDomain: "cycle-warehouse-1d78b.firebaseapp.com",
    projectId: "cycle-warehouse-1d78b",
    storageBucket: "cycle-warehouse-1d78b.appspot.com",
    messagingSenderId: "582735806219",
    appId: "1:582735806219:web:01f400e115c3d70641ac0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;