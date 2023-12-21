'use client'

// Third party library imports
import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

// Local imports from project
import { readFromFirebase } from "@/firebase/firebaseModel.js";
import model from "@/app/EventsModel.js"
import AdminSchedule from "./scheduleView.jsx"; 

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