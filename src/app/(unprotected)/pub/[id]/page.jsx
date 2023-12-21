'use client'

// Third party library imports
import React, { useEffect, useState } from "react";

// Local imports from project
import {readFromFirebase} from "@/firebase/firebaseModel.js";
import model from "@/app/EventsModel.js"
import DetailedPub from "./pubPresenter.jsx"

export default function Home(props) {
  const [loading, setLoading] = useState(true);
  useEffect(() => { readFromFirebase(model).then(() => { setLoading(false) }) }, []);

  const event = model.events.find(object => object.id === props.params.id);

  if(event == undefined){
    return (
      <div>404 Error not Found</div>
    )
  }

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <DetailedPub event={event}/>
          <div>Live Counter</div>
        </div>
      )
      }
    </div>
  );
}