"use client"

import LoginView from "../views/loginView"
import { observer } from "mobx-react-lite";

export default
observer(
  function Login() {
    return <LoginView />
  }
);
