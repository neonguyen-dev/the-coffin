
export default {
  events: [],

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
  
  /*
  Creates a basic event which contains the parameters that are common to both the admin and guest events 
  */
  createBasicEvent() {
    return {
      id: this.events.length > 0 ? this.events[this.events.length - 1].id + 1 : 1,
      name: null,
      organizer: null,
      date: null,
      startTime: null,
      endTime: null,
      decription: null,
      food: null,
      price: null,
      imgSrc: null,
    }
  },

  /*
  Creates an admin event that adds more functionality to the basic 
  event as well as arrays for members and external guest
  */

  createAdminEvent() {
    const adminEvent = this.createBasicEvent();

    adminEvent.setName = function(name) {
      if (!(typeof name === 'string' || name instanceof String)) {
        throw new Error("Name isn't of type string")
      }
      if (name.length > 100) { // An event name shouldn't be more than 100 characters long
        throw new Error("Name is too long, max length is 100 characters")
      } 
      this.name = name;
    },

    adminEvent.setOrganizer = function(organizer) {
      // TODO set restrictions/error handling
      this.organizer = organizer;
    },

    adminEvent.setDate = function(date) {
      // TODO set restrictions/error handling
      this.date = date;
    },

    adminEvent.setTime = function(startTime, endTime) {
      // TODO set restrictions/error handling
      if (startTime >= endTime) {
        throw new Error("The times for this event aren't declared properly, the end time is before the start time.")
      }
      this.startTime = startTime;
      this.endTime = endTime;
    },

    adminEvent.setDescription = function(description) {
      // TODO set restrictions/error handling
      this.decription = description;
    },

    adminEvent.setFood = function(food, price) {
      // TODO set restrictions/error handling
      this.food = food;
      this.price = price;
    },

    adminEvent.setImgSrc = function(imgSrc) {
      // TODO set restrictions/error handling
      this.imgSrc = imgSrc;
    },

    adminEvent.members = [];
    adminEvent.externals = [];

    adminEvent.addMember = function(name) {
      members.push( // Adds a member object at the end of the array of members
        {
          id: members.length > 0 ? members[members.length - 1].id + 1 : 1,
          name: name
        }
      );
    }

    adminEvent.addExternal = function(memberId, name) {
      members.push( // Adds an external object at the end of the array of externals
        {
          memberId: memberId,
          name: name
        }
      );
    }

    return adminEvent;
  },
  
  createGuestEvent(adminEvent) {
    const guestEvent = {...adminEvent};
    guestEvent.numberOfMembers = members.length;
    guestEvent.numberOfExternals = externals.length;
    guestEvent.members = undefined;
    guestEvent.externals = undefined;

    return guestEvent;
  },
}


