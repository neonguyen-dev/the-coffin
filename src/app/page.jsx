'use client'

// Third party library imports
import { resolveAuthSignOut } from "@/firebase/firebaseAuth.js";
import { observer } from "mobx-react-lite";

// Local imports from project
import GuestView from "./guestView.jsx";

export default observer(
  function Guest() {
    return (
      <div>
        <GuestView logout={() => {
          resolveAuthSignOut().catch((error) => {
            console.log(error);
          })
        }}/>
      </div>
    );
  }
);
