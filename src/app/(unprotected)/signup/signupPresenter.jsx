'use client'

// Third party library imports
import { observer } from "mobx-react-lite";

// Local imports from project
import SignupView from "./signupView.jsx";

export default observer(
    function Signup() {
        return <SignupView />;
    }
    );