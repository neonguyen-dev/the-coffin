// Third party library imports
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth"

// Local imports from project
import { auth } from "./firebaseModel";

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
