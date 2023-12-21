'use client'

import DetailedPubView from "./pubView.jsx";
import LiveCounterView from "./liveCounterView.jsx";
import { observer } from "mobx-react-lite";

export default observer(
    function DetailedPub(props) {
        return (
            <div>
                <DetailedPubView event={props.event}/>
                <LiveCounterView event={props.event}
                guestCount={props.guestsArray.length}/>
            </div>
        );
    }
);
