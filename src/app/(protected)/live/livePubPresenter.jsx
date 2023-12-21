'use client'

// Third party library imports
import { observer } from "mobx-react-lite";
import {useState, useEffect} from 'react';

// Local imports from project
import { addGuestListToFirebase, readGuestsFromFirebase } from "@/firebase/firebaseModel.js";
import model from "@/app/EventsModel.js"
import LivePub from "./livePubView.jsx"; 

export default observer(
    function CreateLivePub() {
        const[guest, setGuest] = useState('');
        const[isDataLoaded, setIsDataLoaded] = useState(false);
        const[guestsArray, setGuestsArray] = useState([]);
        const[internals, setInternals] = useState(0);
        const[externals, setExternals] = useState(0);
        const[totalGuests, setTotalGuests] = useState(0);
        const [showExternalInput, setShowExternalInput] = useState(false);
        const [externalInputValue, setExternalInputValue] = useState('');
        const [activeInternalGuestIndex, setActiveInternalGuestIndex] = useState(null);
        const [loadingData, setLoadingData] = useState(false);
    
        const inputChange = (e) => {
            setGuest(e.target.value);
        };

        useEffect(() => {
            const fetchData = async () => {
                await readGuestsFromFirebase(model);
                setGuestsArray(model.guestsArray);
                setInternals(model.guestsArray.length);
                const externalsArray = model.guestsArray.filter((guest) => guest.external != '');
                setExternals(externalsArray.length);
                setTotalGuests(model.guestsArray.length + externalsArray.length);


                setIsDataLoaded(true);
            }

            fetchData();
            
          }, []);

        useEffect(() => {
                if(isDataLoaded){
                    setLoadingData(true);
                    console.log(model.guestsArray);
                    addGuestListToFirebase({
                        guest: model.guestsArray,
                    }).then(() => {
                        setLoadingData(false);
                    });
                }
        }, [isDataLoaded, model.guestsArray]);

        useEffect(() => {
            if (!loadingData) {
                // This block ensures that model.guestsArray is updated only after data is loaded
                model.guestsArray = guestsArray;
            }
        }, [loadingData, guestsArray]);


        const inputSubmit = (e) => {

            e.preventDefault();
            if (guest.trim()){
                setGuestsArray((prevGuestsArray) => {
                    const updatedGuestsArray = [...prevGuestsArray, { internal: guest, external: "" }];
                    model.guestsArray = updatedGuestsArray;
                    return updatedGuestsArray;
                });
                setGuest('');
                setTotalGuests(totalGuests + 1);
                setInternals(model.guestsArray.length + 1);
            }
        };
    
        const handleDelete = (index) => {
            const updatedGuestsArray = [...guestsArray];
    
            if (updatedGuestsArray[index].external) {
                updatedGuestsArray[index].external = "";
                setExternals(externals -1);
            } else {
                updatedGuestsArray.splice(index, 1);
                setInternals(internals - 1);
            }
            
            setGuestsArray(updatedGuestsArray);
            model.guestsArray = updatedGuestsArray;
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
                model.guestsArray = updatedGuestsArray;
                setTotalGuests(totalGuests + 1);
                setExternals(externals + 1);
                setExternalInputValue('');
                setShowExternalInput(false);
                setActiveInternalGuestIndex(null); 
            }
        };


        return (
            <LivePub 
                model={model}
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