'use client'

import LivePub from "./livePubView.jsx"; 
import { observer } from "mobx-react-lite";

export default observer(
    function CreateLivePub() {
        return <LivePub/>;
    }
);