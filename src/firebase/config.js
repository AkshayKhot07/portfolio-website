import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCWYTnr6OshIhYamWrb1qoWCX8EBEPaTNw",
  authDomain: "portfolio-project-ad2e1.firebaseapp.com",
  projectId: "portfolio-project-ad2e1",
  storageBucket: "portfolio-project-ad2e1.appspot.com",
  messagingSenderId: "98475306975",
  appId: "1:98475306975:web:0fa9c482139b6bba921e6a",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

//timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
