'use client'

import React, { useEffect, useState } from "react";
import UpcomingView from "./upcomingView.jsx";
import { observer } from "mobx-react-lite";

import model from "../../EventsModel.js"
import { readFromFirebase } from "../../../firebase/firebaseModel.js";

import Loading from "../../../components/loading.jsx";

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
