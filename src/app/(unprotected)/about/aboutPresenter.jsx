'use client'

// Third party library imports
import { observer } from "mobx-react-lite";

// Local imports from project
import AboutView from "./aboutView.jsx";

export default observer(
    function About() {
        return <AboutView />;
    }
    );
