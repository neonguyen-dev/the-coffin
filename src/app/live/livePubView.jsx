export default function LivePub(props){
    return(
        <div className="bg-gray-800 min-h-screen p-10">
            <h1 className="font-bold text-center text-5xl">Guest List</h1>
            <p className="font-bold text-3xl">Total Guests: {props.totalGuests}</p>
            <p className="font-bold text-3xl">Total Internal Guests: {props.internals}</p>
            <p className="font-bold text-3xl">Total External Guests: {props.externals}</p>
            <form onSubmit={props.inputSubmit}>
                <input 
                type = "text" 
                value={props.guest} 
                onChange={props.inputChange} 
                placeholder="Add new guest here">
                </input> 
                <button className = "simpleButton">Add Internal</button>    
            </form>
            {props.showExternalInput && (
            <form className="flex items-center justify-left m-2">
                <input onChange={props.handleExternalInputChange} value={props.externalInputValue} placeholder="Add +1" className="px-4 py-2 text-black h- m-2 rounded-full justify-center"/>
                <button onClick={props.handleExternalInputSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 w-auto m-2 rounded">Add +1</button>
            </form>)}
            <ul className='list-none text-center'>
                {props.model.guestsArray.map((guest, index) => (
                    <li key={index} className='bg-gray-950 flex font-bold justify-left border'>
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold px-4 py-2 m-2 rounded w-6 flex justify-center" onClick={() => props.handleDelete(index)}>x</button>
                        <button onClick={() => props.renderExternalInput(index)} className={`bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 m-2 rounded w-6 flex justify-center ${guest.external ? 'cursor-not-allowed opacity-50' : ''}`} disabled={guest.external !==""}>+1</button>
                        <p className='flex items-center justify-left m-2'>{guest.internal}</p>
                        {guest.external && (
                        <div className="flex items-center justify-center mx-auto">
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold px-4 py-2 m-2 rounded" onClick={() => props.handleDelete(index)}>x</button>
                            <div>+1: </div>
                            <div className="m-2">{guest.external}</div>
                        </div>
                        )}
                    </li>
                ))}
            </ul>

            {console.log(props.guestsArray)}
        </div>
    );
}