'use client'

// Third party library imports
import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

// Local imports from project
import { readFromFirebase } from "@/firebase/firebaseModel.js";
import model from "@/app/EventsModel.js"
import Loading from "@/components/loading.jsx";
import UpcomingView from "./upcomingView.jsx";

export default observer(
    function Upcoming() {
        const [loading, setLoading] = useState(true);
        useEffect(() => { readFromFirebase(model).then(() => { setLoading(false) }) }, []);
        return (
            <div>
                {loading ? (
                    <Loading />
                ) : (
                    <UpcomingView model={model} />
                )}
            </div>
        );
    }
);
