"use client"

// Third party library imports
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { useRouter } from "next/navigation";

// Local imports from project
import { UserAuth } from "@/context/AuthContext";
import LoginView from "./loginView";

export default observer(
  function Login() {
    const {login} = UserAuth();
    const router = useRouter(); // For manually changing the path

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return <LoginView
      setEmail={setEmail}
      setPassword={setPassword}
      login={() => {
        login(email, password).then((user) => {
          console.log("You are now logged in");
          router.push("/");
        }).catch((error) => {
          console.log(error);
        })
      }}/>
  }
);
