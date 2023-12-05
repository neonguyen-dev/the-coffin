'use client'

import PubView from "../views/pubView.jsx"; 
import { observer } from "mobx-react-lite";

export default observer(
    function Pub() {
        return <PubView />;
    }
    );