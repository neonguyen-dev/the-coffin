'use client'

import React, { useEffect, useState } from "react";
import DetailedPubView from "./pubView.jsx";
import LiveCounterView from "./liveCounterView.jsx";
import { observer } from "mobx-react-lite";
import model from "../../EventsModel.js";
import { getDatabase, ref, remove } from "@firebase/database";


export default observer(
    function DetailedPub(props) {
        const externalsArray = props.guestsArray?.filter((guest) => guest.external != '');
        
        const [pubs, setPubs] = useState(model.events);
        const db = getDatabase();
        
        const handleDelete = async (id) => {
        await remove(ref(db, `pubs/${id}`));
        const updatedPubs = pubs.filter((pub) => pub.id != id);
        setPubs(updatedPubs);

    }

        return (
            <div>
                <DetailedPubView event={props.event}
                handleDelete={handleDelete}/>
                <LiveCounterView event={props.event}
                guestCount={props.guestsArray?.length + externalsArray?.length || 0}
                internalCount={props.guestsArray?.length || 0}
                externalCount={externalsArray?.length || 0}/>
            </div>
        );
    }
);
