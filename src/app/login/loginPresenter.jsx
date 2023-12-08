"use client"

import LoginView from "./loginView"
import { observer } from "mobx-react-lite";

export default
observer(
  function Login() {
    return <LoginView />
  }
);
