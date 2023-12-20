
export default {
  events: [],
  guestsArray: [],

  /*
  Adds a given event to the array of events
  */
  addEvent(event) {
    this.events.push(event);
  },

  /*
  Takes an event as argument and removes if from the 
  event array if that event exists in the array
  */
  removeEvent(eventToRemove) {
    this.removeEventByID(eventToRemove.id);
  },

  /*
  Takes the id of an event as argument and removes it from the 
  event array if an event with the specified id exists
  */
  removeEventByID(id) {
    function shouldEventBeKeptCB(event) {
      return event.id !== id;
    }
    this.events = this.events.filter(shouldEventBeKeptCB);
  },
}
