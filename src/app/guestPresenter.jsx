'use client'

import GuestView from "./guestView.jsx";
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
