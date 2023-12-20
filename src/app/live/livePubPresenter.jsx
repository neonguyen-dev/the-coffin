'use client'

import LivePub from "./livePubView.jsx"; 
import { observer } from "mobx-react-lite";
import {useState} from 'react';

export default observer(
    function CreateLivePub() {
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


        return (
            <LivePub 
                guest={guest}
                guestsArray={guestsArray}
                internals={internals}
                externals={externals}
                totalGuests={totalGuests}
                showExternalInput={showExternalInput}
                externalInputValue={externalInputValue}
                activeInternalGuestIndex={activeInternalGuestIndex}
                inputChange={inputChange}
                inputSubmit={inputSubmit}
                handleDelete={handleDelete}
                renderExternalInput={renderExternalInput}
                handleExternalInputChange={handleExternalInputChange}
                handleExternalInputSubmit={handleExternalInputSubmit}
                />);
    }
);