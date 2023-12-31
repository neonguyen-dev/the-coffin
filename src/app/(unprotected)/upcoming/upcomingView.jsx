// Third party library imports
import Link from 'next/link';
import React, { useEffect, useState } from "react";


export default function UpcomingView(props) {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 1);

    const [filteredEvents, setFilteredEvents] = useState([...props.model.events].filter((event) => event.date >= currentDate));
    const [selectedOrganizer, setSelectedOrganizer] = useState("All");

    const handleFilter = (organizer) => {
        { console.log(filteredEvents) }
        setSelectedOrganizer(organizer);
        if (organizer === "All") {
            setFilteredEvents([...props.model.events].filter((event) => event.date >= currentDate));
        } else {
            const filtered = props.model.events.filter(
                (event) => event.organizer == organizer && event.date >= currentDate
            );
            setFilteredEvents(filtered);
        }
    };

    return (
        <div className="bg-gray-800 min-h-screen">
            <div className="py-8">
                <header className="text-6xl font-bold text-white sm:text-6xl text-center">Upcoming pubs</header>
                <div className="dropdown">
                    <button className="dropbtn rounded-r-lg">What Mastery?</button>
                    <div className="dropdown-content">
                        <a href="#" onClick={() => handleFilter("All")}> All</a>
                        <a href="#" onClick={() => handleFilter("Qmisk")}> Qmisk</a>
                        <a href="#" onClick={() => handleFilter("TMEIT")}>TMEIT</a>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap py-5 px-8 sm:px-20 gap-5 justify-center sm:justify-start">
                {[...filteredEvents].sort(
                    function (a, b) {
                        return new Date(a.date) - new Date(b.date);
                    }).map(renderEventsCB)}
            </div>
        </div>
    );

    function renderEventsCB(event) {
        const date = new Date(event.date);

        return (
            <Link href={"/pub/" + event.id}>
                <div className="card w-80 bg-gray-600 shadow-xl rounded-lg hover:scale-105 transition">
                    <figure><img className="h-48 rounded-t-lg object-cover" src={event.imgSrc} alt="Event Image" /></figure>
                    <div className="card-body h-48 px-4 py-4">
                        <h1 className="text-xl font-bold card-title">{event.name}</h1>
                        <p>{date.getDate() + " " + date.toLocaleString('en-us', { month: 'long' }) + " " + date.getFullYear()}</p>
                        <p className="py-4">{event.organizer}</p>
                        <p>{"Food: " + event.food}</p>
                        <p>{"Price: " + event.price + " kr"}</p>
                    </div>
                </div>
            </Link>
        );
    }
}


