// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
    apiKey: "AIzaSyDJoSpQCZbmVGWo8iMrJJFo5Ls2Tsu83Ig",
    authDomain: "chronos-app-c7d22.firebaseapp.com",
    projectId: "chronos-app-c7d22",
    storageBucket: "chronos-app-c7d22.firebasestorage.app",
    messagingSenderId: "633571745290",
    appId: "1:633571745290:web:d34c4ecc0bf2f906ef89f3",
    measurementId: "G-YJ29E6ERXG" // Optional, only needed for analytics
};

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export default app;
