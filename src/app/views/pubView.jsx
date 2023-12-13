export default function PubView() {
    return (
        <div
            class="border text-card-foreground mx-auto bg-white shadow-md min-h-screen"
        >
            <div class="flex flex-col space-y-1.5 p-6">
                <div class="flex justify-between items-center">
                    <h3 class="tracking-tight text-2xl md:text-3xl font-bold text-black">Annual Tech Conference</h3>
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
                    <p class="text-sm md:text-base text-gray-500">December 24, 2023</p>
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
                    <p class="text-sm md:text-base text-gray-500">10:00 AM - 5:00 PM</p>
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
                    <p class="text-sm md:text-base text-gray-500">Kistan 2.0</p>
                </div>
            </div>
            <div class="p-6 mt-4 text-sm md:text-base text-black">
                <div class="mb-4">
                    <img
                        src="/placeholder.svg"
                        alt="Event Image"
                        class="w-full h-auto rounded-md"
                        width="400"
                        height="200"
                    />
                </div>
                Join us at our Annual Tech Conference where industry leaders, innovators, and startups from around the globe
                come together to explore the future of technology. This will be an opportunity to network, learn, and get
                inspired.
            </div>
            <div class="mt-6 flex justify-end">
            </div>
        </div>
    );
}