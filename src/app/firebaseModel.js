import { initializeApp } from "firebase/app";
import { getDatabase, push, ref, get } from "firebase/database";

import firebaseConfig from "./firebaseConfig.js";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

/*push(ref(db, 'pubs'),
{
    name: "Nyaktiv pub",
    organizer: "QMISK",
    date: new Date('2023-12-07'),
    startTime: new Date('2023-12-07T17:00'),
    endTime: new Date('2023-12-08T03:00'),
    description: "VÄLKOMNA TILLBAKA TILL QMISK PUB!",
    food: "Korv Stroganoff",
    price: 25,
    imgSrc: "https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/407379455_901177538260126_3667670223655575503_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=d8d9c5&_nc_ohc=S7PDRRxXKoIAX9I2NiB&_nc_ht=scontent-arn2-1.xx&oh=00_AfBihxuHBMUan0Oi7fbH1zxjXWTjv2OnoGpUTbXoWMv0Hw&oe=6573B666"
}
);*/

function persistenceToModel(data_from_firebase, model){
    model.events = Object.values(data_from_firebase);
}

function addEventToFirebase(eventToAdd){
    push(ref(db, 'pubs'),
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
}

async function readFromFirebase(model){
    model.ready = false;
    const snapshot = await get(ref(db, 'pubs'));
    await persistenceToModel(snapshot.val(), model);
    model.ready = true;3
}

export default readFromFirebase;

