import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth"

import { auth } from "./firebaseConfig";

export function authSignIn(email, password) {
  signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    return userCredential;
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log(errorCode);
    console.log(errorMessage);
  })
};

export function authSignOut() {
  signOut(auth).then(() => {
    console.log("Logged out!")
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log(errorCode);
    console.log(errorMessage);
  })
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User state changed, user is logged in!");
  } else {
    console.log("User state changed, user is logged out!");
  }
});

export function authGetUser() {
  return auth.currentUser;
}




