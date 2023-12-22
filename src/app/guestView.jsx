// Third party library imports
import Image from "next/image";
import Link from "next/link";

// Local imports from project
import { Footer } from "@/componentViews/footer";

export default function GuestView(props) {
  return (
    <div className="bg-gray-900 flex flex-col min-h-screen">
      <div className="m-auto justify-center p-10">
        <h1 className="text-6xl font-bold text-white sm:text-8xl text-center">The Coffin</h1>
        <h2 className="text-4xl text-white sm:text-6xl text-center">Welcome to Kistan 2.0 </h2>
        <div className="py-2 sm:py-5 grid gap-x-10 grid-cols-1 sm:grid-cols-2">
          <Link href={"/pub/" + props.events.find((event) => event.organizer === "Qmisk")?.id || "/"}>
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
          <Link href={"/pub/" + props.events.find((event) => event.organizer === "TMEIT")?.id || "/"}>
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
      {/* Footer component view */}
      <Footer user={props.user} logout={() => props.logout()}/>
    </div>
  );
}
