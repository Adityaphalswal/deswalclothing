// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const config = {
    apiKey: "AIzaSyBJjWpIoVUiUuze7nzTKL2hLiBUnWbfEyM",
    authDomain: "deswalclothing.firebaseapp.com",
    projectId: "deswalclothing",
    storageBucket: "deswalclothing.appspot.com",
    messagingSenderId: "636602492973",
    appId: "1:636602492973:web:fa36c2144ebf5cbe95f0a4",
    measurementId: "G-SH8HW7D2GR"
  };

const app = initializeApp(config);
export const auth = getAuth(app);
console.log(getAuth(app))

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ "prompt": 'select_account' });

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider).then((result) => {console.log(result)}).catch((error) => {
    console.log(error);
  });
}