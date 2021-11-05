// Import the functions you need from the SDKs you need
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD8AmUJZY4pJWFE8J6I9qoqAwvlA-HZkmk',
  authDomain: 'citizen-advice-challenge.firebaseapp.com',
  projectId: 'citizen-advice-challenge',
  storageBucket: 'citizen-advice-challenge.appspot.com',
  messagingSenderId: '854436249963',
  appId: '1:854436249963:web:4777c71ceaa4fd547bcc2e',
  measurementId: 'G-G1BESBFST5',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
// Sign in using a popup.
export const signInWithGoogle = () =>
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential: any = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
