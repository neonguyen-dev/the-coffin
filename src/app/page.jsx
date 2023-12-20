'use client'

// Third party library imports
import { resolveAuthSignOut } from "@/firebase/firebaseAuth.js";
import { observer } from "mobx-react-lite";

// Local imports from project
import GuestView from "./guestView.jsx";
import { UserAuth } from "@/context/AuthContext.jsx";

export default observer(
  function Guest() {
    const {user} = UserAuth();
    
    return (
      <div>
        <GuestView user={user} logout={() => {
          resolveAuthSignOut().catch((error) => {
            console.log(error);
          })
        }}/>
      </div>
    );
  }
);
