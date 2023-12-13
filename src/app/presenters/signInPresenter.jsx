"use client"

// 3rd party librarys
import { observer } from "mobx-react-lite";
import { useState } from "react";
import SignInView from "../views/signInView";
import { resolveAuthSignIn } from "@/firebase/firebaseAuth";

export default
observer(
  function SignIn(props) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return <SignInView
      setEmail={setEmail}
      setPassword={setPassword}
      signIn={() => {
        resolveAuthSignIn(email, password).then((user) => {
          console.log(user);
          window.location.href = "/";
        }).catch((error) => {
          console.log(error);
        })
      }}/>
  }
);
