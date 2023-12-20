'use client'

// Third party library imports
import { observer } from "mobx-react-lite";

// Local imports from project
import GuestView from "./guestView.jsx";
import { UserAuth } from "@/context/AuthContext.jsx";

export default observer(
  function Guest() {
    const {user, logout} = UserAuth();
    
    return (
      <div>
        <GuestView user={user} logout={() => {
          logout().then(
            console.log("You are now logged out")
          ).catch((error) => {
            console.log(error);
          })
        }}/>
      </div>
    );
  }
);
