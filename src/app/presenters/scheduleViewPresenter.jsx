'use client'

import AdminSchedule from "../views/scheduleView.jsx"; 
import { observer } from "mobx-react-lite";

import React, { useEffect, useState } from "react";
import model from "../EventsModel.js"
import readFromFirebase from "../firebaseModel.js";

export default observer(
    function Schedule() {
        const [loading, setLoading] = useState(true);
        useEffect(() => { readFromFirebase(model).then(() => { setLoading(false) }) }, []);
        return (
        <div>
        {loading ? (
            <p>Loading...</p>
        ) : (
            <AdminSchedule model={model} />
        )}
    </div>
        );
    }
    );