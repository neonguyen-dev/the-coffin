export default function DetailedPubView(props) {
    const date = new Date(props.event.date);
    console.log(date);
    return (
        <div
        class="pb-5 sm:py-5 sm:px-10 text-card-foreground mx-auto bg-gray-800 shadow-md">
        <div class="flex flex-col space-y-1.5 p-6">
            <div class="flex justify-between items-center">
                <h3 class="tracking-tight text-2xl md:text-3xl font-bold">{props.event.name}</h3>
            </div>
            <div class="flex items-center space-x-2 mt-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="w-4 h-4 text-gray-500"
                >
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                    <line x1="16" x2="16" y1="2" y2="6"></line>
                    <line x1="8" x2="8" y1="2" y2="6"></line>
                    <line x1="3" x2="21" y1="10" y2="10"></line>
                </svg>
                <p class="text-sm md:text-base">{date.getDate() + " " + date.toLocaleString('en-us', { month: 'long' }) + " " + date.getFullYear()}</p>
            </div>
            <div class="flex items-center space-x-2 mt-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="w-4 h-4 text-gray-500"
                >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <p class="text-sm md:text-base">17:00 - SENT</p>
            </div>
            <div class="flex items-center space-x-2 mt-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="w-4 h-4 text-gray-500"
                >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <p class="text-sm md:text-base">Kistan 2.0</p>
            </div>
            <div class="flex items-center space-x-2 mt-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="w-4 h-4 text-gray-500"
                >
                    <path d="M21 15c0-4.625-3.507-8.441-8-8.941V4h-2v2.059c-4.493.5-8 4.316-8 8.941v2h18v-2zM5 15c0-3.859 3.141-7 7-7s7 3.141 7 7H5zm-3 3h20v2H2z"></path>
                    
                </svg>
                <p class="text-sm md:text-base">{props.event.food}</p>
            </div>
            <div class="flex items-center space-x-2 mt-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="w-4 h-4 text-gray-500"
                >
                <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM4 6h16v2H4V6zm0 12v-6h16.001l.001 6H4z"></path>
                <path d="M6 14h6v2H6z"></path>                        
                </svg>
                <p class="text-sm md:text-base">{props.event.price + " kr"}</p>
            </div>
        </div>
        <div class="px-6 text-sm">
            <div class="mb-4">
                <img
                    src={props.event.imgSrc}
                    alt="Event Image"
                    class="w-full h-auto rounded-md"
                    width="700"
                    height="100"
                />
            </div>
            <h1 className="font-bold mb-4 text-xl">Description</h1>
            {props.event.description}
        </div>
        <button class="simpleButton">Delete Pub</button>
    </div>
    );
}