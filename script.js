var timeDisplayEl = $('#time-display');
var saveButton = $('fas fa-save')

// display the current date and time
function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}

displayTime();
setInterval(displayTime, 1000);

// Attach event listener to save button element
saveButton.addEventListener("click", function () {
  // Saves an array of evets in localStorage.
  function saveEventsToStorage(events) {
    localStorage.setItem('events', JSON.stringify(events));
  }
  // Get event data from local storage and display it
  function printEventtData() {
    // clear current projects on the page
    eventDisplayEl.empty();

    // get projects from localStorage
    var events = readEventsFromStorage();

    // append elements to DOM to display them
    rowEl.append(nameEL, typeEl, dateEl, deleteEl);
    projectDisplayEl.append(rowEl);
  }

  function readEventsFromStorage() {
    var events = localStorage.getItem('events');
    if (events) {
      events = JSON.parse(events);
    } else {
      events = [];
    }
    return events;
  }
  // print events
  printEventData();

  // add project to local storage
  var events = readEventsFromStorage();
  events.push(newEvent);
  saveEventsToStorage(events);

  // print project data
  printEventData();
});
