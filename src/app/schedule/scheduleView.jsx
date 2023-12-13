import Link from 'next/link';


export default function AdminSchedule(props) {
    return (

        <div className="bg-gray-800 min-h-screen">
            <h1 className="header">Schedule</h1>
            <div className="dropdown">
                <button className="dropbtn">What Mastery?</button>
                <div className="dropdown-content">
                    <a href="#">All</a>
                    <a href="#">Qmisk</a>
                    <a href="#">TMEIT</a>
                </div>
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
        return (
            <Link href={"/pub/" + event.id}>
                <div className="card w-80 bg-gray-600 shadow-xl rounded-lg hover:scale-105 transition">
                    <figure><img className="h-48 rounded-t-lg object-cover" src={event.imgSrc} alt="Event Image" /></figure>
                    <div className="card-body h-48 px-4 py-4">
                        <h1 className="text-xl font-bold card-title">{event.name}</h1>
                        <p className="py-4">{event.description}</p>
                        <p>{/*event.date.getDate() + " " + event.date.toLocaleString('en-us', { month: 'long' }) + " " + event.startTime.getHours() + ":" + (event.startTime.getMinutes() < 10 ? '0' : '') + event.startTime.getMinutes()*/}</p>
                        <p>{"Food: " + event.food}</p>
                        <p>{"Price: " + event.price + " kr"}</p>
                    </div>
                </div>
            </Link>
        );
    }
}