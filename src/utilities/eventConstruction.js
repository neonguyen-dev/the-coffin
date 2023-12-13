/*
Creates a basic event which contains the parameters that are common to both the admin and guest events 
*/
function createBasicEvent() {
  return {
    id: this.events.length > 0 ? this.events[this.events.length - 1].id + 1 : 1,
    name: null,
    organizer: null,
    startTime: null,
    endTime: null,
    decription: null,
    food: null,
    price: null,
    imgSrc: null,
  };
}

function isDateType(arg) {
  return arg instanceof Date || Object.prototype.toString.call(arg) === '[object Date]';
}

function isString(arg) {
  return typeof arg === 'string' || arg instanceof String;
}

/*
Creates an admin event that adds more functionality to the basic 
event as well as arrays for members and external guest
*/
export function createAdminEvent() {
  const adminEvent = this.createBasicEvent();

  adminEvent.setName = function(name) {
    if (!isString(name)) {
      throw new Error("Name isn't of type string.")
    }
    if (name.length > 100) { // An event name shouldn't be more than 100 characters long
      throw new Error("Name is too long, maximum length is 100 characters.")
    } 
    this.name = name;
  }

  adminEvent.setOrganizer = function(organizer) {
    // TODO set restrictions/error handling
    this.organizer = organizer;
  }

  adminEvent.setTime = function(startTime, endTime) {
    // Restrictions/error handling
    if (!isDateType(startTime)) {
      throw new Error("The start time isn't of the date type.")
    }
    if (!isDateType(endTime)) {
      throw new Error("The end time isn't of the date type.")
    }
    if (startTime >= endTime) {
      throw new Error("The times for this event aren't declared properly, the end time is before the start time.")
    }

    this.startTime = startTime;
    this.endTime = endTime;
  }

  adminEvent.setDescription = function(description) {
    if (!isString(description)) {
      throw new Error("Description isn't of type string.")
    }
    if (description.length > 2000) {
      throw new Error("Description is too long, maximum length is 2000 characters.")
    } 

    this.decription = description;
  }

  adminEvent.setFood = function(food, price) {
    if (!isString(description)) {
      throw new Error("Food isn't of type string.")
    }
    if (food.length > 200) {
      throw new Error("Food name is too long, maximum length is 100 characters.")
    } 
    if (!(Number.isInteger(price) || (isString(price) && !isNaN(parseInt(price, 10))))) {
      throw new Error("Price isn't of type integer or can't be converted to an integer.")
    }
    if (Number.isInteger(price)) {
      if (price > 9999) {
        throw new Error("Price is too large, maximum price is 9999 SEK.")
      }
    }
    else if (isString(price) && price.length > 4) {
      throw new Error("Price is too large, maximum price is 9999 SEK.")
    }

    this.food = food;
    this.price = price;
  }

  adminEvent.setImgSrc = function(imgSrc) {
    if (!isString(imgSrc)) {
      throw new Error("Image source isn't of string type.")
    }
    this.imgSrc = imgSrc;
  }

  adminEvent.members = [];
  adminEvent.externals = [];

  adminEvent.addMember = function(name) {
    members.push({ // Adds a member object at the end of the array of members
        id: members.length > 0 ? members[members.length - 1].id + 1 : 1,
        name: name
    });
  }

  adminEvent.addExternal = function(memberId, name) {
    members.push({ // Adds an external object at the end of the array of externals
        memberId: memberId,
        name: name
    });
  }

  adminEvent.getGuestEvent = function() {
    return {
      id: this.id,
      name: this.name,
      organizer: this.organizer,
      startTime: this.startTime,
      endTime: this.endTime,
      decription: this.decription,
      food: this.food,
      price: this.price,
      imgSrc: this.imgSrc,
      numberOfMembers: this.members.length,
      numberOfExternals: this.externals.length
    };
  }

  return adminEvent;
}
