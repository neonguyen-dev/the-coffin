'use client'

import AboutView from "./aboutView.jsx";
import { observer } from "mobx-react-lite";

export default observer(
    function About() {
        return <AboutView />;
    }
    );
