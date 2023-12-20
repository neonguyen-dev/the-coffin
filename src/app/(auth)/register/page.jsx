"use client"

// Third party library imports
import { useRouter } from "next/navigation";
import { useState } from "react";

// Local imports from project
import { UserAuth } from "@/context/AuthContext"
import { RegisterView } from "./registerView";
import { observer } from "mobx-react-lite";


export default observer(
  function RegisterPresenter() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName]  =useState("");
    const [lastName, setLastName]  =useState("");
    const [organisation, setOrganisation] = useState(""); // Implement later
    const [securityLevel, setSecurityLevel] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const {register} = UserAuth();

    return (
      <RegisterView 
        setEmail={setEmail}
        setPassword={setPassword}
        setFirstName={setFirstName}
        setLastName={setLastName}
        setOrganisation={setOrganisation}
        setSecurityLevel={setSecurityLevel}
        error={error}
        register={() => {
          register(email, password, firstName, lastName, organisation, securityLevel).then((user) => {
            console.log(user);
            router.push("/");
          }).catch((error) => {
            console.log(error);
            setError(error);
            // Create better error handling/conditional rendering in the view based on the value of error
          })
        }}
      />
    );
  }
);
