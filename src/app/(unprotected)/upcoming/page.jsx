// Local imports from project
import model from "@/app/EventsModel.js"
import readFromFirebase from "@/firebase/firebaseModel.js";
import Upcoming from "./upcomingPresenter.jsx"

export default function Home() {
  return (
    <Upcoming/>
  );
}
