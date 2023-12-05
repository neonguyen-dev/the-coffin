'use client'

import UpcomingView from "../views/upcomingView.jsx";
import { observer } from "mobx-react-lite";

import eventsConst from "../eventsConst.js"

export default observer(
    function Upcoming() {
        return (
            <div>
                <UpcomingView events={eventsConst}/>
            </div>
        );
    }
);
