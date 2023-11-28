function GuestView() {
    return (
        <div className="flex flex-col h-screen">
            <div className="m-auto">
                <h1 className="text-6xl font-bold text-white sm:text-8xl text-center">The Coffin</h1>
                <h2 className="text-4xl text-white sm:text-6xl">Welcome to Kistan 2.0 </h2>
                <div className="py-5 grid gap-y-5 gap-x-10 grid-cols-1 sm:grid-cols-2">
                    <button className="transition rounded-lg font-bold bg-red-700 hover:bg-red-800 text-white btn-lg py-4">QMISK</button>
                    <button className="transition rounded-lg font-bold bg-blue-700 hover:bg-blue-800 text-white btn-lg py-4">TMEIT</button>
                </div>
                <div className="text-center">
                    <button className="transition rounded-lg font-bold bg-gray-700 hover:bg-gray-800 text-white btn-lg px-10 py-4" onClick={() => window.location.href="upcoming"}>Upcoming</button>
                </div>
            </div>
            <footer>
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 Neo Nguyen, Rasmus Sjöberg, Peter Patranika, Roy Dolonius. All Rights Reserved.
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                        <li>
                            <a href="about" className="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="login" className="hover:underline">Log in</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}

export default GuestView;