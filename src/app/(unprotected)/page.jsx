'use client'

// Third party library imports
import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

// Local imports from project
import { UserAuth } from "@/context/AuthContext.jsx";
import { readFromFirebase } from "@/firebase/firebaseModel.js";
import model from "@/app/EventsModel.js";
import Loading from "@/components/loading.jsx";
import HomeView from "./homeView.jsx";

export default observer(
  function Home() {
    const { user, logout } = UserAuth();

    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 1);

    const [loading, setLoading] = useState(true);
    useEffect(() => {
      readFromFirebase(model).then(() => {
        setLoading(false)
      })
    }, []);

    const events = model.events.filter((event) => event.date >= currentDate).sort(function (a, b) {
      return new Date(a.date) - new Date(b.date);
    });

    return (
      <div>
        {loading ? (
          <Loading />
        ) : (
          <HomeView events={events} user={user} logout={() => {
            logout().then(
              console.log("You are now logged out")
            ).catch((error) => {
              console.log(error);
            })
          }} />
        )}
      </div>
    );
  });