export default function UpcomingView(props) {
    return (
        <div className="flex flex-wrap py-5 px-8 sm:px-20 gap-5">
            {[...props.events].sort(
                function (a, b) {
                    return new Date(a.date) - new Date(b.date);
                }).map(renderEventsCB)}
        </div>
    );

    function renderEventsCB(event) {
        return (
            <a href="#">
                <div className="card w-80 bg-gray-500 shadow-xl rounded-lg hover:scale-105 transition">
                    <figure><img className="h-48 rounded-t-lg object-cover" src={event.imgSrc} alt="Event Image" /></figure>
                    <div className="card-body h-48 px-2 py-2">
                        <h1 className="font-bold card-title">{event.name}</h1>
                        <p>{event.description}</p>
                        {console.log(event.date)}
                        <p>{event.date.getDate() + " " + event.date.toLocaleString('en-us', { month: 'long' }) + " " + event.startTime.getHours() + ":" + (event.startTime.getMinutes() < 10 ? '0' : '') + event.startTime.getMinutes()}</p>
                        <p>{"Food: " + event.food}</p>
                        <p>{"Price: " + event.price + " kr"}</p>
                    </div>
                </div>
            </a>
        );
    }
}


