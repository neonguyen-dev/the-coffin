// Third party library imports
import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import Link from 'next/link';

// Local imports from project
import "@/app/EventsModel.js"


export default function AdminSchedule(props) {
    return (
        <div className="bg-gray-800 min-h-screen">
            <header className="text-6xl font-bold text-center py-8">Schedule</header>
            <div className="dropdown">
                <button className="dropbtn rounded-r-lg">What Mastery?</button>
                <div className="dropdown-content">

                    <a href="#" onClick={() => props.handleFilter("All")}> All</a>
                    <a href="#" onClick={() => props.handleFilter("Qmisk")}> Qmisk</a>
                    <a href="#" onClick={() => props.handleFilter("TMEIT")}>TMEIT</a>
                </div>
            </div>
            <Link href="newpub" className="simpleButton2">+</Link>


            <div className="flex flex-wrap py-5 px-8 sm:px-20 gap-5 justify-center sm:justify-start">
                {[...props.filteredEvents].sort(
                    function (a, b) {
                        return new Date(a.date) - new Date(b.date);
                    }).map(renderEventsCB)}
            </div>
            <Link href="live" className="simpleButton">Guests</Link>
        </div>


    );

    function renderEventsCB(event) {
        return (
            <Link key={event.id} href={"/pub/" + event.id}>
                <div className="card w-80 bg-gray-600 shadow-xl rounded-lg hover:scale-105 transition">
                    <figure><img className="h-48 rounded-t-lg object-cover" src={event.imgSrc} alt="Event Image" /></figure>
                    <div className="card-body h-48 px-4 py-4">
                        <h1 className="text-xl font-bold card-title">{event.name}</h1>
                        <p className="py-4">{event.organizer}</p>
                        <p>{/*event.date.getDate() + " " + event.date.toLocaleString('en-us', { month: 'long' }) + " " + event.startTime.getHours() + ":" + (event.startTime.getMinutes() < 10 ? '0' : '') + event.startTime.getMinutes()*/}</p>
                        <p>{"Food: " + event.food}</p>
                        <p>{"Price: " + event.price + " kr"}</p>
                    </div>
                </div>
            </Link>
        );
    }


};