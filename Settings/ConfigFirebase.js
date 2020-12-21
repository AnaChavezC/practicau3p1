import firebase from 'firebase/app';
import 'firebase/database';

const config={
    apiKey: "AIzaSyDdDCVNe2dC8SIiX-bd-ZRiah040sJn0rM",
    authDomain: "practica1-bdd97.firebaseapp.com",
    databaseURL: "https://practica1-bdd97.firebaseio.com",
    projectId: "practica1-bdd97",
    storageBucket: "practica1-bdd97.appspot.com",
    messagingSenderId: "576143403142",
    appId: "1:576143403142:web:dfdcbd71dcd4bf3a728907",
    measurementId: "G-VK0CFFR9S8"
}

const fb = !firebase.apps.lenght ? firebase.initializeApp(config):firebase.app()

export default fb;