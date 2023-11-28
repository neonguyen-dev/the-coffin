'use client'

import AboutView from "../views/aboutView.js";
import { observer } from "mobx-react-lite";

export default observer(
    function About() {
        return <AboutView />;
    }
    );
