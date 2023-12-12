import {useState} from 'react';

export default function LivePub(props){
    const[guest, setGuest] = useState('');
    const[guestsArray, setGuestsArray] = useState([]);
    const[totalGuests, setTotalGuests] = useState(0);
    
    const inputChange = (e) => {
        setGuest(e.target.value);
    };

    const inputSubmit = (e) => {
        e.preventDefault();
        if (guest.trim()){
            setGuestsArray([...guestsArray, guest]);
            setGuest('');
            setTotalGuests(totalGuests + 1);
        }
    };

    const handleDelete = (index) => {
        setGuestsArray(guestsArray.filter((_,i) => i !== index));
        setTotalGuests(totalGuests - 1);
    };



    return(
        <div>
            <h1 className="header">Guest List</h1>
            <p>Total Guests: {totalGuests}</p>
            <form onSubmit={inputSubmit}>
                <input 
                type = "text" 
                value={guest} 
                onChange={inputChange} 
                placeholder="Add new guest here">
                </input> 
                <button className = "simpleButton">Add Internal</button>   
                <button className = "simpleButton">Add External</button>  
            </form>
            <ul>
                {guestsArray.map((guest, index) => (
                    <li key={index}>
                        {guest}
                        <button className="simpleButton" onClick={() => handleDelete(index)}>x</button>
                    </li>
                ))}
            </ul>
        </div>
        
    );
}