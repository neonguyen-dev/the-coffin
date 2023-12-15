'use client'

import NewPub from "./newPubView.jsx"; 
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import {addEventToFirebase} from "../../firebase/firebaseModel.js";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { imageDb } from "@/firebase/firebaseModel";

export default observer(
    function CreatePub() {
        const [pubData, setPubData] = useState({
            name: "",
            organizer: "",
            date: "",
            description: "",
            food: "",
            price: "",
            file: null
        });
    
        const handleInputChange = (e) => {
            const { name, value } = e.target;
            setPubData({ ...pubData, [name]: value });
        };
    
        const handleFileChange = (e) => {
            const file = e.target.files[0];
            setPubData({ ...pubData, file });
        };
    
        const handleOrganizerChange = (e) => {
            const organizerValue = e.target.value;
            setPubData({ ...pubData, organizer: organizerValue });
        };
    
        const handleSubmit = async () => {
            //Upload to firebase storage using the field of file and retrieve url to add it to the field of imgSrc
            const fileRef = ref(imageDb, `pub_images/${pubData.file.name}`);
            await uploadBytes(fileRef, pubData.file);
    
            const imageURL = await getDownloadURL(fileRef);
            
            addEventToFirebase({
                name: pubData.name,
                organizer: pubData.organizer,
                date: new Date(pubData.date).getTime(),
                description: pubData.description,
                food: pubData.food,
                price: pubData.price,
                imgSrc: imageURL
            });
        };
        
        return (
            <NewPub 
                name={pubData.name}
                organizer={pubData.organizer}
                date={pubData.date}
                description={pubData.description}
                food={pubData.food}
                price={pubData.price}
                file={pubData.file}
                handleInputChange={handleInputChange}
                handleOrganizerChange={handleOrganizerChange}
                handleFileChange={handleFileChange}
                handleSubmit={handleSubmit}/>);
    }
    );