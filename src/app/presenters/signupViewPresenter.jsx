'use client'

import SignupView from "../views/signupView.jsx";
import { observer } from "mobx-react-lite";

export default observer(
    function Signup() {
        return <SignupView />;
    }
    );