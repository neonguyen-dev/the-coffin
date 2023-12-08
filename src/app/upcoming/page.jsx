import Calendar from "../presenters/calendarViewPresenter.jsx"
import Upcoming from "../presenters/upcomingViewPresenter.jsx"

import model from "../EventsModel.js"
import readFromFirebase from "../firebaseModel.js";

export default function Home() {
  return (
    <Upcoming/>
  );
}
