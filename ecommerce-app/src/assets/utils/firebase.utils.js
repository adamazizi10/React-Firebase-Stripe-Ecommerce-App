import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBn1EfsnENfB0v4RkrdaWHXUeyDYB1eP_E",
    authDomain: "ecommerce-clothing-db-adaa8.firebaseapp.com",
    projectId: "ecommerce-clothing-db-adaa8",
    storageBucket: "ecommerce-clothing-db-adaa8.firebasestorage.app",
    messagingSenderId: "464640475510",
    appId: "1:464640475510:web:4d1a9c59db04cf03387a57"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: 'select_account' })

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
      
const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef)

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {displayName: 'test', email, createdAt})
        } catch (error) {
            console.log('error creating the user: ', error.message)
        }
    }

    return userDocRef


}