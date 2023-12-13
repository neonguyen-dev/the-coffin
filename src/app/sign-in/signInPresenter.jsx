"use client"

// Third party libraries
import { observer } from "mobx-react-lite";
import { useState } from "react";

// Local imports from project
import { resolveAuthSignIn } from "@/firebase/firebaseAuth";
import SignInView from "./signInView";

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
