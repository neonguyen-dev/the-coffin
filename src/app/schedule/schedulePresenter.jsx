'use client'

import AdminSchedule from "./scheduleView.jsx";
import { observer } from "mobx-react-lite";

import React, { useEffect, useState } from "react";
import model from "../EventsModel.js"
import { readFromFirebase } from "../../firebase/firebaseModel.js";

import Loading from "../../componentViews/loading.jsx";

export default observer(
    function Schedule() {
        const [loading, setLoading] = useState(true);
        useEffect(() => { readFromFirebase(model).then(() => { setLoading(false) }) }, []);

        const [filteredEvents, setFilteredEvents] = useState([...model.events]);
        const [selectedOrganizer, setSelectedOrganizer] = useState("All");
    
        const handleFilter = (organizer) => {
            { console.log(filteredEvents) }
            setSelectedOrganizer(organizer);
            if (organizer === "All") {
                setFilteredEvents([...model.events]);
            } else {
                const filtered = model.events.filter(
                    (event) => event.organizer == organizer
                );
                setFilteredEvents(filtered);
            }
        };

        return (
            <div>
                {loading ? (
                    <Loading />
                ) : (
                    <AdminSchedule model={model}
                    handleFilter={handleFilter}
                    filteredEvents={filteredEvents}/>
                )}
            </div>
        );
    }
);