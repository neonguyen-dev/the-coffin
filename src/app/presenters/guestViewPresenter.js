'use client'

import GuestView from "../views/guestView.js";
import { observer } from "mobx-react-lite";

export default observer(
    function Guest() {
        return (
            <div>
                <GuestView />
            </div>
        );
    }
);
