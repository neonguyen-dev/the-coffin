import React, { useState } from "react";

export default function NewPub(props) {
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

    const handleSubmit = () => {
        props.addEventToFirebase({
            name: pubData.name,
            organizer: pubData.organizer,
            date: new Date(pubData.date).getTime(),
            description: pubData.description,
            food: pubData.food,
            price: pubData.price,
            imgSrc: "https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/407379455_901177538260126_3667670223655575503_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=d8d9c5&_nc_ohc=S7PDRRxXKoIAX9I2NiB&_nc_ht=scontent-arn2-1.xx&oh=00_AfBihxuHBMUan0Oi7fbH1zxjXWTjv2OnoGpUTbXoWMv0Hw&oe=6573B666",
        });
    };

    return (
        <div className="header">
            <h1>Create a new pub</h1>
            <p>Fill out the necessary information about the new pub</p>

            <hr />

            <div>
                <label><b>Pub Name: </b></label>
                <input type="text" placeholder="Pub name" name="name" value={pubData.name} onChange={handleInputChange} required />
            </div>

            <div>
                <label><b>Organizer: </b></label>
                <select name="organizer" id="organizer-select" className="text-black" value={pubData.organizer} onChange={handleOrganizerChange}>
                    <option value="">Choose:</option>
                    <option value="Qmisk">Qmisk</option>
                    <option value="TMEIT">TMEIT</option>
                </select>
            </div>

            <div>
                <label><b>Date: </b></label>
                <input type="text" placeholder="YYYY-MM-DD" name="date" value={pubData.date} onChange={handleInputChange} required />
            </div>
            
            <div>
                <label><b>Description: </b></label>
                <input type="text" placeholder="Description" name="description" value={pubData.description} onChange={handleInputChange} required />
            </div>
            
            <div>
                <label><b>Food: </b></label>
                <input type="text" placeholder="Food" name="food" value={pubData.food} onChange={handleInputChange} required />
            </div>

            <div>
                <label><b>Price: </b></label>
                <input type="text" placeholder="kr" name="price" value={pubData.price} onChange={handleInputChange} required />
            </div>

            <div>
                <input type="file" id="myFile" name="filename" onChange={handleFileChange} />
            </div>

            <div className="clearfix">
                <button type="button" className="cancelbtn">Cancel</button>
                <button type="submit" className="signupbtn" onClick={handleSubmit}>Create Pub!</button>
            </div>
        </div>
    );
}