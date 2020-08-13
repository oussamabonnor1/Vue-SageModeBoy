import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDsTpcBMtY-7d9IOS0MHCByVRghp8JaH7k",
    authDomain: "todo-sagemodeboy.firebaseapp.com",
    databaseURL: "https://todo-sagemodeboy.firebaseio.com",
    projectId: "todo-sagemodeboy",
    storageBucket: "todo-sagemodeboy.appspot.com",
    messagingSenderId: "492465880738",
    appId: "1:492465880738:web:471540800325a6abd1e1fb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);