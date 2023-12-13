import Upcoming from "./upcomingPresenter.jsx"

import model from "../EventsModel.js"
import readFromFirebase from "../../firebase/firebaseModel.js";

export default function Home() {
  return (
    <Upcoming/>
  );
}
