"use client"

// Third party library imports
import { useContext, createContext, useState, useEffect } from "react";
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "@firebase/auth";

// Local imports from project
import { auth } from "../firebase/firebaseModel";

const AuthContext = createContext();

export function AuthContextProvider({children}) {
  const [user, setUser] = useState(null);

  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, [user]);

  return (
    <AuthContext.Provider value={{user, register, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
};

export function UserAuth() {
  return useContext(AuthContext);
}
