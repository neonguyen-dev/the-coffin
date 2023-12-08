function compareEventsCB(event1, event2) {
  if (event1.startTime < event2.startTime) {
    return -1;
  }
  if (event1.startTime > event2.startTime) {
    return 1;
  }
  if (event1.endTime < event2.endTime) {
    return -1;
  }
  if (event1.endTime > event2.endTime) {
    return 1;
  }
  return 0;
}

/*
Returns a sorted array of events. The events are sorted after their date
*/
export function sortEvents(events) {
  return [...events].sort(compareEventCB);
}

function compareMembersCB(member1, member2) {
  if (member1.name < member2.name) {
    return -1;
  }
  if (member1.name > member2.name) {
    return 1;
  }
  return 0;
}

/*
Returns an array of the members sorted after their names
*/
export function sortGuests(members) {
  return [...members].sort(compareMembersCB);
}

/*
Returns an array of events that occur between the two specified 
dates, other events are filtered out
*/
export function filterEventsOnDate(startDate, endDate, events) {
  function compareEventsToDateCB(event) {
    return startDate <= event.startTime && event.startTime <= endDate;
  }

  return [...events].filter(compareEventsToDateCB);
}

