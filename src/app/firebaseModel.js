import { initializeApp } from "firebase/app";
import { getDatabase, push, ref, get, set } from "firebase/database";

import firebaseConfig from "./firebaseConfig.js";
import { getAuth } from "@firebase/auth";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

/*addEventToFirebase({
    name: "Nyaktiv pub",
    organizer: "QMISK",
    date: new Date('2023-12-07').getTime(),
    startTime: new Date('2023-12-07T17:00').getTime(),
    endTime: new Date('2023-12-08T03:00').getTime(),
    description: "VÄLKOMNA TILLBAKA TILL QMISK PUB!",
    food: "Korv Stroganoff",
    price: 25,
    imgSrc: "https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/407379455_901177538260126_3667670223655575503_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=d8d9c5&_nc_ohc=S7PDRRxXKoIAX9I2NiB&_nc_ht=scontent-arn2-1.xx&oh=00_AfBihxuHBMUan0Oi7fbH1zxjXWTjv2OnoGpUTbXoWMv0Hw&oe=6573B666"
});*/

function persistenceToModel(data_from_firebase, model){
    model.events = Object.values(data_from_firebase || []);
}

async function addEventToFirebase(eventToAdd){
    const eventRef = push(ref(db, 'pubs'),
        {
            name: eventToAdd.name,
            organizer: eventToAdd.organizer,
            date: eventToAdd.date,
            startTime: eventToAdd.startTime,
            endTime: eventToAdd.endTime,
            description: eventToAdd.description,
            food: eventToAdd.food,
            price: eventToAdd.price,
            imgSrc: eventToAdd.imgSrc
        }
    );

    const eventId = eventRef.key;
    
    await set(ref(db, `pubs/${eventId}`), { ...eventToAdd, id: eventId });
}

async function readFromFirebase(model){
    model.ready = false;
    const snapshot = await get(ref(db, 'pubs'));
    await persistenceToModel(snapshot.val(), model);
    model.ready = true;
}

export default readFromFirebase;

export {auth};