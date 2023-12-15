import React, { useState } from "react";


export default function NewPub(props) {

    return (
        <div className="header">
            <h1>Create a new pub</h1>
            <p>Fill out the necessary information about the new pub</p>

            <hr />

            <div>
                <label><b>Pub Name: </b></label>
                <input type="text" placeholder="Pub name" name="name" value={props.name} onChange={props.handleInputChange} required />
            </div>

            <div>
                <label><b>Organizer: </b></label>
                <select name="organizer" id="organizer-select" className="text-black" value={props.organizer} onChange={props.handleOrganizerChange}>
                    <option value="">Choose:</option>
                    <option value="Qmisk">Qmisk</option>
                    <option value="TMEIT">TMEIT</option>
                </select>
            </div>

            <div>
                <label><b>Date: </b></label>
                <input type="text" placeholder="YYYY-MM-DD" name="date" value={props.date} onChange={props.handleInputChange} required />
            </div>
            
            <div>
                <label><b>Description: </b></label>
                <input type="text" placeholder="Description" name="description" value={props.description} onChange={props.handleInputChange} required />
            </div>
            
            <div>
                <label><b>Food: </b></label>
                <input type="text" placeholder="Food" name="food" value={props.food} onChange={props.handleInputChange} required />
            </div>

            <div>
                <label><b>Price: </b></label>
                <input type="text" placeholder="kr" name="price" value={props.price} onChange={props.handleInputChange} required />
            </div>

            <div>
                <input type="file" id="myFile" name="filename" onChange={props.handleFileChange} />
            </div>

            <div className="clearfix">
                <button type="button" className="cancelbtn">Cancel</button>
                <button type="submit" className="signupbtn" onClick={props.handleSubmit}>Create Pub!</button>
            </div>
        </div>
    );
}