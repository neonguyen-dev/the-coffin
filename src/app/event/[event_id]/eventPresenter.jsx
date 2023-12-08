'use client'

import EventView from "./eventView.jsx"; 
import { observer } from "mobx-react-lite";

export default observer(
  function Event() {
    return <EventView />;
  }
);