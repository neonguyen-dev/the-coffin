'use client'

// Third party library imports
import { observer } from "mobx-react-lite";

// Local imports from project
import { UserAuth } from "@/context/AuthContext.jsx";
import HomeView from "./homeView.jsx";

export default observer(
  function Home() {
    const {user, logout} = UserAuth();
    
    return (
      <div>
        <HomeView user={user} logout={() => {
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
