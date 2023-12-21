import React, { useState, useEffect } from "react";

export default function LiveCounterView(props) {
    const currentDate = new Date().getTime();
    const eventDate = props.event.date;
  
    const calculateTimeRemaining = () => {
        const distance = eventDate - new Date().getTime();
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
        return { days, hours, minutes, seconds };
    };
    
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setTimeRemaining(calculateTimeRemaining());
      }, 1000);
  
      return () => {
        clearInterval(intervalId);
      };
    }, [eventDate]);



    if (currentDate >= eventDate) {
        return (
            <div className="text-center bg-gray-800 pb-10">
                <h1 className="text-4xl font-bold">Live Counter</h1>
                <div className="font-mono text-6xl">
                    <div>{props.guestCount}</div>
                </div>
            </div>
        );
    }

    return (
        <div className="text-center bg-gray-800 pb-10">
            <h1 className="text-4xl font-bold">Countdown</h1>
            <div className="font-mono text-6xl">
                <div>{`${timeRemaining.days} days ${timeRemaining.hours} hours ${timeRemaining.minutes} minutes ${timeRemaining.seconds} seconds`}</div>
            </div>
        </div>
    );
}
