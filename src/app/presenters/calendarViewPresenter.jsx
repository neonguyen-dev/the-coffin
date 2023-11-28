'use client'

import CalendarView from "../views/calendarView.jsx";
import { observer } from "mobx-react-lite";

export default observer(
    function Calendar() {
        return <CalendarView />;
    }
    );
