'use client'

import SignupView from "./signupView.jsx";
import { observer } from "mobx-react-lite";

export default observer(
    function Signup() {
        return <SignupView />;
    }
    );