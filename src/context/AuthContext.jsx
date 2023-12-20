"use client"

// Third party library imports
import { useContext, createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "@firebase/auth";

// Local imports from project
import { auth } from "../firebase/firebaseModel";

const AuthContext = createContext();

export function AuthContextProvider({children}) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, [user]);

  return (
    <AuthContext.Provider value={{user}}>
      {children}
    </AuthContext.Provider>
  )
};

export function UserAuth() {
  return useContext(AuthContext);
}
