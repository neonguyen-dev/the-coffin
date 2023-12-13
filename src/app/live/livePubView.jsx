import {useState} from 'react';

export default function LivePub(props){
    const[guest, setGuest] = useState('');
    const[guestsArray, setGuestsArray] = useState([]);
    const[internals, setInternals] = useState(0);
    const[externals, setExternals] = useState(0);
    const[totalGuests, setTotalGuests] = useState(0);
    const [showExternalInput, setShowExternalInput] = useState(false);
    const [externalInputValue, setExternalInputValue] = useState('');
    const [activeInternalGuestIndex, setActiveInternalGuestIndex] = useState(null);

    const inputChange = (e) => {
        setGuest(e.target.value);
    };

    const inputSubmit = (e) => {
        e.preventDefault();
        if (guest.trim()){
            setGuestsArray([...guestsArray, {internal: guest, external: null}]);
            setGuest('');
            setTotalGuests(totalGuests + 1);
            setInternals(internals + 1);
        }
    };

    const handleDelete = (index) => {
        const updatedGuestsArray = [...guestsArray];

        if (updatedGuestsArray[index].external) {
            updatedGuestsArray[index].external = null;
            setExternals(externals -1);
        } else {
            updatedGuestsArray.splice(index, 1);
            setInternals(internals - 1);
        }
        
        setGuestsArray(updatedGuestsArray);
        setTotalGuests(totalGuests - 1);
    };

    const renderExternalInput = (index) => {
        setShowExternalInput(true);
        setActiveInternalGuestIndex(index);
    };

    const handleExternalInputChange = (e) => {
        setExternalInputValue(e.target.value);
    };

    const handleExternalInputSubmit = () => {
        if (externalInputValue.trim()) {
            const updatedGuestsArray = [...guestsArray];
            updatedGuestsArray[activeInternalGuestIndex] = {
              ...updatedGuestsArray[activeInternalGuestIndex],
              external: externalInputValue,
            };
            setGuestsArray(updatedGuestsArray);
            setTotalGuests(totalGuests + 1);
            setExternals(externals + 1);
            setExternalInputValue('');
            setShowExternalInput(false);
            setActiveInternalGuestIndex(null); 
        }
    };

    return(
        <div className="bg-gray-800 min-h-screen">
            <h1 className="font-bold text-center text-5xl">Guest List</h1>
            <p className="font-bold text-3xl">Total Guests: {totalGuests}</p>
            <p className="font-bold text-3xl">Total Internal Guests: {internals}</p>
            <p className="font-bold text-3xl">Total External Guests: {externals}</p>
            <form onSubmit={inputSubmit}>
                <input 
                type = "text" 
                value={guest} 
                onChange={inputChange} 
                placeholder="Add new guest here">
                </input> 
                <button className = "simpleButton">Add Internal</button>    
            </form>
            <ul className='list-none text-center'>
                {guestsArray.map((guest, index) => (
                    <li key={index} className='bg-gray-950 flex font-bold justify-left'>
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold px-4 py-2 m-2 rounded w-6 flex justify-center" onClick={() => handleDelete(index)}>x</button>
                        <button onClick={() => renderExternalInput(index)} className={`bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 m-2 rounded w-6 flex justify-center ${guest.external ? 'cursor-not-allowed opacity-50' : ''}`} disabled={guest.external !==null}>+1</button>
                        <p className='flex items-center justify-left m-2'>{guest.internal}</p>
                        {guest.external && (
                        <div className="flex items-center justify-center mx-auto">
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold px-4 py-2 m-2 rounded" onClick={() => handleDelete(index)}>x</button>
                            <div>+1: </div>
                            <div className="m-2">{guest.external}</div>
                        </div>
                        )}
                    </li>
                ))}
            </ul>
            {showExternalInput && (
            <form className="flex items-center justify-left m-2">
                <input onChange={handleExternalInputChange} value={externalInputValue} placeholder="Add +1" className="text-black h- m-2 rounded-full justify-center"/>
                <button onClick={handleExternalInputSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 m-2 rounded">Add +1</button>
            </form>)}
            {console.log(guestsArray)}
        </div>
    );
}