'use client'

import GuestView from "../views/guestView.jsx";
import { observer } from "mobx-react-lite";

export default observer(
    function Guest() {
        return <GuestView />;
    }
    );
