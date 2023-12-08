import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth"

import { auth } from "./firebaseConfig";

export async function resolveAuthSignIn(email, password) {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw error;
  }
};

export async function resolveAuthSignOut() {
  try {
    return await signOut(auth);
  } catch (error) {
    throw error;
  }
};

// Adds observer to auth with onChange as CB function if there is a change in state
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

