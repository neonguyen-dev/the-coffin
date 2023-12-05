
function compareEventsCB(event1, event2) {
  if (event1.date < event2.date) {
    return -1;
  }
  if (event1.date > event2.date) {
    return 1;
  }
  // If the events are on the same date, their start time is compared
  if (event1.startTime < event2.startTime) {
    return -1;
  }
  if (event1.startTime > event2.startTime) {
    return 1;
  }
  // If they start at the same time, their end time is compared
  if (event1.endTime < event2.endTime) {
    return -1;
  }
  if (event1.endTime > event2.endTime) {
    return 1;
  }
  // If they start and end on the same time
  return 0;
}

/*
Returns a sorted array of events. The events are sorted after their date
*/
function sortEvents(events) {
  return [...events].sort(compareEventCB);
}


/*
Returns an array of events that occur between the two specified 
dates, other events are filtered out
*/
function filterEventsOnDateCB(startDate, endDate, events) {
  function compareEventsToDateCB(event) {
    return startDate <= event.date && event.date <= endDate;
  }

  return [...events].filter(compareEventsToDateCB);
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
function sortMembers(members) {
  return [...members].sort(compareMembersCB);
}



