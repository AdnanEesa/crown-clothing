import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChEZtC7njRKhZrH40IUEXn-cvdXye4k8c",
  authDomain: "crown-clothing-db-6583f.firebaseapp.com",
  projectId: "crown-clothing-db-6583f",
  storageBucket: "crown-clothing-db-6583f.appspot.com",
  messagingSenderId: "410966046909",
  appId: "1:410966046909:web:e1af0c77aa0e00fbac9fd4",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error adding the user", error.message);
    }
  }

  return userDocRef;
};
