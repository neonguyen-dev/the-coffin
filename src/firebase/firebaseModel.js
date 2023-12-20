import { initializeApp } from "firebase/app";
import { getDatabase, push, ref, get, set, update } from "firebase/database";

import firebaseConfig from "./firebaseConfig.js";
import { getAuth } from "@firebase/auth";
import { getStorage } from "firebase/storage";


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
const imageDb = getStorage(app);

function persistenceToModel(data_from_firebase, model){
    console.log(data_from_firebase);
    model.events = Object.values(data_from_firebase?.pubs || []);
    model.guestsArray = (data_from_firebase?.guest || []);
}

async function addEventToFirebase(eventToAdd){
    const eventRef = push(ref(db, 'pubs'),
        {
            name: eventToAdd.name,
            organizer: eventToAdd.organizer,
            date: eventToAdd.date,
            description: eventToAdd.description,
            food: eventToAdd.food,
            price: eventToAdd.price,
            imgSrc: eventToAdd.imgSrc
        }
    );

    const eventId = eventRef.key;
    
    await set(ref(db, `pubs/${eventId}`), { ...eventToAdd, id: eventId });

    console.log("add");
}

async function addGuestListToFirebase(guestList){
    console.log(guestList);
    await set(ref(db,'guest'), guestList)
}

async function readGuestsFromFirebase(model){
    model.ready = false;
    const snapshot = await get(ref(db, 'guest'));
    await persistenceToModel(snapshot.val(), model);
    model.ready = true; 
}

async function readFromFirebase(model){
    model.ready = false;
    const snapshot = await get(ref(db, 'pubs'));
    await persistenceToModel(snapshot.val(), model);
    model.ready = true;
}

export {auth, imageDb, readFromFirebase, addEventToFirebase, addGuestListToFirebase, readGuestsFromFirebase};