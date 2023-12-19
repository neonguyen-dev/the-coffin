import Image from "next/image";
import Link from "next/link";


function GuestView() {
    return (
        <div className="bg-gray-900 flex flex-col h-screen">
            <div className="m-auto justify-center">
                <h1 className="text-6xl font-bold text-white sm:text-8xl text-center">The Coffin</h1>
                <h2 className="text-4xl text-white sm:text-6xl">Welcome to Kistan 2.0 </h2>
                <div className="py-2 sm:py-5 grid gap-x-10 grid-cols-1 sm:grid-cols-2">
                    <Link href="https://qmisk.com/">
                    <button className="flex items-center justify-center transition rounded-lg bg-red-700 hover:bg-red-800 btn-lg py-4">
                        <Image
                            alt="Qmisk logo"
                            src="/Qmisk-white.png"
                            width="676"
                            height="231"
                            className="w-60"
                        />
                    </button>
                    </Link>
                    <Link href="https://tmeit.se/">
                    <button className="flex items-center justify-center transition rounded-lg bg-blue-700 hover:bg-blue-800 btn-lg py-4">
                        <Image
                        alt="Tmeit logo"
                        src="/Tmeit.svg"
                        width="676"
                        height="231"
                        className="w-36"
                        />    
                    </button>
                    </Link>
                </div>
                <div className="text-center">
                    <Link href="upcoming">
                    <button className="transition rounded-lg font-bold bg-gray-700 hover:bg-gray-800 text-white btn-lg px-10 py-4">Upcoming</button>
                    </Link>
                </div>
            </div>
            <footer>
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 Neo Nguyen, Rasmus Sjöberg, Peter Patranika, Roy Dolonius. All Rights Reserved.
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                        <li>
                            <Link href="about" className="hover:underline me-4 md:me-6">About</Link>
                        </li>
                        <li>
                            <Link href="login" className="hover:underline">Login</Link>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}

export default GuestView;