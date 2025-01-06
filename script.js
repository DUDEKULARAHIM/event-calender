// const monthYear = document.getElementById('monthYear');
// const calendarBody = document.getElementById('calendarBody');
// const prevMonth = document.getElementById('prevMonth');
// const nextMonth = document.getElementById('nextMonth');
// const yearInput = document.getElementById('yearInput');
// const monthInput = document.getElementById('monthInput');
// const goToDate = document.getElementById('goToDate');
// const goToCurrent = document.getElementById('goToCurrent');
// const showCustomDate = document.getElementById('showCustomDate');
// const customDateInput = document.getElementById('customDateInput');

// let today = new Date();
// let currentMonth = today.getMonth();
// let currentYear = today.getFullYear();

// const months = [
//     'January', 'February', 'March', 'April', 'May', 'June', 
//     'July', 'August', 'September', 'October', 'November', 'December'
// ];

// function generateCalendar(month, year) {
//     calendarBody.innerHTML = '';
    
//     const firstDay = new Date(year, month).getDay();
//     const daysInMonth = 32 - new Date(year, month, 32).getDate();
    
//     monthYear.textContent = `${months[month]} ${year}`;
    
//     let date = 1;
    
//     for (let i = 0; i < 6; i++) {
//         let row = document.createElement('tr');
        
//         for (let j = 0; j < 7; j++) {
//             if (i === 0 && j < firstDay) {
//                 let cell = document.createElement('td');
//                 cell.classList.add('empty');
//                 row.appendChild(cell);
//             } else if (date > daysInMonth) {
//                 break;
//             } else {
//                 let cell = document.createElement('td');
//                 let cellText = document.createTextNode(date);
                
//                 cell.appendChild(cellText);
//                 row.appendChild(cell);
                
//                 if (date === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
//                     cell.style.backgroundColor = '#007bff';
//                     cell.style.color = '#fff';
//                 }
                
//                 date++;
//             }
//         }
        
//         calendarBody.appendChild(row);
//     }
// }

// prevMonth.addEventListener('click', () => {
//     currentMonth--;
//     if (currentMonth < 0) {
//         currentMonth = 11;
//         currentYear--;
//     }
//     generateCalendar(currentMonth, currentYear);
// });

// nextMonth.addEventListener('click', () => {
//     currentMonth++;
//     if (currentMonth > 11) {
//         currentMonth = 0;
//         currentYear++;
//     }
//     generateCalendar(currentMonth, currentYear);
// });

// // Handle showing the custom date input
// showCustomDate.addEventListener('click', () => {
//     customDateInput.style.display = 'flex';
// });

// // Handle custom date input
// goToDate.addEventListener('click', () => {
//     const enteredYear = parseInt(yearInput.value);
//     const enteredMonth = parseInt(monthInput.value) - 1; // JS months are 0-based

//     if (!isNaN(enteredYear) && enteredMonth >= 0 && enteredMonth <= 11) {
//         currentYear = enteredYear;
//         currentMonth = enteredMonth;
//         generateCalendar(currentMonth, currentYear);
//         customDateInput.style.display = 'none'; // Hide the input after selecting the date
//     } else {
//         alert("Please enter a valid year and month (1-12).");
//     }
// });

// // Handle returning to the current month and year
// goToCurrent.addEventListener('click', () => {
//     currentYear = today.getFullYear();
//     currentMonth = today.getMonth();
//     generateCalendar(currentMonth, currentYear);
// });

// // Generate initial calendar for current month/year
// generateCalendar(currentMonth, currentYear);














// const monthYear = document.getElementById('monthYear');
// const calendarBody = document.getElementById('calendarBody');
// const prevMonth = document.getElementById('prevMonth');
// const nextMonth = document.getElementById('nextMonth');
// const yearInput = document.getElementById('yearInput');
// const monthInput = document.getElementById('monthInput');
// const goToDate = document.getElementById('goToDate');
// const goToCurrent = document.getElementById('goToCurrent');
// const showCustomDate = document.getElementById('showCustomDate');
// const customDateInput = document.getElementById('customDateInput');

// let today = new Date();
// let currentMonth = today.getMonth();
// let currentYear = today.getFullYear();

// const months = [
//     'January', 'February', 'March', 'April', 'May', 'June', 
//     'July', 'August', 'September', 'October', 'November', 'December'
// ];

// function generateCalendar(month, year) {
//     calendarBody.innerHTML = '';
    
//     const firstDay = new Date(year, month).getDay();
//     const daysInMonth = 32 - new Date(year, month, 32).getDate();
    
//     monthYear.textContent = `${months[month]} ${year}`;
    
//     let date = 1;
    
//     for (let i = 0; i < 6; i++) {
//         let row = document.createElement('tr');
        
//         for (let j = 0; j < 7; j++) {
//             if (i === 0 && j < firstDay) {
//                 let cell = document.createElement('td');
//                 cell.classList.add('empty');
//                 row.appendChild(cell);
//             } else if (date > daysInMonth) {
//                 break;
//             } else {
//                 let cell = document.createElement('td');
//                 let cellText = document.createTextNode(date);
                
//                 cell.appendChild(cellText);
//                 row.appendChild(cell);
                
//                 if (date === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
//                     cell.style.backgroundColor = '#007bff';
//                     cell.style.color = '#fff';
//                 }
                
//                 date++;
//             }
//         }
        
//         calendarBody.appendChild(row);
//     }
// }

// prevMonth.addEventListener('click', () => {
//     currentMonth--;
//     if (currentMonth < 0) {
//         currentMonth = 11;
//         currentYear--;
//     }
//     generateCalendar(currentMonth, currentYear);
// });

// nextMonth.addEventListener('click', () => {
//     currentMonth++;
//     if (currentMonth > 11) {
//         currentMonth = 0;
//         currentYear++;
//     }
//     generateCalendar(currentMonth, currentYear);
// });

// // Handle showing or hiding the custom date input
// showCustomDate.addEventListener('click', () => {
//     if (customDateInput.style.display === 'flex') {
//         customDateInput.style.display = 'none';
//     } else {
//         customDateInput.style.display = 'flex';
//     }
// });

// // Handle custom date input
// goToDate.addEventListener('click', () => {
//     const enteredYear = parseInt(yearInput.value);
//     const enteredMonth = parseInt(monthInput.value) - 1; // JS months are 0-based

//     if (!isNaN(enteredYear) && enteredMonth >= 0 && enteredMonth <= 11) {
//         currentYear = enteredYear;
//         currentMonth = enteredMonth;
//         generateCalendar(currentMonth, currentYear);
//         customDateInput.style.display = 'none'; // Hide the input after selecting the date
//     } else {
//         alert("Please enter a valid year and month (1-12).");
//     }
// });

// // Handle returning to the current month and year
// goToCurrent.addEventListener('click', () => {
//     currentYear = today.getFullYear();
//     currentMonth = today.getMonth();
//     generateCalendar(currentMonth, currentYear);
// });

// // Generate initial calendar for current month/year
// generateCalendar(currentMonth, currentYear);











// const monthYear = document.getElementById('monthYear');
// const calendarBody = document.getElementById('calendarBody');
// const prevMonth = document.getElementById('prevMonth');
// const nextMonth = document.getElementById('nextMonth');
// const yearInput = document.getElementById('yearInput');
// const monthInput = document.getElementById('monthInput');
// const goToDate = document.getElementById('goToDate');
// const goToCurrent = document.getElementById('goToCurrent');
// const showCustomDate = document.getElementById('showCustomDate');
// const customDateInput = document.getElementById('customDateInput');
// const addEventButton = document.getElementById('addEventButton');
// const eventForm = document.getElementById('eventForm');
// const eventTitleInput = document.getElementById('eventTitle');
// const eventDescInput = document.getElementById('eventDesc');
// const eventsList = document.getElementById('eventsList');

// let today = new Date();
// let currentMonth = today.getMonth();
// let currentYear = today.getFullYear();
// let selectedDate = null;

// // Store events in an object
// let events = {};

// const months = [
//     'January', 'February', 'March', 'April', 'May', 'June', 
//     'July', 'August', 'September', 'October', 'November', 'December'
// ];

// function generateCalendar(month, year) {
//     calendarBody.innerHTML = '';
//     eventsList.innerHTML = '';

//     const firstDay = new Date(year, month).getDay();
//     const daysInMonth = 32 - new Date(year, month, 32).getDate();

//     monthYear.textContent = `${months[month]} ${year}`;

//     let date = 1;

//     for (let i = 0; i < 6; i++) {
//         let row = document.createElement('tr');

//         for (let j = 0; j < 7; j++) {
//             if (i === 0 && j < firstDay) {
//                 let cell = document.createElement('td');
//                 cell.classList.add('empty');
//                 row.appendChild(cell);
//             } else if (date > daysInMonth) {
//                 break;
//             } else {
//                 let cell = document.createElement('td');
//                 let cellText = document.createTextNode(date);
//                 cell.appendChild(cellText);
//                 cell.dataset.date = `${year}-${month + 1}-${date}`;

//                 // Highlight today's date
//                 if (date === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
//                     cell.style.backgroundColor = '#007bff';
//                     cell.style.color = '#fff';
//                 }

//                 // Add red dot for dates with events
//                 const eventDate = `${year}-${month + 1}-${date}`;
//                 if (events[eventDate]) {
//                     const dot = document.createElement('div');
//                     dot.style.width = '5px';
//                     dot.style.height = '5px';
//                     dot.style.backgroundColor = 'red';
//                     dot.style.borderRadius = '50%';
//                     dot.style.margin = '0 auto';
//                     cell.appendChild(dot);
//                 }

//                 // Click handler for adding events
//                 cell.addEventListener('click', () => {
//                     selectedDate = eventDate;
//                     addEventButton.style.display = 'block';
//                 });

//                 row.appendChild(cell);
//                 date++;
//             }
//         }

//         calendarBody.appendChild(row);
//     }

//     // Show events for the current date
//     const todayEvents = events[`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`];
//     if (todayEvents) {
//         todayEvents.forEach((event) => {
//             const li = document.createElement('li');
//             li.textContent = `${event.title}: ${event.description}`;
//             eventsList.appendChild(li);
//         });
//     }
// }

// prevMonth.addEventListener('click', () => {
//     currentMonth--;
//     if (currentMonth < 0) {
//         currentMonth = 11;
//         currentYear--;
//     }
//     generateCalendar(currentMonth, currentYear);
// });

// nextMonth.addEventListener('click', () => {
//     currentMonth++;
//     if (currentMonth > 11) {
//         currentMonth = 0;
//         currentYear++;
//     }
//     generateCalendar(currentMonth, currentYear);
// });

// showCustomDate.addEventListener('click', () => {
//     customDateInput.style.display = customDateInput.style.display === 'flex' ? 'none' : 'flex';
// });

// goToDate.addEventListener('click', () => {
//     const enteredYear = parseInt(yearInput.value);
//     const enteredMonth = parseInt(monthInput.value) - 1;

//     if (!isNaN(enteredYear) && enteredMonth >= 0 && enteredMonth <= 11) {
//         currentYear = enteredYear;
//         currentMonth = enteredMonth;
//         generateCalendar(currentMonth, currentYear);
//         customDateInput.style.display = 'none';
//     } else {
//         alert("Please enter a valid year and month (1-12).");
//     }
// });

// goToCurrent.addEventListener('click', () => {
//     currentYear = today.getFullYear();
//     currentMonth = today.getMonth();
//     generateCalendar(currentMonth, currentYear);
// });

// addEventButton.addEventListener('click', () => {
//     eventForm.style.display = 'block';
// });

// eventForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const title = eventTitleInput.value;
//     const description = eventDescInput.value;

//     if (!events[selectedDate]) {
//         events[selectedDate] = [];
//     }

//     events[selectedDate].push({ title, description });

//     eventForm.style.display = 'none';
//     addEventButton.style.display = 'none';

//     eventTitleInput.value = '';
//     eventDescInput.value = '';

//     generateCalendar(currentMonth, currentYear);
// });

// // Generate initial calendar
// generateCalendar(currentMonth, currentYear);












// const monthYear = document.getElementById("monthYear");
// const calendarBody = document.getElementById("calendarBody");
// const prevMonth = document.getElementById("prevMonth");
// const nextMonth = document.getElementById("nextMonth");
// const yearInput = document.getElementById("yearInput");
// const monthInput = document.getElementById("monthInput");
// const goToDate = document.getElementById("goToDate");
// const goToCurrent = document.getElementById("goToCurrent");
// const showCustomDate = document.getElementById("showCustomDate");
// const customDateInput = document.getElementById("customDateInput");
// const addEventButton = document.getElementById("addEventButton");
// const eventForm = document.getElementById("eventForm");
// const eventsList = document.getElementById("eventsList");
// const eventTitle = document.getElementById("eventTitle");
// const eventDesc = document.getElementById("eventDesc");

// let today = new Date();
// let currentMonth = today.getMonth();
// let currentYear = today.getFullYear();
// let selectedDate = null;

// const months = [
//   "January", "February", "March", "April", "May", "June", 
//   "July", "August", "September", "October", "November", "December"
// ];

// let events = JSON.parse(localStorage.getItem("calendarEvents")) || {};

// function saveEvents() {
//   localStorage.setItem("calendarEvents", JSON.stringify(events));
// }

// function generateCalendar(month, year) {
//   calendarBody.innerHTML = "";
//   const firstDay = new Date(year, month).getDay();
//   const daysInMonth = 32 - new Date(year, month, 32).getDate();

//   monthYear.textContent = `${months[month]} ${year}`;
//   let date = 1;

//   for (let i = 0; i < 6; i++) {
//     let row = document.createElement("tr");
//     for (let j = 0; j < 7; j++) {
//       let cell = document.createElement("td");
//       if (i === 0 && j < firstDay || date > daysInMonth) {
//         cell.classList.add("empty");
//       } else {
//         cell.textContent = date;
//         const cellDate = `${year}-${month + 1}-${date}`;
//         if (events[cellDate]) {
//           const indicator = document.createElement("span");
//           indicator.classList.add("event-indicator");
//           cell.appendChild(indicator);
//         }
//         cell.addEventListener("click", () => handleDateClick(cellDate));
//         date++;
//       }
//       row.appendChild(cell);
//     }
//     calendarBody.appendChild(row);
//   }

//   showTodayEvents();
// }

// function handleDateClick(date) {
//   selectedDate = date;
//   addEventButton.style.display = "block";
// }

// function showTodayEvents() {
//   const todayKey = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
//   eventsList.innerHTML = "";
//   if (events[todayKey]) {
//     events[todayKey].forEach(event => {
//       const li = document.createElement("li");
//       li.textContent = `${event.title}: ${event.description}`;
//       eventsList.appendChild(li);
//     });
//   }
// }

// addEventButton.addEventListener("click", () => {
//   eventForm.style.display = "block";
// });

// eventForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const title = eventTitle.value;
//   const description = eventDesc.value;
//   if (!events[selectedDate]) {
//     events[selectedDate] = [];
//   }
//   events[selectedDate].push({ title, description });
//   saveEvents();
//   generateCalendar(currentMonth, currentYear);
//   eventForm.style.display = "none";
//   addEventButton.style.display = "none";
//   eventTitle.value = "";
//   eventDesc.value = "";
// });

// prevMonth.addEventListener("click", () => {
//   currentMonth--;
//   if (currentMonth < 0) {
//     currentMonth = 11;
//     currentYear--;
//   }
//   generateCalendar(currentMonth, currentYear);
// });

// nextMonth.addEventListener("click", () => {
//   currentMonth++;
//   if (currentMonth > 11) {
//     currentMonth = 0;
//     currentYear++;
//   }
//   generateCalendar(currentMonth, currentYear);
// });

// showCustomDate.addEventListener("click", () => {
//   customDateInput.style.display = customDateInput.style.display === "flex" ? "none" : "flex";
// });

// goToDate.addEventListener("click", () => {
//   const enteredYear = parseInt(yearInput.value);
//   const enteredMonth = parseInt(monthInput.value) - 1;
//   if (!isNaN(enteredYear) && enteredMonth >= 0 && enteredMonth <= 11) {
//     currentYear = enteredYear;
//     currentMonth = enteredMonth;
//     generateCalendar(currentMonth, currentYear);
//     customDateInput.style.display = "none";
//   } else {
//     alert("Please enter a valid year and month (1-12).");
//   }
// });

// goToCurrent.addEventListener("click", () => {
//   currentYear = today.getFullYear();
//   currentMonth = today.getMonth();
//   generateCalendar(currentMonth, currentYear);
// });

// generateCalendar(currentMonth, currentYear);










// const monthYear = document.getElementById('monthYear');
// const calendarBody = document.getElementById('calendarBody');
// const prevMonth = document.getElementById('prevMonth');
// const nextMonth = document.getElementById('nextMonth');
// const yearInput = document.getElementById('yearInput');
// const monthInput = document.getElementById('monthInput');
// const goToDate = document.getElementById('goToDate');
// const goToCurrent = document.getElementById('goToCurrent');
// const showCustomDate = document.getElementById('showCustomDate');
// const customDateInput = document.getElementById('customDateInput');
// const addEventButton = document.getElementById('addEventButton');
// const eventForm = document.getElementById('eventForm');
// const selectedDateEvents = document.getElementById('selectedDateEvents');
// const allEventsList = document.getElementById('allEventsList');
// const eventTitle = document.getElementById('eventTitle');
// const eventDesc = document.getElementById('eventDesc');

// let today = new Date();
// let currentMonth = today.getMonth();
// let currentYear = today.getFullYear();
// let selectedDate = null;

// // Load events from localStorage or initialize an empty object
// let events = JSON.parse(localStorage.getItem('events')) || {};

// const months = [
//     'January', 'February', 'March', 'April', 'May', 'June',
//     'July', 'August', 'September', 'October', 'November', 'December'
// ];

// function saveEvents() {
//     localStorage.setItem('events', JSON.stringify(events));
// }

// function generateCalendar(month, year) {
//     calendarBody.innerHTML = '';
//     const firstDay = new Date(year, month).getDay();
//     const daysInMonth = 32 - new Date(year, month, 32).getDate();

//     monthYear.textContent = `${months[month]} ${year}`;
//     let date = 1;

//     for (let i = 0; i < 6; i++) {
//         const row = document.createElement('tr');

//         for (let j = 0; j < 7; j++) {
//             if (i === 0 && j < firstDay) {
//                 const cell = document.createElement('td');
//                 cell.classList.add('empty');
//                 row.appendChild(cell);
//             } else if (date > daysInMonth) {
//                 break;
//             } else {
//                 const cell = document.createElement('td');
//                 cell.textContent = date;

//                 const fullDate = `${year}-${month + 1}-${date}`;
//                 if (events[fullDate]) {
//                     const eventIndicator = document.createElement('div');
//                     eventIndicator.classList.add('event-indicator');
//                     cell.appendChild(eventIndicator);
//                 }

//                 if (date === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
//                     cell.style.backgroundColor = '#007bff';
//                     cell.style.color = '#fff';
//                 }

//                 cell.addEventListener('click', () => handleDateClick(fullDate));
//                 row.appendChild(cell);
//                 date++;
//             }
//         }

//         calendarBody.appendChild(row);
//     }
// }

// prevMonth.addEventListener('click', () => {
//     currentMonth--;
//     if (currentMonth < 0) {
//         currentMonth = 11;
//         currentYear--;
//     }
//     generateCalendar(currentMonth, currentYear);
// });

// nextMonth.addEventListener('click', () => {
//     currentMonth++;
//     if (currentMonth > 11) {
//         currentMonth = 0;
//         currentYear++;
//     }
//     generateCalendar(currentMonth, currentYear);
// });

// showCustomDate.addEventListener('click', () => {
//     if (customDateInput.style.display === 'none' || customDateInput.style.display === '') {
//         customDateInput.style.display = 'flex';
//     } else {
//         customDateInput.style.display = 'none';
//     }
// });

// goToDate.addEventListener('click', () => {
//     const enteredYear = parseInt(yearInput.value);
//     const enteredMonth = parseInt(monthInput.value) - 1;

//     if (!isNaN(enteredYear) && enteredMonth >= 0 && enteredMonth <= 11) {
//         currentYear = enteredYear;
//         currentMonth = enteredMonth;
//         generateCalendar(currentMonth, currentYear);
//         customDateInput.style.display = 'none';
//     } else {
//         alert('Please enter a valid year and month (1-12).');
//     }
// });

// goToCurrent.addEventListener('click', () => {
//     currentYear = today.getFullYear();
//     currentMonth = today.getMonth();
//     generateCalendar(currentMonth, currentYear);
// });

// addEventButton.addEventListener('click', () => {
//     eventForm.style.display = 'block';
// });

// eventForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     if (selectedDate) {
//         const title = eventTitle.value.trim();
//         const desc = eventDesc.value.trim();

//         if (title && desc) {
//             if (!events[selectedDate]) {
//                 events[selectedDate] = [];
//             }

//             events[selectedDate].push({ title, description: desc });
//             saveEvents();

//             eventTitle.value = '';
//             eventDesc.value = '';
//             eventForm.style.display = 'none';

//             generateCalendar(currentMonth, currentYear);
//             showEventsForDate(selectedDate);
//             displayAllEvents();
//         } else {
//             alert('Please provide both a title and a description for the event.');
//         }
//     }
// });

// function showEventsForDate(date) {
//     selectedDateEvents.innerHTML = '';

//     if (events[date]) {
//         events[date].forEach((event) => {
//             const li = document.createElement('li');
//             li.textContent = `${event.title}: ${event.description}`;
//             selectedDateEvents.appendChild(li);
//         });
//     } else {
//         const noEvent = document.createElement('li');
//         noEvent.textContent = 'No events for this date.';
//         selectedDateEvents.appendChild(noEvent);
//     }
// }

// function displayAllEvents() {
//     allEventsList.innerHTML = '';

//     Object.keys(events).forEach((date) => {
//         const dateEvents = events[date];
//         dateEvents.forEach((event) => {
//             const li = document.createElement('li');
//             li.textContent = `${date}: ${event.title}`;
//             allEventsList.appendChild(li);
//         });
//     });
// }

// function handleDateClick(date) {
//     selectedDate = date;
//     addEventButton.style.display = 'block';
//     showEventsForDate(date);
// }

// generateCalendar(currentMonth, currentYear);
// displayAllEvents();

















// const monthYear = document.getElementById('monthYear');
// const calendarBody = document.getElementById('calendarBody');
// const prevMonth = document.getElementById('prevMonth');
// const nextMonth = document.getElementById('nextMonth');
// const yearInput = document.getElementById('yearInput');
// const monthInput = document.getElementById('monthInput');
// const goToDate = document.getElementById('goToDate');
// const goToCurrent = document.getElementById('goToCurrent');
// const showCustomDate = document.getElementById('showCustomDate');
// const customDateInput = document.getElementById('customDateInput');
// const addEventButton = document.getElementById('addEventButton');
// const eventForm = document.getElementById('eventForm');
// const selectedDateEvents = document.getElementById('selectedDateEvents');
// const allEventsList = document.getElementById('allEventsList');
// const eventDetails = document.getElementById('eventDetails');
// const eventTitle = document.getElementById('eventTitle');
// const eventDesc = document.getElementById('eventDesc');

// let today = new Date();
// let currentMonth = today.getMonth();
// let currentYear = today.getFullYear();
// let selectedDate = null;

// // Load events from localStorage or initialize an empty object
// let events = JSON.parse(localStorage.getItem('events')) || {};

// const months = [
//     'January', 'February', 'March', 'April', 'May', 'June',
//     'July', 'August', 'September', 'October', 'November', 'December'
// ];

// function saveEvents() {
//     localStorage.setItem('events', JSON.stringify(events));
// }

// function generateCalendar(month, year) {
//     calendarBody.innerHTML = '';
//     const firstDay = new Date(year, month).getDay();
//     const daysInMonth = 32 - new Date(year, month, 32).getDate();

//     monthYear.textContent = `${months[month]} ${year}`;
//     let date = 1;

//     for (let i = 0; i < 6; i++) {
//         const row = document.createElement('tr');

//         for (let j = 0; j < 7; j++) {
//             if (i === 0 && j < firstDay) {
//                 const cell = document.createElement('td');
//                 cell.classList.add('empty');
//                 row.appendChild(cell);
//             } else if (date > daysInMonth) {
//                 break;
//             } else {
//                 const cell = document.createElement('td');
//                 cell.textContent = date;

//                 const fullDate = `${year}-${month + 1}-${date}`;
//                 if (events[fullDate]) {
//                     const eventIndicator = document.createElement('div');
//                     eventIndicator.classList.add('event-indicator');
//                     cell.appendChild(eventIndicator);
//                 }

//                 if (date === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
//                     cell.style.backgroundColor = '#007bff';
//                     cell.style.color = '#fff';
//                 }

//                 cell.addEventListener('click', () => handleDateClick(fullDate));
//                 row.appendChild(cell);
//                 date++;
//             }
//         }

//         calendarBody.appendChild(row);
//     }
// }

// prevMonth.addEventListener('click', () => {
//     currentMonth--;
//     if (currentMonth < 0) {
//         currentMonth = 11;
//         currentYear--;
//     }
//     generateCalendar(currentMonth, currentYear);
// });

// nextMonth.addEventListener('click', () => {
//     currentMonth++;
//     if (currentMonth > 11) {
//         currentMonth = 0;
//         currentYear++;
//     }
//     generateCalendar(currentMonth, currentYear);
// });

// showCustomDate.addEventListener('click', () => {
//     customDateInput.style.display = customDateInput.style.display === 'none' || customDateInput.style.display === '' ? 'flex' : 'none';
// });

// goToDate.addEventListener('click', () => {
//     const enteredYear = parseInt(yearInput.value);
//     const enteredMonth = parseInt(monthInput.value) - 1;

//     if (!isNaN(enteredYear) && enteredMonth >= 0 && enteredMonth <= 11) {
//         currentYear = enteredYear;
//         currentMonth = enteredMonth;
//         generateCalendar(currentMonth, currentYear);
//         customDateInput.style.display = 'none';
//     } else {
//         alert('Please enter a valid year and month (1-12).');
//     }
// });

// goToCurrent.addEventListener('click', () => {
//     currentYear = today.getFullYear();
//     currentMonth = today.getMonth();
//     generateCalendar(currentMonth, currentYear);
// });

// addEventButton.addEventListener('click', () => {
//     eventForm.style.display = 'block';
// });

// eventForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     if (selectedDate) {
//         const title = eventTitle.value.trim();
//         const desc = eventDesc.value.trim();

//         if (title && desc) {
//             if (!events[selectedDate]) {
//                 events[selectedDate] = [];
//             }

//             events[selectedDate].push({ title, description: desc });
//             saveEvents();

//             eventTitle.value = '';
//             eventDesc.value = '';
//             eventForm.style.display = 'none';

//             generateCalendar(currentMonth, currentYear);
//             showEventsForDate(selectedDate);
//             displayAllEvents();
//         } else {
//             alert('Please provide both a title and a description for the event.');
//         }
//     }
// });

// function showEventsForDate(date) {
//     selectedDateEvents.innerHTML = '';

//     if (events[date]) {
//         events[date].forEach((event) => {
//             const li = document.createElement('li');
//             li.textContent = `${event.title}: ${event.description}`;
//             selectedDateEvents.appendChild(li);
//         });
//     } else {
//         selectedDateEvents.textContent = 'No events for this date.';
//     }
// }

// function displayAllEvents() {
//     allEventsList.innerHTML = '';

//     Object.keys(events).forEach((date) => {
//         const dateEvents = events[date];
//         dateEvents.forEach((event) => {
//             const li = document.createElement('li');
//             li.textContent = `${date}: ${event.title}`;
//             li.classList.add('event-list-item');
//             li.addEventListener('click', () => displayEventDetails(date, event));
//             allEventsList.appendChild(li);
//         });
//     });
// }

// function displayEventDetails(date, event) {
//     eventDetails.innerHTML = `
//         <h3>${event.title}</h3>
//         <p>${event.description}</p>
//         <small>Date: ${date}</small>
//     `;
// }

// function handleDateClick(date) {
//     selectedDate = date;
//     addEventButton.style.display = 'block';
//     showEventsForDate(date);
// }

// generateCalendar(currentMonth, currentYear);
// displayAllEvents();












// Global Variables
// const monthYear = document.getElementById('monthYear');
// const calendarBody = document.getElementById('calendarBody');
// const prevMonth = document.getElementById('prevMonth');
// const nextMonth = document.getElementById('nextMonth');
// const addEventButton = document.getElementById('addEventButton');
// const eventForm = document.getElementById('eventForm');
// const eventTitle = document.getElementById('eventTitle');
// const eventDesc = document.getElementById('eventDesc');
// const selectedDateEvents = document.getElementById('selectedDateEvents');
// const allEventsList = document.getElementById('allEventsList');
// const eventDetails = document.getElementById('eventDetails');

// let today = new Date();
// let currentMonth = today.getMonth();
// let currentYear = today.getFullYear();
// let selectedDate = null;
// let events = JSON.parse(localStorage.getItem('events')) || {};

// // Functions
// function saveEvents() {
//     localStorage.setItem('events', JSON.stringify(events));
// }

// function generateCalendar(month, year) {
//     calendarBody.innerHTML = '';
//     const firstDay = new Date(year, month).getDay();
//     const daysInMonth = 32 - new Date(year, month, 32).getDate();

//     monthYear.textContent = `${year} - ${month + 1}`;
//     let date = 1;

//     for (let i = 0; i < 6; i++) {
//         const row = document.createElement('tr');

//         for (let j = 0; j < 7; j++) {
//             if (i === 0 && j < firstDay) {
//                 const cell = document.createElement('td');
//                 cell.classList.add('empty');
//                 row.appendChild(cell);
//             } else if (date > daysInMonth) {
//                 break;
//             } else {
//                 const cell = document.createElement('td');
//                 cell.textContent = date;

//                 const fullDate = `${year}-${month + 1}-${date}`;
//                 if (events[fullDate]) {
//                     const eventIndicator = document.createElement('div');
//                     eventIndicator.classList.add('event-indicator');
//                     cell.appendChild(eventIndicator);
//                 }

//                 cell.addEventListener('click', () => handleDateClick(fullDate));
//                 row.appendChild(cell);
//                 date++;
//             }
//         }
//         calendarBody.appendChild(row);
//     }
// }

// function handleDateClick(date) {
//     selectedDate = date;
//     addEventButton.style.display = 'block';
//     showEventsForDate(date);
// }

// function showEventsForDate(date) {
//     selectedDateEvents.innerHTML = events[date]
//         ? events[date].map(event => `<p>${event.title}: ${event.description}</p>`).join('')
//         : 'No events for this date.';
// }

// function displayAllEvents() {
//     allEventsList.innerHTML = Object.keys(events)
//         .map(date => events[date]
//             .map(event => `<li class="event-list-item" data-date="${date}" data-title="${event.title}" data-desc="${event.description}">${date}: ${event.title}</li>`)
//             .join(''))
//         .join('');

//     document.querySelectorAll('.event-list-item').forEach(item => {
//         item.addEventListener('click', e => {
//             const date = e.target.dataset.date;
//             const title = e.target.dataset.title;
//             const desc = e.target.dataset.desc;

//             eventDetails.innerHTML = `<h3>${title}</h3><p>${desc}</p><small>Date: ${date}</small>`;
//         });
//     });
// }

// eventForm.addEventListener('submit', e => {
//     e.preventDefault();

//     if (selectedDate) {
//         const title = eventTitle.value.trim();
//         const desc = eventDesc.value.trim();

//         if (!events[selectedDate]) {
//             events[selectedDate] = [];
//         }
//         events[selectedDate].push({ title, description: desc });

//         saveEvents();
//         generateCalendar(currentMonth, currentYear);
//         displayAllEvents();
//     }
// });

// prevMonth.addEventListener('click', () => {
//     currentMonth = (currentMonth - 1 + 12) % 12;
//     if (currentMonth === 11) currentYear--;
//     generateCalendar(currentMonth, currentYear);
// });

// nextMonth.addEventListener('click', () => {
//     currentMonth = (currentMonth + 1) % 12;
//     if (currentMonth === 0) currentYear++;
//     generateCalendar(currentMonth, currentYear);
// });

// document.getElementById('goToCurrent').addEventListener('click', () => {
//     today = new Date();
//     currentMonth = today.getMonth();
//     currentYear = today.getFullYear();
//     generateCalendar(currentMonth, currentYear);
// });

// // Initialize
// generateCalendar(currentMonth, currentYear);
// displayAllEvents();












// const monthYear = document.getElementById('monthYear');
// const calendarBody = document.getElementById('calendarBody');
// const prevMonth = document.getElementById('prevMonth');
// const nextMonth = document.getElementById('nextMonth');
// const showCustomDate = document.getElementById('showCustomDate');
// const customDateInput = document.getElementById('customDateInput');
// const yearInput = document.getElementById('yearInput');
// const monthInput = document.getElementById('monthInput');
// const goToDate = document.getElementById('goToDate');
// const goToCurrent = document.getElementById('goToCurrent');
// const addEventBtn = document.getElementById('addEventBtn');
// const eventForm = document.getElementById('eventForm');
// const saveEventBtn = document.getElementById('saveEventBtn');
// const allEventsList = document.getElementById('allEventsList');
// const eventDetails = document.getElementById('eventDetails');

// let today = new Date();
// let currentMonth = today.getMonth();
// let currentYear = today.getFullYear();
// let selectedDate = null;
// let events = JSON.parse(localStorage.getItem('events')) || {};

// // Generate calendar
// function generateCalendar(month, year) {
//     calendarBody.innerHTML = '';
//     monthYear.textContent = `${months[month]} ${year}`;
//     const firstDay = new Date(year, month, 1).getDay();
//     const daysInMonth = new Date(year, month + 1, 0).getDate();

//     let date = 1;
//     for (let i = 0; i < 6; i++) {
//         const row = document.createElement('tr');
//         for (let j = 0; j < 7; j++) {
//             const cell = document.createElement('td');
//             if (i === 0 && j < firstDay) {
//                 cell.classList.add('empty');
//             } else if (date > daysInMonth) {
//                 break;
//             } else {
//                 cell.textContent = date;
//                 const dateKey = `${year}-${month + 1}-${date}`;
//                 if (events[dateKey]) {
//                     const dot = document.createElement('div');
//                     dot.classList.add('event-indicator');
//                     cell.appendChild(dot);
//                 }
//                 cell.addEventListener('click', () => handleDateClick(dateKey));
//                 date++;
//             }
//             row.appendChild(cell);
//         }
//         calendarBody.appendChild(row);
//     }
// }

// // Handle custom date toggle
// showCustomDate.addEventListener('click', () => {
//     customDateInput.style.display = customDateInput.style.display === 'flex' ? 'none' : 'flex';
// });

// // Navigate to custom date
// goToDate.addEventListener('click', () => {
//     const year = parseInt(yearInput.value);
//     const month = parseInt(monthInput.value) - 1;
//     if (!isNaN(year) && !isNaN(month) && month >= 0 && month <= 11) {
//         currentYear = year;
//         currentMonth = month;
//         generateCalendar(currentMonth, currentYear);
//     } else {
//         alert('Invalid date. Enter a valid year and month.');
//     }
// });

// // Add event functionality
// addEventBtn.addEventListener('click', () => {
//     if (!selectedDate) return;
//     eventForm.style.display = eventForm.style.display === 'block' ? 'none' : 'block';
// });

// // Save event
// saveEventBtn.addEventListener('click', () => {
//     const title = document.getElementById('eventTitle').value;
//     const description = document.getElementById('eventDescription').value;
//     if (selectedDate && title && description) {
//         events[selectedDate] = { title, description };
//         localStorage.setItem('events', JSON.stringify(events));
//         generateCalendar(currentMonth, currentYear);
//         displayAllEvents();
//         alert('Event saved!');
//         eventForm.style.display = 'none';
//     } else {
//         alert('Please fill out all fields.');
//     }
// });

// // Display all events
// function displayAllEvents() {
//     allEventsList.innerHTML = '';
//     Object.keys(events).forEach((key) => {
//         const li = document.createElement('li');
//         li.textContent = `${key}: ${events[key].title}`;
//         li.addEventListener('click', () => showEventDetails(key));
//         allEventsList.appendChild(li);
//     });
// }

// // Show event details
// function showEventDetails(date) {
//     const event = events[date];
//     if (event) {
//         eventDetails.innerHTML = `<h4>${event.title}</h4><p>${event.description}</p>`;
//     }
// }

// // Handle date click
// function handleDateClick(date) {
//     selectedDate = date;
//     if (events[date]) {
//         showEventDetails(date);
//     }
//     addEventBtn.style.display = 'inline-block';
// }

// // Initialize
// generateCalendar(currentMonth, currentYear);
// displayAllEvents();








// const monthYear = document.getElementById('monthYear');
// const calendarBody = document.getElementById('calendarBody');
// const prevMonth = document.getElementById('prevMonth');
// const nextMonth = document.getElementById('nextMonth');
// const showCustomDate = document.getElementById('showCustomDate');
// const customDateInput = document.getElementById('customDateInput');
// const yearInput = document.getElementById('yearInput');
// const monthInput = document.getElementById('monthInput');
// const goToDate = document.getElementById('goToDate');
// const goToCurrent = document.getElementById('goToCurrent');
// const addEventBtn = document.getElementById('addEventBtn');
// const eventForm = document.getElementById('eventForm');
// const saveEventBtn = document.getElementById('saveEventBtn');
// const allEventsList = document.getElementById('allEventsList');
// const eventDetails = document.getElementById('eventDetails');
// const eventTitleInput = document.getElementById('eventTitle');
// const eventDescriptionInput = document.getElementById('eventDescription');

// let today = new Date();
// let currentMonth = today.getMonth();
// let currentYear = today.getFullYear();
// let selectedDate = null;
// let events = JSON.parse(localStorage.getItem('events')) || {};

// // Generate Calendar
// function generateCalendar(month, year) {
//     calendarBody.innerHTML = '';

//     const firstDay = new Date(year, month).getDay();
//     const daysInMonth = 32 - new Date(year, month, 32).getDate();
//     monthYear.textContent = `${months[month]} ${year}`;

//     let date = 1;

//     for (let i = 0; i < 6; i++) {
//         const row = document.createElement('tr');

//         for (let j = 0; j < 7; j++) {
//             const cell = document.createElement('td');

//             if (i === 0 && j < firstDay) {
//                 cell.classList.add('empty');
//             } else if (date > daysInMonth) {
//                 break;
//             } else {
//                 cell.textContent = date;
//                 const cellDate = new Date(year, month, date).toDateString();

//                 if (events[cellDate]) {
//                     const eventIndicator = document.createElement('div');
//                     eventIndicator.classList.add('event-indicator');
//                     cell.appendChild(eventIndicator);
//                 }

//                 if (
//                     date === today.getDate() &&
//                     month === today.getMonth() &&
//                     year === today.getFullYear()
//                 ) {
//                     cell.classList.add('today');
//                 }

//                 cell.addEventListener('click', () => handleDateClick(cellDate));
//                 date++;
//             }

//             row.appendChild(cell);
//         }

//         calendarBody.appendChild(row);
//     }
// }

// // Handle Date Click
// function handleDateClick(date) {
//     selectedDate = date;
//     addEventBtn.style.display = 'block';
//     displayEventDetails(date);
// }

// // Display Event Details
// function displayEventDetails(date) {
//     const event = events[date];
//     if (event) {
//         eventDetails.innerHTML = `
//             <h4>Event Details</h4>
//             <p><strong>Title:</strong> ${event.title}</p>
//             <p><strong>Description:</strong> ${event.description}</p>
//         `;
//     } else {
//         eventDetails.innerHTML = '<p>No events for this date.</p>';
//     }
// }

// // Add Event Button Click
// addEventBtn.addEventListener('click', () => {
//     eventForm.style.display = 'flex';
//     eventTitleInput.value = '';
//     eventDescriptionInput.value = '';
// });

// // Save Event
// saveEventBtn.addEventListener('click', () => {
//     const title = eventTitleInput.value.trim();
//     const description = eventDescriptionInput.value.trim();

//     if (!title || !description) {
//         alert('Please enter both title and description.');
//         return;
//     }

//     events[selectedDate] = { title, description };
//     localStorage.setItem('events', JSON.stringify(events));

//     eventForm.style.display = 'none';
//     addEventBtn.style.display = 'none';
//     generateCalendar(currentMonth, currentYear);
//     updateAllEventsList();
// });

// // Update All Events List
// function updateAllEventsList() {
//     allEventsList.innerHTML = '';

//     Object.keys(events).forEach((date) => {
//         const listItem = document.createElement('li');
//         listItem.textContent = `${date} - ${events[date].title}`;
//         listItem.addEventListener('click', () => displayEventDetails(date));
//         allEventsList.appendChild(listItem);
//     });
// }

// // Show Custom Date Input
// showCustomDate.addEventListener('click', () => {
//     customDateInput.style.display =
//         customDateInput.style.display === 'flex' ? 'none' : 'flex';
// });

// // Navigate to Custom Date
// goToDate.addEventListener('click', () => {
//     const enteredYear = parseInt(yearInput.value);
//     const enteredMonth = parseInt(monthInput.value) - 1;

//     if (!isNaN(enteredYear) && enteredMonth >= 0 && enteredMonth <= 11) {
//         currentYear = enteredYear;
//         currentMonth = enteredMonth;
//         generateCalendar(currentMonth, currentYear);
//         customDateInput.style.display = 'none';
//     } else {
//         alert('Please enter a valid year and month (1-12).');
//     }
// });

// // Go to Current Month
// goToCurrent.addEventListener('click', () => {
//     currentYear = today.getFullYear();
//     currentMonth = today.getMonth();
//     generateCalendar(currentMonth, currentYear);
// });

// // Navigate Previous Month
// prevMonth.addEventListener('click', () => {
//     currentMonth--;
//     if (currentMonth < 0) {
//         currentMonth = 11;
//         currentYear--;
//     }
//     generateCalendar(currentMonth, currentYear);
// });

// // Navigate Next Month
// nextMonth.addEventListener('click', () => {
//     currentMonth++;
//     if (currentMonth > 11) {
//         currentMonth = 0;
//         currentYear++;
//     }
//     generateCalendar(currentMonth, currentYear);
// });

// // Initial Setup
// const months = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
// ];

// generateCalendar(currentMonth, currentYear);
// updateAllEventsList();
















// const monthYear = document.getElementById('monthYear');
// const calendarBody = document.getElementById('calendarBody');
// const prevMonth = document.getElementById('prevMonth');
// const nextMonth = document.getElementById('nextMonth');
// const showCustomDate = document.getElementById('showCustomDate');
// const customDateInput = document.getElementById('customDateInput');
// const yearInput = document.getElementById('yearInput');
// const monthInput = document.getElementById('monthInput');
// const goToDate = document.getElementById('goToDate');
// const goToCurrent = document.getElementById('goToCurrent');
// const addEventBtn = document.getElementById('addEventBtn');
// const eventForm = document.getElementById('eventForm');
// const saveEventBtn = document.getElementById('saveEventBtn');
// const allEventsList = document.getElementById('allEventsList');
// const eventDetails = document.getElementById('eventDetails');
// const eventTitleInput = document.getElementById('eventTitle');
// const eventDescriptionInput = document.getElementById('eventDescription');
// const todayEvents = document.getElementById('todayEvents');

// let today = new Date();
// let currentMonth = today.getMonth();
// let currentYear = today.getFullYear();
// let selectedDate = null;
// let events = JSON.parse(localStorage.getItem('events')) || {};

// // Generate Calendar
// function generateCalendar(month, year) {
//     calendarBody.innerHTML = '';

//     const firstDay = new Date(year, month).getDay();
//     const daysInMonth = 32 - new Date(year, month, 32).getDate();
//     monthYear.textContent = `${months[month]} ${year}`;

//     let date = 1;

//     for (let i = 0; i < 6; i++) {
//         const row = document.createElement('tr');

//         for (let j = 0; j < 7; j++) {
//             const cell = document.createElement('td');

//             if (i === 0 && j < firstDay) {
//                 cell.classList.add('empty');
//             } else if (date > daysInMonth) {
//                 break;
//             } else {
//                 cell.textContent = date;
//                 const cellDate = new Date(year, month, date).toDateString();

//                 if (events[cellDate]) {
//                     const eventIndicator = document.createElement('div');
//                     eventIndicator.classList.add('event-indicator');
//                     cell.appendChild(eventIndicator);
//                 }

//                 if (
//                     date === today.getDate() &&
//                     month === today.getMonth() &&
//                     year === today.getFullYear()
//                 ) {
//                     cell.classList.add('today');
//                 }

//                 cell.addEventListener('click', () => handleDateClick(cellDate));
//                 date++;
//             }

//             row.appendChild(cell);
//         }

//         calendarBody.appendChild(row);
//     }

//     showTodayEvents();
// }

// // Show Today's Events
// function showTodayEvents() {
//     const todayDate = today.toDateString();
//     const event = events[todayDate];

//     if (event) {
//         todayEvents.innerHTML = `
//             <h4>Today's Events</h4>
//             <p><strong>Title:</strong> ${event.title}</p>
//             <p><strong>Description:</strong> ${event.description}</p>
//         `;
//     } else {
//         todayEvents.innerHTML = '<p>No events for today.</p>';
//     }
// }

// // Handle Date Click
// function handleDateClick(date) {
//     selectedDate = date;
//     addEventBtn.style.display = 'block';
//     displayEventDetails(date);
// }

// // Display Event Details
// function displayEventDetails(date) {
//     const event = events[date];
//     if (event) {
//         eventDetails.innerHTML = `
//             <h4>Event Details</h4>
//             <p><strong>Title:</strong> ${event.title}</p>
//             <p><strong>Description:</strong> ${event.description}</p>
//         `;
//     } else {
//         eventDetails.innerHTML = '<p>No events for this date.</p>';
//     }
// }

// // Add Event Button Click
// addEventBtn.addEventListener('click', () => {
//     eventForm.style.display = 'flex';
//     eventTitleInput.value = '';
//     eventDescriptionInput.value = '';
// });

// // Save Event
// saveEventBtn.addEventListener('click', () => {
//     const title = eventTitleInput.value.trim();
//     const description = eventDescriptionInput.value.trim();

//     if (!title || !description) {
//         alert('Please enter both title and description.');
//         return;
//     }

//     events[selectedDate] = { title, description };
//     localStorage.setItem('events', JSON.stringify(events));

//     eventForm.style.display = 'none';
//     addEventBtn.style.display = 'none';
//     generateCalendar(currentMonth, currentYear);
//     updateAllEventsList();
// });

// // Update All Events List
// function updateAllEventsList() {
//     allEventsList.innerHTML = '';

//     Object.keys(events).forEach((date) => {
//         const listItem = document.createElement('li');
//         listItem.textContent = `${date} - ${events[date].title}`;
//         listItem.addEventListener('click', () => displayEventDetails(date));
//         allEventsList.appendChild(listItem);
//     });
// }

// // Show Custom Date Input
// showCustomDate.addEventListener('click', () => {
//     customDateInput.style.display =
//         customDateInput.style.display === 'flex' ? 'none' : 'flex';
// });

// // Navigate to Custom Date
// goToDate.addEventListener('click', () => {
//     const enteredYear = parseInt(yearInput.value);
//     const enteredMonth = parseInt(monthInput.value) - 1;

//     if (!isNaN(enteredYear) && enteredMonth >= 0 && enteredMonth <= 11) {
//         currentYear = enteredYear;
//         currentMonth = enteredMonth;
//         generateCalendar(currentMonth, currentYear);
//         customDateInput.style.display = 'none';
//     } else {
//         alert('Please enter a valid year and month (1-12).');
//     }
// });

// // Go to Current Month
// goToCurrent.addEventListener('click', () => {
//     currentYear = today.getFullYear();
//     currentMonth = today.getMonth();
//     generateCalendar(currentMonth, currentYear);
// });

// // Navigate Previous Month
// prevMonth.addEventListener('click', () => {
//     currentMonth--;
//     if (currentMonth < 0) {
//         currentMonth = 11;
//         currentYear--;
//     }
//     generateCalendar(currentMonth, currentYear);
// });

// // Navigate Next Month
// nextMonth.addEventListener('click', () => {
//     currentMonth++;
//     if (currentMonth > 11) {
//         currentMonth = 0;
//         currentYear++;
//     }
//     generateCalendar(currentMonth, currentYear);
// });

// // Initial Setup
// const months = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
// ];

// generateCalendar(currentMonth, currentYear);
// updateAllEventsList();















// const monthYear = document.getElementById('monthYear');
// const calendarBody = document.getElementById('calendarBody');
// const prevMonth = document.getElementById('prevMonth');
// const nextMonth = document.getElementById('nextMonth');
// const todayEvents = document.getElementById('todayEvents');
// const allEventsList = document.getElementById('allEventsList').querySelector('ul');
// const eventDetails = document.getElementById('eventDetails');
// const eventForm = document.getElementById('eventForm');
// const saveEventBtn = document.getElementById('saveEventBtn');
// const eventTitleInput = document.getElementById('eventTitle');
// const eventDescriptionInput = document.getElementById('eventDescription');

// let today = new Date();
// let currentMonth = today.getMonth();
// let currentYear = today.getFullYear();
// let selectedDate = today.toDateString();
// let events = JSON.parse(localStorage.getItem('events')) || {};

// // Generate Calendar
// function generateCalendar(month, year) {
//   calendarBody.innerHTML = '';
//   const firstDay = new Date(year, month).getDay();
//   const daysInMonth = 32 - new Date(year, month, 32).getDate();

//   monthYear.textContent = `${months[month]} ${year}`;
//   let date = 1;

//   for (let i = 0; i < 6; i++) {
//     const row = document.createElement('tr');

//     for (let j = 0; j < 7; j++) {
//       const cell = document.createElement('td');

//       if (i === 0 && j < firstDay) {
//         cell.classList.add('empty');
//       } else if (date > daysInMonth) {
//         break;
//       } else {
//         const cellDate = new Date(year, month, date).toDateString();
//         cell.textContent = date;

//         if (events[cellDate]) {
//           const eventIndicator = document.createElement('div');
//           eventIndicator.classList.add('event-indicator');
//           cell.appendChild(eventIndicator);
//         }

//         if (cellDate === today.toDateString()) {
//           cell.classList.add('today');
//         }

//         cell.addEventListener('click', () => handleDateClick(cellDate));
//         date++;
//       }

//       row.appendChild(cell);
//     }

//     calendarBody.appendChild(row);
//   }
//   updateAllEventsList();
//   displayTodayEvents();
// }

// // Update All Events List
// function updateAllEventsList() {
//   allEventsList.innerHTML = '';
//   Object.keys(events).forEach((date) => {
//     const listItem = document.createElement('li');
//     listItem.textContent = `${date} - ${events[date].title}`;
//     listItem.addEventListener('click', () => displayEventDetails(date));
//     allEventsList.appendChild(listItem);
//   });
// }

// // Display Today's Events
// function displayTodayEvents() {
//   const todayDate = today.toDateString();
//   const event = events[todayDate];
//   todayEvents.innerHTML = event
//     ? `<p><strong>Title:</strong> ${event.title}</p><p><strong>Description:</strong> ${event.description}</p>`
//     : `<p>No events for today.</p>`;
// }

// // Handle Date Click
// function handleDateClick(date) {
//   selectedDate = date;
//   eventForm.style.display = 'flex';
// }

// // Display Event Details
// function displayEventDetails(date) {
//   const event = events[date];
//   eventDetails.innerHTML = event
//     ? `<p><strong>Title:</strong> ${event.title}</p><p><strong>Description:</strong> ${event.description}</p>`
//     : `<p>No events for this date.</p>`;
// }

// // Save Event
// saveEventBtn.addEventListener('click', () => {
//   const title = eventTitleInput.value.trim();
//   const description = eventDescriptionInput.value.trim();

//   if (title && description) {
//     events[selectedDate] = { title, description };
//     localStorage.setItem('events', JSON.stringify(events));
//     eventForm.style.display = 'none';
//     generateCalendar(currentMonth, currentYear);
//   } else {
//     alert('Please fill out all fields.');
//   }
// });

// // Navigate Months
// prevMonth.addEventListener('click', () => {
//   currentMonth--;
//   if (currentMonth < 0) {
//     currentMonth = 11;
//     currentYear--;
//   }
//   generateCalendar(currentMonth, currentYear);
// });

// nextMonth.addEventListener('click', () => {
//   currentMonth++;
//   if (currentMonth > 11) {
//     currentMonth = 0;
//     currentYear++;
//   }
//   generateCalendar(currentMonth, currentYear);
// });

// // Initial Setup
// const months = [
//   'January',
//   'February',
//   'March',
//   'April',
//   'May',
//   'June',
//   'July',
//   'August',
//   'September',
//   'October',
//   'November',
//   'December',
// ];

// generateCalendar(currentMonth, currentYear);

















// const monthYear = document.getElementById('monthYear');
// const calendarBody = document.getElementById('calendarBody');
// const prevMonth = document.getElementById('prevMonth');
// const nextMonth = document.getElementById('nextMonth');
// const goToCurrent = document.getElementById('goToCurrent');
// const toggleCustomDate = document.getElementById('toggleCustomDate');
// const customDateInput = document.getElementById('customDateInput');
// const yearInput = document.getElementById('yearInput');
// const monthInput = document.getElementById('monthInput');
// const goToCustomDate = document.getElementById('goToCustomDate');
// const todayEventList = document.getElementById('todayEventList');
// const allEventList = document.getElementById('allEventList');

// let today = new Date();
// let currentMonth = today.getMonth();
// let currentYear = today.getFullYear();
// let selectedDate = today.toDateString();
// let events = JSON.parse(localStorage.getItem('events')) || {};

// // Generate Calendar
// function generateCalendar(month, year) {
//   calendarBody.innerHTML = '';
//   const firstDay = new Date(year, month).getDay();
//   const daysInMonth = 32 - new Date(year, month, 32).getDate();

//   monthYear.textContent = `${months[month]} ${year}`;
//   let date = 1;

//   for (let i = 0; i < 6; i++) {
//     const row = document.createElement('tr');

//     for (let j = 0; j < 7; j++) {
//       const cell = document.createElement('td');

//       if (i === 0 && j < firstDay) {
//         cell.classList.add('empty');
//       } else if (date > daysInMonth) {
//         break;
//       } else {
//         const cellDate = new Date(year, month, date).toDateString();
//         cell.textContent = date;

//         if (events[cellDate]) {
//           const eventIndicator = document.createElement('div');
//           eventIndicator.classList.add('event-indicator');
//           cell.appendChild(eventIndicator);
//         }

//         if (cellDate === today.toDateString()) {
//           cell.classList.add('today');
//         }

//         cell.addEventListener('click', () => handleDateClick(cellDate, cell));
//         date++;
//       }

//       row.appendChild(cell);
//     }

//     calendarBody.appendChild(row);
//   }
//   updateTodayEvents();
//   updateAllEvents();
// }

// // Highlight selected date
// function handleDateClick(date, cell) {
//   selectedDate = date;
//   document.querySelectorAll('.calendar td').forEach((td) =>
//     td.classList.remove('selected')
//   );
//   cell.classList.add('selected');
//   updateTodayEvents();
// }

// // Update today's events
// function updateTodayEvents() {
//   todayEventList.innerHTML = '';
//   const eventList = events[selectedDate] || [];
//   if (eventList.length === 0) {
//     todayEventList.innerHTML = '<li>No events for today.</li>';
//   } else {
//     eventList.forEach((event) => {
//       const li = document.createElement('li');
//       li.textContent = `${event.title}: ${event.description}`;
//       todayEventList.appendChild(li);
//     });
//   }
// }

// // Update all events list
// function updateAllEvents() {
//   allEventList.innerHTML = '';
//   Object.keys(events).forEach((date) => {
//     const li = document.createElement('li');
//     li.textContent = `${date} (${events[date].length} events)`;
//     allEventList.appendChild(li);
//   });
// }

// // Initialize Calendar
// generateCalendar(currentMonth, currentYear);


















// const monthYear = document.getElementById('monthYear');
// const calendarBody = document.getElementById('calendarBody');
// const prevMonth = document.getElementById('prevMonth');
// const nextMonth = document.getElementById('nextMonth');
// const goToCurrent = document.getElementById('goToCurrent');
// const toggleCustomDate = document.getElementById('toggleCustomDate');
// const customDateInput = document.getElementById('customDateInput');
// const yearInput = document.getElementById('yearInput');
// const monthInput = document.getElementById('monthInput');
// const goToCustomDate = document.getElementById('goToCustomDate');
// const todayEventList = document.getElementById('todayEventList');
// const allEventList = document.getElementById('allEventList');

// const months = [
//   'January', 'February', 'March', 'April', 'May', 'June', 
//   'July', 'August', 'September', 'October', 'November', 'December'
// ];

// let today = new Date();
// let currentMonth = today.getMonth();
// let currentYear = today.getFullYear();
// let selectedDate = today.toDateString();
// let events = JSON.parse(localStorage.getItem('events')) || {};

// // Generate Calendar
// function generateCalendar(month, year) {
//   calendarBody.innerHTML = '';
//   const firstDay = new Date(year, month).getDay();
//   const daysInMonth = 32 - new Date(year, month, 32).getDate();

//   monthYear.textContent = `${months[month]} ${year}`;
//   let date = 1;

//   for (let i = 0; i < 6; i++) {
//     const row = document.createElement('tr');

//     for (let j = 0; j < 7; j++) {
//       const cell = document.createElement('td');

//       if (i === 0 && j < firstDay) {
//         cell.classList.add('empty');
//       } else if (date > daysInMonth) {
//         break;
//       } else {
//         const cellDate = new Date(year, month, date).toDateString();
//         cell.textContent = date;

//         if (events[cellDate]) {
//           const eventIndicator = document.createElement('div');
//           eventIndicator.classList.add('event-indicator');
//           cell.appendChild(eventIndicator);
//         }

//         if (cellDate === today.toDateString()) {
//           cell.classList.add('today');
//         }

//         cell.addEventListener('click', () => handleDateClick(cellDate, cell));
//         date++;
//       }

//       row.appendChild(cell);
//     }

//     calendarBody.appendChild(row);
//   }
//   updateTodayEvents();
//   updateAllEvents();
// }

// // Highlight selected date
// function handleDateClick(date, cell) {
//   selectedDate = date;
//   document.querySelectorAll('.calendar td').forEach((td) =>
//     td.classList.remove('selected')
//   );
//   cell.classList.add('selected');
//   updateTodayEvents();
// }

// // Update today's events
// function updateTodayEvents() {
//   todayEventList.innerHTML = '';
//   const eventList = events[selectedDate] || [];
//   if (eventList.length === 0) {
//     todayEventList.innerHTML = '<li>No events for today.</li>';
//   } else {
//     eventList.forEach((event) => {
//       const li = document.createElement('li');
//       li.textContent = `${event.title}: ${event.description}`;
//       todayEventList.appendChild(li);
//     });
//   }
// }

// // Update all events list
// function updateAllEvents() {
//   allEventList.innerHTML = '';
//   Object.keys(events).forEach((date) => {
//     const li = document.createElement('li');
//     li.textContent = `${date} (${events[date].length} events)`;
//     li.addEventListener('click', () => handleEventClick(date));
//     allEventList.appendChild(li);
//   });
// }

// // Handle clicking on an event from the "All Events" list
// function handleEventClick(date) {
//   selectedDate = date;
//   document.querySelectorAll('.calendar td').forEach((td) =>
//     td.classList.remove('selected')
//   );
//   const cell = [...document.querySelectorAll('.calendar td')]
//     .find((td) => td.textContent === new Date(date).getDate().toString());
//   if (cell) {
//     cell.classList.add('selected');
//   }
//   updateTodayEvents();
// }

// // Initialize Calendar
// generateCalendar(currentMonth, currentYear);

// // Navigate through months
// prevMonth.addEventListener('click', () => {
//   if (currentMonth === 0) {
//     currentMonth = 11;
//     currentYear--;
//   } else {
//     currentMonth--;
//   }
//   generateCalendar(currentMonth, currentYear);
// });

// nextMonth.addEventListener('click', () => {
//   if (currentMonth === 11) {
//     currentMonth = 0;
//     currentYear++;
//   } else {
//     currentMonth++;
//   }
//   generateCalendar(currentMonth, currentYear);
// });

// // Go to today's date
// goToCurrent.addEventListener('click', () => {
//   currentMonth = today.getMonth();
//   currentYear = today.getFullYear();
//   generateCalendar(currentMonth, currentYear);
// });

// // Toggle custom date input
// toggleCustomDate.addEventListener('click', () => {
//   customDateInput.style.display = customDateInput.style.display === 'none' ? 'flex' : 'none';
// });

// // Go to custom date
// goToCustomDate.addEventListener('click', () => {
//   const customYear = parseInt(yearInput.value);
//   const customMonth = parseInt(monthInput.value) - 1;
//   if (!isNaN(customYear) && !isNaN(customMonth)) {
//     currentYear = customYear;
//     currentMonth = customMonth;
//     generateCalendar(currentMonth, currentYear);
//   }
// });














// const monthYear = document.getElementById('monthYear');
// const calendarBody = document.getElementById('calendarBody');
// const prevMonth = document.getElementById('prevMonth');
// const nextMonth = document.getElementById('nextMonth');
// const goToCurrent = document.getElementById('goToCurrent');
// const toggleCustomDate = document.getElementById('toggleCustomDate');
// const customDateInput = document.getElementById('customDateInput');
// const yearInput = document.getElementById('yearInput');
// const monthInput = document.getElementById('monthInput');
// const goToCustomDate = document.getElementById('goToCustomDate');
// const todayEventList = document.getElementById('todayEventList');
// const allEventList = document.getElementById('allEventList');
// const eventTitleInput = document.getElementById('eventTitle');
// const eventDescriptionInput = document.getElementById('eventDescription');
// const addEventButton = document.getElementById('addEventButton');

// const months = [
//   'January', 'February', 'March', 'April', 'May', 'June', 
//   'July', 'August', 'September', 'October', 'November', 'December'
// ];

// let today = new Date();
// let currentMonth = today.getMonth();
// let currentYear = today.getFullYear();
// let selectedDate = today.toDateString();
// let events = JSON.parse(localStorage.getItem('events')) || {};

// function generateCalendar(month, year) {
//   calendarBody.innerHTML = '';
//   const firstDay = new Date(year, month).getDay();
//   const daysInMonth = 32 - new Date(year, month, 32).getDate();

//   monthYear.textContent = `${months[month]} ${year}`;
//   let date = 1;

//   for (let i = 0; i < 6; i++) {
//     const row = document.createElement('tr');

//     for (let j = 0; j < 7; j++) {
//       const cell = document.createElement('td');

//       if (i === 0 && j < firstDay) {
//         cell.classList.add('empty');
//       } else if (date > daysInMonth) {
//         break;
//       } else {
//         const cellDate = new Date(year, month, date).toDateString();
//         cell.textContent = date;

//         // Show red dot for events on this date
//         if (events[cellDate]) {
//           const eventIndicator = document.createElement('div');
//           eventIndicator.classList.add('event-indicator');
//           cell.appendChild(eventIndicator);
//         }

//         // Highlight the current date
//         if (cellDate === today.toDateString()) {
//           cell.classList.add('today');
//         }

//         // Handle date click to show event details for that date
//         cell.addEventListener('click', () => handleDateClick(cellDate, cell));
//         date++;
//       }

//       row.appendChild(cell);
//     }

//     calendarBody.appendChild(row);
//   }
//   updateTodayEvents();
//   updateAllEvents();
// }

// // Highlight selected date and show events for it
// function handleDateClick(date, cell) {
//   selectedDate = date;
//   document.querySelectorAll('.calendar td').forEach((td) =>
//     td.classList.remove('selected')
//   );
//   cell.classList.add('selected');
//   updateTodayEvents();
//   showEventForm();
// }

// // Update today's events
// function updateTodayEvents() {
//   todayEventList.innerHTML = '';
//   const eventList = events[selectedDate] || [];
//   if (eventList.length === 0) {
//     todayEventList.innerHTML = '<li>No events for today.</li>';
//   } else {
//     eventList.forEach((event) => {
//       const li = document.createElement('li');
//       li.textContent = `${event.title}: ${event.description}`;
//       todayEventList.appendChild(li);
//     });
//   }
// }

// // Update all events list
// function updateAllEvents() {
//   allEventList.innerHTML = '';
//   Object.keys(events).forEach((date) => {
//     const li = document.createElement('li');
//     li.textContent = `${date} (${events[date].length} events)`;
//     li.addEventListener('click', () => handleEventClick(date));
//     allEventList.appendChild(li);
//   });
// }

// // Handle clicking on an event from the "All Events" list
// function handleEventClick(date) {
//   selectedDate = date;
//   document.querySelectorAll('.calendar td').forEach((td) =>
//     td.classList.remove('selected')
//   );
//   const cell = [...document.querySelectorAll('.calendar td')]
//     .find((td) => td.textContent === new Date(date).getDate().toString());
//   if (cell) {
//     cell.classList.add('selected');
//   }
//   updateTodayEvents();
//   showEventForm();
// }

// // Show event form for adding an event
// function showEventForm() {
//   const eventForm = document.createElement('div');
//   eventForm.innerHTML = `
//     <h4>Add Event</h4>
//     <input type="text" id="eventTitle" placeholder="Event Title" />
//     <input type="text" id="eventDescription" placeholder="Event Description" />
//     <button id="addEventButton">Add Event</button>
//   `;
//   document.body.appendChild(eventForm);
// }

// // Add event to the selected date
// function addEvent(event) {
//   const title = eventTitleInput.value;
//   const description = eventDescriptionInput.value;

//   if (!title || !description) {
//     alert("Event title and description cannot be empty!");
//     return;
//   }

//   // Add the event to the selected date
//   if (!events[selectedDate]) {
//     events[selectedDate] = [];
//   }

//   events[selectedDate].push({ title, description });

//   // Save events to localStorage
//   localStorage.setItem('events', JSON.stringify(events));

//   // Clear event form and update calendar
//   eventTitleInput.value = '';
//   eventDescriptionInput.value = '';
//   generateCalendar(currentMonth, currentYear);
// }

// // Initialize Calendar
// generateCalendar(currentMonth, currentYear);

// // Event Listeners for navigation and date selection
// prevMonth.addEventListener('click', () => {
//   if (currentMonth === 0) {
//     currentMonth = 11;
//     currentYear--;
//   } else {
//     currentMonth--;
//   }
//   generateCalendar(currentMonth, currentYear);
// });

// nextMonth.addEventListener('click', () => {
//   if (currentMonth === 11) {
//     currentMonth = 0;
//     currentYear++;
//   } else {
//     currentMonth++;
//   }
//   generateCalendar(currentMonth, currentYear);
// });

// goToCurrent.addEventListener('click', () => {
//   currentMonth = today.getMonth();
//   currentYear = today.getFullYear();
//   generateCalendar(currentMonth, currentYear);
// });

// // Toggle custom date input
// toggleCustomDate.addEventListener('click', () => {
//   customDateInput.style.display = customDateInput.style.display === 'none' ? 'flex' : 'none';
// });

// // Go to custom date
// goToCustomDate.addEventListener('click', () => {
//   const customYear = parseInt(yearInput.value);
//   const customMonth = parseInt(monthInput.value) - 1;
//   if (!isNaN(customYear) && !isNaN(customMonth)) {
//     currentYear = customYear;
//     currentMonth = customMonth;
//     generateCalendar(currentMonth, currentYear);
//   }
// });

// // Handle adding event when button is clicked
// addEventButton.addEventListener('click', () => {
//   addEvent({
//     title: eventTitleInput.value,
//     description: eventDescriptionInput.value
//   });
// });














// const monthYear = document.getElementById('monthYear');
// const calendarBody = document.getElementById('calendarBody');
// const prevMonth = document.getElementById('prevMonth');
// const nextMonth = document.getElementById('nextMonth');
// const goToCurrent = document.getElementById('goToCurrent');
// const toggleCustomDate = document.getElementById('toggleCustomDate');
// const customDateInput = document.getElementById('customDateInput');
// const yearInput = document.getElementById('yearInput');
// const monthInput = document.getElementById('monthInput');
// const goToCustomDate = document.getElementById('goToCustomDate');
// const todayEventList = document.getElementById('todayEventList');
// const allEventList = document.getElementById('allEventList');
// const addEventButton = document.createElement('button');
// addEventButton.textContent = "Add Event";

// const months = [
//   'January', 'February', 'March', 'April', 'May', 'June', 
//   'July', 'August', 'September', 'October', 'November', 'December'
// ];

// let today = new Date();
// let currentMonth = today.getMonth();
// let currentYear = today.getFullYear();
// let selectedDate = today.toDateString();
// let events = JSON.parse(localStorage.getItem('events')) || {};

// function generateCalendar(month, year) {
//   calendarBody.innerHTML = '';
//   const firstDay = new Date(year, month).getDay();
//   const daysInMonth = 32 - new Date(year, month, 32).getDate();

//   monthYear.textContent = `${months[month]} ${year}`;
//   let date = 1;

//   for (let i = 0; i < 6; i++) {
//     const row = document.createElement('tr');

//     for (let j = 0; j < 7; j++) {
//       const cell = document.createElement('td');

//       if (i === 0 && j < firstDay) {
//         cell.classList.add('empty');
//       } else if (date > daysInMonth) {
//         break;
//       } else {
//         const cellDate = new Date(year, month, date).toDateString();
//         cell.textContent = date;

//         if (events[cellDate]) {
//           const eventIndicator = document.createElement('div');
//           eventIndicator.classList.add('event-indicator');
//           cell.appendChild(eventIndicator);
//         }

//         if (cellDate === today.toDateString()) {
//           cell.classList.add('today');
//         }

//         cell.addEventListener('click', () => handleDateClick(cellDate, cell));
//         date++;
//       }

//       row.appendChild(cell);
//     }

//     calendarBody.appendChild(row);
//   }
//   updateTodayEvents();
//   updateAllEvents();
// }

// function handleDateClick(date, cell) {
//   selectedDate = date;
//   document.querySelectorAll('.calendar td').forEach((td) =>
//     td.classList.remove('selected')
//   );
//   cell.classList.add('selected');
//   showAddEventButton(cell);
//   updateTodayEvents();
// }

// function showAddEventButton(cell) {
//   const existingButton = document.querySelector('#addEventButton');
//   if (existingButton) existingButton.remove();

//   cell.appendChild(addEventButton);
//   addEventButton.id = 'addEventButton';

//   addEventButton.addEventListener('click', () => {
//     const title = prompt('Enter event title:');
//     const description = prompt('Enter event description:');
//     if (title && description) {
//       if (!events[selectedDate]) {
//         events[selectedDate] = [];
//       }
//       events[selectedDate].push({ title, description });
//       localStorage.setItem('events', JSON.stringify(events));
//       updateTodayEvents();
//       updateAllEvents();
//     }
//   });
// }

// function updateTodayEvents() {
//   todayEventList.innerHTML = '';
//   const eventList = events[selectedDate] || [];
//   if (eventList.length === 0) {
//     todayEventList.innerHTML = '<li>No events for today.</li>';
//   } else {
//     eventList.forEach((event) => {
//       const li = document.createElement('li');
//       li.textContent = `${event.title}: ${event.description}`;
//       todayEventList.appendChild(li);
//     });
//   }
// }

// function updateAllEvents() {
//   allEventList.innerHTML = '';
//   Object.keys(events).forEach((date) => {
//     const li = document.createElement('li');
//     li.textContent = `${date} (${events[date].length} events)`;
//     li.addEventListener('click', () => handleEventClick(date));
//     allEventList.appendChild(li);
//   });
// }

// function handleEventClick(date) {
//   selectedDate = date;
//   document.querySelectorAll('.calendar td').forEach((td) =>
//     td.classList.remove('selected')
//   );
//   const cell = [...document.querySelectorAll('.calendar td')].find(
//     (td) => td.textContent === new Date(date).getDate().toString()
//   );
//   if (cell) {
//     cell.classList.add('selected');
//   }
//   updateTodayEvents();
// }

// generateCalendar(currentMonth, currentYear);

// prevMonth.addEventListener('click', () => {
//   if (currentMonth === 0) {
//     currentMonth = 11;
//     currentYear--;
//   } else {
//     currentMonth--;
//   }
//   generateCalendar(currentMonth, currentYear);
// });

// nextMonth.addEventListener('click', () => {
//   if (currentMonth === 11) {
//     currentMonth = 0;
//     currentYear++;
//   } else {
//     currentMonth++;
//   }
//   generateCalendar(currentMonth, currentYear);
// });

// goToCurrent.addEventListener('click', () => {
//   currentMonth = today.getMonth();
//   currentYear = today.getFullYear();
//   generateCalendar(currentMonth, currentYear);
// });

// toggleCustomDate.addEventListener('click', () => {
//   customDateInput.style.display = customDateInput.style.display === 'none' ? 'flex' : 'none';
// });

// goToCustomDate.addEventListener('click', () => {
//   const customYear = parseInt(yearInput.value);
//   const customMonth = parseInt(monthInput.value) - 1;
//   if (!isNaN(customYear) && !isNaN(customMonth)) {
//     currentYear = customYear;
//     currentMonth = customMonth;
//     generateCalendar(currentMonth, currentYear);
//   }
// });














// const monthYear = document.getElementById('monthYear');
// const calendarBody = document.getElementById('calendarBody');
// const prevMonth = document.getElementById('prevMonth');
// const nextMonth = document.getElementById('nextMonth');
// const goToCurrent = document.getElementById('goToCurrent');
// const toggleCustomDate = document.getElementById('toggleCustomDate');
// const customDateInput = document.getElementById('customDateInput');
// const yearInput = document.getElementById('yearInput');
// const monthInput = document.getElementById('monthInput');
// const goToCustomDate = document.getElementById('goToCustomDate');
// const addEventButton = document.getElementById('addEventButton');
// const eventTitleInput = document.getElementById('eventTitle');
// const eventDescriptionInput = document.getElementById('eventDescription');
// const todayEventList = document.getElementById('todayEventList');
// const allEventList = document.getElementById('allEventList');
// const addEventSection = document.getElementById('addEventSection');

// const months = [
//   'January', 'February', 'March', 'April', 'May', 'June', 
//   'July', 'August', 'September', 'October', 'November', 'December'
// ];

// let today = new Date();
// let currentMonth = today.getMonth();
// let currentYear = today.getFullYear();
// let selectedDate = today.toDateString();
// let events = JSON.parse(localStorage.getItem('events')) || {};

// // Generate Calendar
// function generateCalendar(month, year) {
//   calendarBody.innerHTML = '';
//   const firstDay = new Date(year, month).getDay();
//   const daysInMonth = 32 - new Date(year, month, 32).getDate();

//   monthYear.textContent = `${months[month]} ${year}`;
//   let date = 1;

//   for (let i = 0; i < 6; i++) {
//     const row = document.createElement('tr');

//     for (let j = 0; j < 7; j++) {
//       const cell = document.createElement('td');

//       if (i === 0 && j < firstDay) {
//         cell.classList.add('empty');
//       } else if (date > daysInMonth) {
//         break;
//       } else {
//         const cellDate = new Date(year, month, date).toDateString();
//         cell.textContent = date;

//         if (events[cellDate]) {
//           const eventIndicator = document.createElement('div');
//           eventIndicator.classList.add('event-indicator');
//           cell.appendChild(eventIndicator);
//         }

//         if (cellDate === today.toDateString()) {
//           cell.classList.add('today');
//         }

//         cell.addEventListener('click', () => handleDateClick(cellDate, cell));
//         date++;
//       }

//       row.appendChild(cell);
//     }

//     calendarBody.appendChild(row);
//   }
//   updateTodayEvents();
//   updateAllEvents();
// }

// // Highlight selected date
// function handleDateClick(date, cell) {
//   selectedDate = date;
//   document.querySelectorAll('.calendar td').forEach((td) =>
//     td.classList.remove('selected')
//   );
//   cell.classList.add('selected');
//   addEventSection.style.display = 'block';  // Show add event section
//   updateTodayEvents();
// }

// // Add Event to selected date
// addEventButton.addEventListener('click', () => {
//   const title = eventTitleInput.value.trim();
//   const description = eventDescriptionInput.value.trim();

//   if (title && description) {
//     if (!events[selectedDate]) {
//       events[selectedDate] = [];
//     }
//     events[selectedDate].push({ title, description });
//     localStorage.setItem('events', JSON.stringify(events));
//     eventTitleInput.value = '';
//     eventDescriptionInput.value = '';
//     updateTodayEvents();
//     updateAllEvents();
//   }
// });

// // Update today's events
// function updateTodayEvents() {
//   todayEventList.innerHTML = '';
//   const eventList = events[selectedDate] || [];
//   if (eventList.length === 0) {
//     todayEventList.innerHTML = '<li>No events for today.</li>';
//   } else {
//     eventList.forEach((event) => {
//       const li = document.createElement('li');
//       li.textContent = `${event.title}: ${event.description}`;
//       todayEventList.appendChild(li);
//     });
//   }
// }

// // Update all events list
// function updateAllEvents() {
//   allEventList.innerHTML = '';
//   Object.keys(events).forEach((date) => {
//     const li = document.createElement('li');
//     li.textContent = `${date} (${events[date].length} events)`;
//     li.addEventListener('click', () => handleEventClick(date));
//     allEventList.appendChild(li);
//   });
// }

// // Handle clicking on an event from the "All Events" list
// function handleEventClick(date) {
//   selectedDate = date;
//   document.querySelectorAll('.calendar td').forEach((td) =>
//     td.classList.remove('selected')
//   );
//   const cell = [...document.querySelectorAll('.calendar td')].find(
//     (td) => td.textContent === new Date(date).getDate().toString()
//   );
//   if (cell) {
//     cell.classList.add('selected');
//   }
//   updateTodayEvents();
// }

// // Navigate through months
// prevMonth.addEventListener('click', () => {
//   if (currentMonth === 0) {
//     currentMonth = 11;
//     currentYear--;
//   } else {
//     currentMonth--;
//   }
//   generateCalendar(currentMonth, currentYear);
// });

// nextMonth.addEventListener('click', () => {
//   if (currentMonth === 11) {
//     currentMonth = 0;
//     currentYear++;
//   } else {
//     currentMonth++;
//   }
//   generateCalendar(currentMonth, currentYear);
// });

// // Go to current date
// goToCurrent.addEventListener('click', () => {
//   currentMonth = today.getMonth();
//   currentYear = today.getFullYear();
//   generateCalendar(currentMonth, currentYear);
// });

// // Toggle custom date input visibility
// toggleCustomDate.addEventListener('click', () => {
//   customDateInput.style.display = customDateInput.style.display === 'none' ? 'flex' : 'none';
// });

// // Go to custom date
// goToCustomDate.addEventListener('click', () => {
//   const year = parseInt(yearInput.value);
//   const month = parseInt(monthInput.value) - 1; // Zero-indexed months

//   if (!isNaN(year) && !isNaN(month) && month >= 0 && month <= 11) {
//     currentYear = year;
//     currentMonth = month;
//     generateCalendar(currentMonth, currentYear);
//     customDateInput.style.display = 'none'; // Hide input after using it
//   }
// });

// // Initialize calendar
// generateCalendar(currentMonth, currentYear);














// const monthYear = document.getElementById('monthYear');
// const calendarBody = document.getElementById('calendarBody');
// const prevMonth = document.getElementById('prevMonth');
// const nextMonth = document.getElementById('nextMonth');
// const goToCurrent = document.getElementById('goToCurrent');
// const toggleCustomDate = document.getElementById('toggleCustomDate');
// const customDateInput = document.getElementById('customDateInput');
// const yearInput = document.getElementById('yearInput');
// const monthInput = document.getElementById('monthInput');
// const goToCustomDate = document.getElementById('goToCustomDate');
// const addEventButton = document.getElementById('addEventButton');
// const eventTitleInput = document.getElementById('eventTitle');
// const eventDescriptionInput = document.getElementById('eventDescription');
// const todayEventList = document.getElementById('todayEventList');
// const allEventList = document.getElementById('allEventList');
// const addEventSection = document.getElementById('addEventSection');

// const months = [
//   'January', 'February', 'March', 'April', 'May', 'June', 
//   'July', 'August', 'September', 'October', 'November', 'December'
// ];

// let today = new Date();
// let currentMonth = today.getMonth();
// let currentYear = today.getFullYear();
// let selectedDate = today.toDateString();
// let events = JSON.parse(localStorage.getItem('events')) || {};

// // Generate Calendar
// function generateCalendar(month, year) {
//   calendarBody.innerHTML = '';
//   const firstDay = new Date(year, month).getDay();
//   const daysInMonth = 32 - new Date(year, month, 32).getDate();

//   monthYear.textContent = `${months[month]} ${year}`;
//   let date = 1;

//   for (let i = 0; i < 6; i++) {
//     const row = document.createElement('tr');

//     for (let j = 0; j < 7; j++) {
//       const cell = document.createElement('td');

//       if (i === 0 && j < firstDay) {
//         cell.classList.add('empty');
//       } else if (date > daysInMonth) {
//         break;
//       } else {
//         const cellDate = new Date(year, month, date).toDateString();
//         cell.textContent = date;

//         if (events[cellDate]) {
//           const eventIndicator = document.createElement('div');
//           eventIndicator.classList.add('event-indicator');
//           cell.appendChild(eventIndicator);
//         }

//         if (cellDate === today.toDateString()) {
//           cell.classList.add('today');
//         }

//         cell.addEventListener('click', () => handleDateClick(cellDate, cell));
//         date++;
//       }

//       row.appendChild(cell);
//     }

//     calendarBody.appendChild(row);
//   }
//   updateTodayEvents();
//   updateAllEvents();
// }

// // Highlight selected date
// function handleDateClick(date, cell) {
//   selectedDate = date;
//   document.querySelectorAll('.calendar td').forEach((td) =>
//     td.classList.remove('selected')
//   );
//   cell.classList.add('selected');
//   addEventSection.style.display = 'block';  // Show add event section
//   updateTodayEvents();
// }

// // Add Event to selected date
// addEventButton.addEventListener('click', () => {
//   const title = eventTitleInput.value.trim();
//   const description = eventDescriptionInput.value.trim();

//   if (title && description) {
//     if (!events[selectedDate]) {
//       events[selectedDate] = [];
//     }
//     events[selectedDate].push({ title, description });
//     localStorage.setItem('events', JSON.stringify(events));
//     eventTitleInput.value = '';
//     eventDescriptionInput.value = '';
//     updateTodayEvents();
//     updateAllEvents();
//   }
// });

// // Update today's events
// function updateTodayEvents() {
//   todayEventList.innerHTML = '';
//   const eventList = events[selectedDate] || [];
//   if (eventList.length === 0) {
//     todayEventList.innerHTML = '<li>No events for today.</li>';
//   } else {
//     eventList.forEach((event, index) => {
//       const li = document.createElement('li');
//       li.textContent = `${event.title}: ${event.description}`;
//       todayEventList.appendChild(li);
//     });
//   }
// }

// // Update all events list
// function updateAllEvents() {
//   allEventList.innerHTML = '';
//   Object.keys(events).forEach((date) => {
//     events[date].forEach((event, index) => {
//       const li = document.createElement('li');
//       li.innerHTML = `${date}: ${event.title} - ${event.description} 
//         <button class="deleteEventButton" data-date="${date}" data-index="${index}">Delete</button>`;
      
//       const deleteButton = li.querySelector('.deleteEventButton');
//       deleteButton.addEventListener('click', (e) => {
//         const date = e.target.getAttribute('data-date');
//         const index = parseInt(e.target.getAttribute('data-index'));
//         deleteEvent(date, index);
//       });

//       allEventList.appendChild(li);
//     });
//   });
// }

// // Delete event
// function deleteEvent(date, index) {
//   if (events[date]) {
//     events[date].splice(index, 1);
//     if (events[date].length === 0) {
//       delete events[date]; // Remove the date if there are no events
//     }
//     localStorage.setItem('events', JSON.stringify(events));
//     generateCalendar(currentMonth, currentYear);
//     updateTodayEvents();
//     updateAllEvents();
//   }
// }

// // Navigate through months
// prevMonth.addEventListener('click', () => {
//   if (currentMonth === 0) {
//     currentMonth = 11;
//     currentYear--;
//   } else {
//     currentMonth--;
//   }
//   generateCalendar(currentMonth, currentYear);
// });

// nextMonth.addEventListener('click', () => {
//   if (currentMonth === 11) {
//     currentMonth = 0;
//     currentYear++;
//   } else {
//     currentMonth++;
//   }
//   generateCalendar(currentMonth, currentYear);
// });

// // Go to current date
// goToCurrent.addEventListener('click', () => {
//   currentMonth = today.getMonth();
//   currentYear = today.getFullYear();
//   generateCalendar(currentMonth, currentYear);
// });

// // Toggle custom date input visibility
// toggleCustomDate.addEventListener('click', () => {
//   customDateInput.style.display = customDateInput.style.display === 'none' ? 'flex' : 'none';
// });

// // Go to custom date
// goToCustomDate.addEventListener('click', () => {
//   const year = parseInt(yearInput.value);
//   const month = parseInt(monthInput.value) - 1; // Zero-indexed months

//   if (!isNaN(year) && !isNaN(month) && month >= 0 && month <= 11) {
//     currentYear = year;
//     currentMonth = month;
//     generateCalendar(currentMonth, currentYear);
//     customDateInput.style.display = 'none'; // Hide input after using it
//   }
// });

// // Initialize calendar
// generateCalendar(currentMonth, currentYear);























// const monthYear = document.getElementById('monthYear');
// const calendarBody = document.getElementById('calendarBody');
// const prevMonth = document.getElementById('prevMonth');
// const nextMonth = document.getElementById('nextMonth');
// const goToCurrent = document.getElementById('goToCurrent');
// const toggleCustomDate = document.getElementById('toggleCustomDate');
// const customDateInput = document.getElementById('customDateInput');
// const yearInput = document.getElementById('yearInput');
// const monthInput = document.getElementById('monthInput');
// const goToCustomDate = document.getElementById('goToCustomDate');
// const addEventButton = document.getElementById('addEventButton');
// const eventTitleInput = document.getElementById('eventTitle');
// const eventDescriptionInput = document.getElementById('eventDescription');
// const todayEventList = document.getElementById('todayEventList');
// const allEventList = document.getElementById('allEventList');
// const addEventSection = document.getElementById('addEventSection');

// const months = [
//   'January', 'February', 'March', 'April', 'May', 'June', 
//   'July', 'August', 'September', 'October', 'November', 'December'
// ];

// let today = new Date();
// let currentMonth = today.getMonth();
// let currentYear = today.getFullYear();
// let selectedDate = today.toDateString();
// let events = JSON.parse(localStorage.getItem('events')) || {};

// // Generate Calendar
// function generateCalendar(month, year) {
//   calendarBody.innerHTML = '';
//   const firstDay = new Date(year, month).getDay();
//   const daysInMonth = 32 - new Date(year, month, 32).getDate();

//   monthYear.textContent = `${months[month]} ${year}`;
//   let date = 1;

//   for (let i = 0; i < 6; i++) {
//     const row = document.createElement('tr');

//     for (let j = 0; j < 7; j++) {
//       const cell = document.createElement('td');

//       if (i === 0 && j < firstDay) {
//         cell.classList.add('empty');
//       } else if (date > daysInMonth) {
//         break;
//       } else {
//         const cellDate = new Date(year, month, date).toDateString();
//         cell.textContent = date;

//         if (events[cellDate]) {
//           const eventIndicator = document.createElement('div');
//           eventIndicator.classList.add('event-indicator');
//           cell.appendChild(eventIndicator);
//         }

//         if (cellDate === today.toDateString()) {
//           cell.classList.add('today');
//         }

//         cell.addEventListener('click', () => handleDateClick(cellDate, cell));
//         date++;
//       }

//       row.appendChild(cell);
//     }

//     calendarBody.appendChild(row);
//   }
//   updateTodayEvents();
//   updateAllEvents();
// }

// // Highlight selected date
// function handleDateClick(date, cell) {
//   selectedDate = date;
//   document.querySelectorAll('.calendar td').forEach((td) =>
//     td.classList.remove('selected')
//   );
//   cell.classList.add('selected');
//   addEventSection.style.display = 'block';  // Show add event section
//   updateTodayEvents();
// }

// // Add Event to selected date
// addEventButton.addEventListener('click', () => {
//   const title = eventTitleInput.value.trim();
//   const description = eventDescriptionInput.value.trim();

//   if (title && description) {
//     if (!events[selectedDate]) {
//       events[selectedDate] = [];
//     }
//     events[selectedDate].push({ title, description });
//     localStorage.setItem('events', JSON.stringify(events));
//     eventTitleInput.value = '';
//     eventDescriptionInput.value = '';
//     updateTodayEvents();
//     updateAllEvents();
//   }
// });

// // Update today's events
// function updateTodayEvents() {
//   todayEventList.innerHTML = '';
//   const eventList = events[selectedDate] || [];
//   if (eventList.length === 0) {
//     todayEventList.innerHTML = '<li>No events for today.</li>';
//   } else {
//     eventList.forEach((event, index) => {
//       const li = document.createElement('li');
//       li.textContent = `${event.title}: ${event.description}`;
//       todayEventList.appendChild(li);
//     });
//   }
// }

// // Update all events list
// function updateAllEvents() {
//   allEventList.innerHTML = '';
//   Object.keys(events).forEach((date) => {
//     events[date].forEach((event, index) => {
//       const li = document.createElement('li');
//       li.innerHTML = `${date}: ${event.title} - ${event.description} 
//         <button class="deleteEventButton" data-date="${date}" data-index="${index}">Delete</button>`;
      
//       const deleteButton = li.querySelector('.deleteEventButton');
//       deleteButton.addEventListener('click', (e) => {
//         const date = e.target.getAttribute('data-date');
//         const index = parseInt(e.target.getAttribute('data-index'));
//         deleteEvent(date, index);
//       });

//       allEventList.appendChild(li);
//     });
//   });
// }

// // Delete event
// function deleteEvent(date, index) {
//   events[date].splice(index, 1);
//   if (events[date].length === 0) {
//     delete events[date];
//   }
//   localStorage.setItem('events', JSON.stringify(events));
//   updateTodayEvents();
//   updateAllEvents();
//   generateCalendar(currentMonth, currentYear);
// }

// // Navigate to custom date
// goToCustomDate.addEventListener('click', () => {
//   const year = parseInt(yearInput.value);
//   const month = parseInt(monthInput.value) - 1;

//   if (year && month >= 0 && month < 12) {
//     currentYear = year;
//     currentMonth = month;
//     generateCalendar(currentMonth, currentYear);
//     customDateInput.style.display = 'none';
//   } else {
//     alert('Invalid year or month.');
//   }
// });

// // Toggle Custom Date input
// toggleCustomDate.addEventListener('click', () => {
//   customDateInput.style.display = customDateInput.style.display === 'none' ? 'flex' : 'none';
// });

// // Navigate to current date
// goToCurrent.addEventListener('click', () => {
//   currentMonth = today.getMonth();
//   currentYear = today.getFullYear();
//   generateCalendar(currentMonth, currentYear);
// });

// // Initialize calendar
// generateCalendar(currentMonth, currentYear);








// const monthYear = document.getElementById('monthYear');
// const calendarBody = document.getElementById('calendarBody');
// const prevMonth = document.getElementById('prevMonth');
// const nextMonth = document.getElementById('nextMonth');
// const goToCurrent = document.getElementById('goToCurrent');
// const toggleCustomDate = document.getElementById('toggleCustomDate');
// const customDateInput = document.getElementById('customDateInput');
// const yearInput = document.getElementById('yearInput');
// const monthInput = document.getElementById('monthInput');
// const goToCustomDate = document.getElementById('goToCustomDate');
// const todayEventList = document.getElementById('todayEventList');
// const allEventList = document.getElementById('allEventList');
// const addEventButton = document.getElementById('addEventButton');
// const eventTitleInput = document.getElementById('eventTitle');
// const eventDescriptionInput = document.getElementById('eventDescription');
// const eventForm = document.getElementById('eventForm');
// const saveEventButton = document.getElementById('saveEvent');

// const months = [
//   'January', 'February', 'March', 'April', 'May', 'June', 
//   'July', 'August', 'September', 'October', 'November', 'December'
// ];

// let today = new Date();
// let currentMonth = today.getMonth();
// let currentYear = today.getFullYear();
// let selectedDate = today.toDateString();
// let events = JSON.parse(localStorage.getItem('events')) || {};

// // Generate Calendar
// function generateCalendar(month, year) {
//   calendarBody.innerHTML = '';
//   const firstDay = new Date(year, month).getDay();
//   const daysInMonth = 32 - new Date(year, month, 32).getDate();

//   monthYear.textContent = `${months[month]} ${year}`;
//   let date = 1;

//   for (let i = 0; i < 6; i++) {
//     const row = document.createElement('tr');

//     for (let j = 0; j < 7; j++) {
//       const cell = document.createElement('td');

//       if (i === 0 && j < firstDay) {
//         cell.classList.add('empty');
//       } else if (date > daysInMonth) {
//         break;
//       } else {
//         const cellDate = new Date(year, month, date).toDateString();
//         cell.textContent = date;

//         if (events[cellDate]) {
//           const eventIndicator = document.createElement('div');
//           eventIndicator.classList.add('event-indicator');
//           cell.appendChild(eventIndicator);
//         }

//         if (cellDate === today.toDateString()) {
//           cell.classList.add('today');
//         }

//         cell.addEventListener('click', () => handleDateClick(cellDate, cell));
//         date++;
//       }

//       row.appendChild(cell);
//     }

//     calendarBody.appendChild(row);
//   }
//   updateTodayEvents();
//   updateAllEvents();
// }

// // Handle Date Click
// function handleDateClick(cellDate, cell) {
//   const prevSelected = document.querySelector('.calendar td.selected');
//   if (prevSelected) {
//     prevSelected.classList.remove('selected');
//   }

//   cell.classList.add('selected');
//   selectedDate = cellDate;
//   updateTodayEvents();
// }

// // Update Today's Events
// function updateTodayEvents() {
//   todayEventList.innerHTML = '';
//   const todayEvents = events[selectedDate] || [];

//   if (todayEvents.length === 0) {
//     todayEventList.innerHTML = '<li>No events today</li>';
//   } else {
//     todayEvents.forEach(event => {
//       const li = document.createElement('li');
//       li.textContent = `${event.title} - ${event.description}`;
//       todayEventList.appendChild(li);
//     });
//   }
// }

// // Update All Events
// function updateAllEvents() {
//   allEventList.innerHTML = '';
//   if (Object.keys(events).length === 0) {
//     allEventList.innerHTML = '<li>No events added yet.</li>';
//   } else {
//     Object.keys(events).forEach((date) => {
//       events[date].forEach((event, index) => {
//         const li = document.createElement('li');
//         li.innerHTML = `${date}: ${event.title} - ${event.description} 
//           <button class="deleteEventButton" data-date="${date}" data-index="${index}">Delete</button>`;
        
//         const deleteButton = li.querySelector('.deleteEventButton');
//         deleteButton.addEventListener('click', (e) => {
//           const date = e.target.getAttribute('data-date');
//           const index = parseInt(e.target.getAttribute('data-index'));
//           deleteEvent(date, index);
//         });

//         allEventList.appendChild(li);
//       });
//     });
//   }
// }

// // Delete Event
// function deleteEvent(date, index) {
//   events[date].splice(index, 1);
//   if (events[date].length === 0) {
//     delete events[date];
//   }
//   localStorage.setItem('events', JSON.stringify(events));
//   updateTodayEvents();
//   updateAllEvents();
// }

// // Add Event Button
// addEventButton.addEventListener('click', () => {
//   eventForm.style.display = 'block';
// });

// // Save Event
// saveEventButton.addEventListener('click', () => {
//   const title = eventTitleInput.value.trim();
//   const description = eventDescriptionInput.value.trim();

//   if (title && description) {
//     if (!events[selectedDate]) {
//       events[selectedDate] = [];
//     }
//     events[selectedDate].push({ title, description });
//     localStorage.setItem('events', JSON.stringify(events));
//     eventTitleInput.value = '';
//     eventDescriptionInput.value = '';
//     eventForm.style.display = 'none';
//     updateTodayEvents();
//     updateAllEvents();
//   }
// });

// // Navigation Buttons
// prevMonth.addEventListener('click', () => {
//   currentMonth--;
//   if (currentMonth < 0) {
//     currentMonth = 11;
//     currentYear--;
//   }
//   generateCalendar(currentMonth, currentYear);
// });

// nextMonth.addEventListener('click', () => {
//   currentMonth++;
//   if (currentMonth > 11) {
//     currentMonth = 0;
//     currentYear++;
//   }
//   generateCalendar(currentMonth, currentYear);
// });

// // Go to Current Date
// goToCurrent.addEventListener('click', () => {
//   currentMonth = today.getMonth();
//   currentYear = today.getFullYear();
//   generateCalendar(currentMonth, currentYear);
// });

// // Toggle Custom Date
// toggleCustomDate.addEventListener('click', () => {
//   customDateInput.style.display = customDateInput.style.display === 'none' ? 'flex' : 'none';
// });

// // Go to Custom Date
// goToCustomDate.addEventListener('click', () => {
//   const year = parseInt(yearInput.value);
//   const month = parseInt(monthInput.value) - 1;  // Month is 0-indexed
//   if (year && month >= 0 && month <= 11) {
//     currentYear = year;
//     currentMonth = month;
//     generateCalendar(currentMonth, currentYear);
//     customDateInput.style.display = 'none';
//   } else {
//     alert('Invalid date');
//   }
// });

// // Initialize Calendar
// generateCalendar(currentMonth, currentYear);
















const monthYear = document.getElementById('monthYear');
const calendarBody = document.getElementById('calendarBody');
const prevMonth = document.getElementById('prevMonth');
const nextMonth = document.getElementById('nextMonth');
const goToCurrent = document.getElementById('goToCurrent');
const toggleCustomDate = document.getElementById('toggleCustomDate');
const customDateInput = document.getElementById('customDateInput');
const yearInput = document.getElementById('yearInput');
const monthInput = document.getElementById('monthInput');
const goToCustomDate = document.getElementById('goToCustomDate');
const todayEventList = document.getElementById('todayEventList');
const allEventList = document.getElementById('allEventList');
const addEventButton = document.getElementById('addEventButton');
const eventTitleInput = document.getElementById('eventTitle');
const eventDescriptionInput = document.getElementById('eventDescription');
const eventForm = document.getElementById('eventForm');
const saveEventButton = document.getElementById('saveEvent');

// Months array for display
const months = [
  'January', 'February', 'March', 'April', 'May', 'June', 
  'July', 'August', 'September', 'October', 'November', 'December'
];

let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectedDate = today.toDateString();
let events = JSON.parse(localStorage.getItem('events')) || {};

// Generate Calendar
function generateCalendar(month, year) {
  calendarBody.innerHTML = '';
  const firstDay = new Date(year, month).getDay();
  const daysInMonth = 32 - new Date(year, month, 32).getDate();

  monthYear.textContent = `${months[month]} ${year}`;
  let date = 1;

  for (let i = 0; i < 6; i++) {
    const row = document.createElement('tr');

    for (let j = 0; j < 7; j++) {
      const cell = document.createElement('td');

      if (i === 0 && j < firstDay) {
        cell.classList.add('empty');
      } else if (date > daysInMonth) {
        break;
      } else {
        const cellDate = new Date(year, month, date).toDateString();
        cell.textContent = date;

        // Add red dot for events
        if (events[cellDate]) {
          const eventIndicator = document.createElement('div');
          eventIndicator.classList.add('event-indicator');
          cell.appendChild(eventIndicator);
        }

        // Highlight today
        if (cellDate === today.toDateString()) {
          cell.classList.add('today');
        }

        // Add event listener for date click
        cell.addEventListener('click', () => handleDateClick(cellDate, cell));
        date++;
      }

      row.appendChild(cell);
    }

    calendarBody.appendChild(row);
  }

  updateTodayEvents();
  updateAllEvents();
}

// Handle Date Click
function handleDateClick(cellDate, cell) {
  const prevSelected = document.querySelector('.calendar td.selected');
  if (prevSelected) {
    prevSelected.classList.remove('selected');
  }

  cell.classList.add('selected');
  selectedDate = cellDate;
  updateTodayEvents();
}

// Update Today's Events
function updateTodayEvents() {
  todayEventList.innerHTML = '';
  const todayEvents = events[selectedDate] || [];

  if (todayEvents.length === 0) {
    todayEventList.innerHTML = '<li>No events today</li>';
  } else {
    todayEvents.forEach(event => {
      const li = document.createElement('li');
      li.textContent = `${event.title} - ${event.description}`;
      todayEventList.appendChild(li);
    });
  }
}

// Update All Events
function updateAllEvents() {
  allEventList.innerHTML = '';
  if (Object.keys(events).length === 0) {
    allEventList.innerHTML = '<li>No events added yet.</li>';
  } else {
    Object.keys(events).forEach((date) => {
      events[date].forEach((event, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${date}: ${event.title} - ${event.description} 
          <button class="deleteEventButton" data-date="${date}" data-index="${index}">Delete</button>`;

        const deleteButton = li.querySelector('.deleteEventButton');
        deleteButton.addEventListener('click', (e) => {
          const date = e.target.getAttribute('data-date');
          const index = parseInt(e.target.getAttribute('data-index'));
          deleteEvent(date, index);
        });

        allEventList.appendChild(li);
      });
    });
  }
}

// Delete Event
function deleteEvent(date, index) {
  events[date].splice(index, 1);
  if (events[date].length === 0) {
    delete events[date];
  }
  localStorage.setItem('events', JSON.stringify(events));
  updateTodayEvents();
  updateAllEvents();
}

// Add Event Button
addEventButton.addEventListener('click', () => {
  eventForm.style.display = 'block';
});

// Save Event
saveEventButton.addEventListener('click', () => {
  const title = eventTitleInput.value.trim();
  const description = eventDescriptionInput.value.trim();

  if (title && description) {
    if (!events[selectedDate]) {
      events[selectedDate] = [];
    }
    events[selectedDate].push({ title, description });
    localStorage.setItem('events', JSON.stringify(events));
    eventTitleInput.value = '';
    eventDescriptionInput.value = '';
    eventForm.style.display = 'none';
    updateTodayEvents();
    updateAllEvents();
  }
});

// Navigation Buttons
prevMonth.addEventListener('click', () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  generateCalendar(currentMonth, currentYear);
});

nextMonth.addEventListener('click', () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  generateCalendar(currentMonth, currentYear);
});

// Go to Current Date
goToCurrent.addEventListener('click', () => {
  currentMonth = today.getMonth();
  currentYear = today.getFullYear();
  generateCalendar(currentMonth, currentYear);
});

// Toggle Custom Date
toggleCustomDate.addEventListener('click', () => {
  customDateInput.style.display = customDateInput.style.display === 'none' ? 'flex' : 'none';
});

// Go to Custom Date
goToCustomDate.addEventListener('click', () => {
  const year = parseInt(yearInput.value);
  const month = parseInt(monthInput.value) - 1;  // Month is 0-indexed
  if (year && month >= 0 && month <= 11) {
    currentYear = year;
    currentMonth = month;
    generateCalendar(currentMonth, currentYear);
    customDateInput.style.display = 'none';
  } else {
    alert('Invalid date');
  }
});

// Initialize Calendar
generateCalendar(currentMonth, currentYear);
