'use client'

import UpcomingView from "./upcomingView.jsx";
import { observer } from "mobx-react-lite";

import eventsConst from "../../utils/eventsConst.js"

export default observer(
  function Upcoming() {
    return (
      <div>
        <UpcomingView events={eventsConst}/>
      </div>
    );
  }
);
