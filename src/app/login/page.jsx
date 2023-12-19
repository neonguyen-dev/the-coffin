"use client"

// Third party library imports
import { observer } from "mobx-react-lite";
import { useState } from "react";

// Local imports from project
import { resolveAuthSignIn } from "@/firebase/firebaseAuth";
import LoginView from "./loginView";

export default
observer(
  function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return <LoginView
      setEmail={setEmail}
      setPassword={setPassword}
      login={() => {
        resolveAuthSignIn(email, password).then((user) => {
          console.log(user);
          window.location.href = "/";
        }).catch((error) => {
          console.log(error);
        })
      }}/>
  }
);
