"use client"

import { observer } from "mobx-react-lite";
import { useState } from "react";
import LoginView from "./loginView"
import { resolveAuthSignIn } from "@/firebase/firebaseAuth";

export default
observer(
  function Login(props) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return <LoginView
      setEmail={setEmail}
      setPassword={setPassword}
      signIn={() => {
        resolveAuthSignIn(email, password).then((user) => {
          console.log(user);
        }).catch((error) => {
          console.log(error);
        })
      }}/>
  }
);
