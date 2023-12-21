'use client'

import React, { useEffect, useState } from "react";
import DetailedPub from "./pubPresenter.jsx"

import model from "../../EventsModel.js"
import {readFromFirebase, subscribeToGuestCount} from "../../../firebase/firebaseModel.js";

import Loading from "../../../componentViews/loading.jsx";

export default function Home(props) {
  const [loading, setLoading] = useState(true);

  const [events, setEvents] = useState([]);
  const [guestsArray, setGuestsArray] = useState([]);

  useEffect(() => {
    // Fetch initial data
    readFromFirebase(model).then(() => {
      setEvents(model.events);
      setGuestsArray(model.guestsArray.guest);
      setLoading(false);
    });

    // Set up a real-time listener for events
    const unsubscribe = subscribeToGuestCount((updatedGuestsArray) => {
      console.log("Updated guestsArray:", updatedGuestsArray);
      setGuestsArray(updatedGuestsArray);
      model.guestsArray.guest = updatedGuestsArray;
    });


    // Clean up the listener on component unmount
    return () => {
      unsubscribe();
    };
  }, []);
  
  const event = events.find((object) => object.id === props.params.id);

  return (
    <div>
      {loading || event == undefined ? (
        <Loading/>
      ) : (
        <div>
          <DetailedPub event={event}
          guestsArray={model.guestsArray.guest}/>
        </div>
      )
      }
    </div>
  );
}