import Link from 'next/link';

export default function UpcomingView(props) {
    return (
        <div className="bg-gray-800 min-h-screen">
            <div className="py-8">
                <header className="text-6xl font-bold text-white sm:text-6xl text-center">Upcoming pubs</header>
            </div>
            <div className="flex flex-wrap py-5 px-8 sm:px-20 gap-5 justify-center sm:justify-start">
                {[...props.model.events].sort(
                    function (a, b) {
                        return new Date(a.date) - new Date(b.date);
                    }).map(renderEventsCB)}
            </div>
        </div>
    );

    function renderEventsCB(event) {
        const date = new Date(event.date);

        return (
            <Link href={"/pub/" + event.id}>
                <div className="card w-80 bg-gray-600 shadow-xl rounded-lg hover:scale-105 transition">
                    <figure><img className="h-48 rounded-t-lg object-cover" src={event.imgSrc} alt="Event Image" /></figure>
                    <div className="card-body h-48 px-4 py-4">
                        <h1 className="text-xl font-bold card-title">{event.name}</h1>
                        <p>{date.getDate() + " " + date.toLocaleString('en-us', { month: 'long' }) + " " + date.getFullYear()}</p>
                        <p className="py-4">{event.organizer}</p>
                        <p>{"Food: " + event.food}</p>
                        <p>{"Price: " + event.price + " kr"}</p>
                    </div>
                </div>
            </Link>
        );
    }
}


