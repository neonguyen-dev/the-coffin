'use client'

import NewPub from "../views/newPubView.jsx"; 
import { observer } from "mobx-react-lite";

export default observer(
    function CreatePub() {
        return <NewPub/>;
    }
    );