import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database"

const app = firebase.initializeApp({
    apiKey: "AIzaSyD2jRiOMDpiCadXcPVcP-2mZhKdw6Viq0Y",
    authDomain: "stufun-web.firebaseapp.com",
    projectId: "stufun-web",
    storageBucket: "stufun-web.appspot.com",
    messagingSenderId: "130510761369",
    appId: "1:130510761369:web:ea9418a17814fb30a6f708"
})

export const auth = app.auth()
export const database = app.database()
export default app