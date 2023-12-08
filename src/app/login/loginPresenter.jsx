"use client"

import { observer } from "mobx-react-lite";
import { useState } from "react";
import LoginView from "./loginView"
import { authGetUser, authSignIn } from "@/firebase/firebaseAuth";

export default
observer(
  function Login(props) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return <LoginView
      setEmail={setEmail}
      setPassword={setPassword}
      signIn={() => {
        authSignIn(email, password);
        const user = authGetUser();
        console.log(user);
        if (user) {
          window.location.href = "/"; // Redirect to admin page (home page for now)
        }
      }}/>
  }
);
