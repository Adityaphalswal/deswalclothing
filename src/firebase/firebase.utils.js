import { initializeApp} from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {getFirestore ,collection,getDocs, onSnapshot,addDoc, doc, getDoc,setDoc, serverTimestamp} from "firebase/firestore";


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
// init services
const db = getFirestore(app);
export const creatUserProfileDocument = async(userAuth,additionalData) => {
  if(!userAuth) return;
  const userRef = doc(db,'users',`${userAuth.uid}`);
  const snapshot = await getDoc(userRef);
  if(!snapshot.exists()){
    const {displayName,email} = userAuth;
    const createdAt = serverTimestamp();

    try{
      await setDoc(userRef,{
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error){
      console.log('error creating user',error.message);
    }
    
  }
  return userRef;
}

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ "prompt": 'select_account' });

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
  // .then((result) => {console.log(result)}).catch((error) => {
  //   console.log(error);
  // });
}