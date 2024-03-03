import { initializeApp, getApps, getApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCP5UhJc_sVoyFFjQFL3bbvILh-qUO-wl8",
    authDomain: "nextdemo-2721c.firebaseapp.com",
    projectId: "nextdemo-2721c",
    storageBucket: "nextdemo-2721c.appspot.com",
    messagingSenderId: "583792058768",
    appId: "1:583792058768:web:9aba5fee9d1c45a76d1315",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

const auth = getAuth(app)

export {app, auth}