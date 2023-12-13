'use client'

import NewPub from "./newPubView.jsx"; 
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import readFromFirebase from "../../firebase/firebaseModel.js";

export default observer(
    function CreatePub() {
        return <NewPub/>;
    }
    );