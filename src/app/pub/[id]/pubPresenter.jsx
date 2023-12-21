'use client'

import DetailedPubView from "./pubView.jsx";
import LiveCounterView from "./liveCounterView.jsx";
import { observer } from "mobx-react-lite";

export default observer(
    function DetailedPub(props) {
        const externalsArray = props.guestsArray?.filter((guest) => guest.external != '');

        return (
            <div>
                <DetailedPubView event={props.event}/>
                <LiveCounterView event={props.event}
                guestCount={props.guestsArray?.length + externalsArray?.length || 0}
                internalCount={props.guestsArray?.length || 0}
                externalCount={externalsArray?.length || 0}/>
            </div>
        );
    }
);
