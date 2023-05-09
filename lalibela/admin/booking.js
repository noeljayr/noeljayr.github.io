$(document).ready(function () {
  var table = $("#bookings-table").DataTable({
    autoWidth: false,
    searching: true,
    paging: true,
    sorting: true,
  });

  $("#search").on("keyup", function () {
    table.search(this.value).draw();
  });

  $("#search").on("change", function () {
    table.search(this.value).draw();
  });

  $("#sort-by").on("change", function () {
    var column = $(this).val();
    table.order([table.column(column).index(), "asc"]).draw();
  });
});

const bookSearch = document.querySelector("#search");
const pendingNotification = document.querySelector(".pending-btn");

bookSearch.value = "";

pendingNotification.addEventListener("click", () => {
  const inputEvent = new Event("input");
  bookSearch.dispatchEvent(inputEvent);
  bookSearch.value = pendingNotification.querySelector(".name").textContent;

  // Create and dispatch a new 'change' event on the input element
  const event = new Event("change");
  bookSearch.dispatchEvent(event);
});

const pendingRequests = document.querySelectorAll("table .pending");
const count = 0;
const pendingBadge = document.querySelector(".pill-counter");

pendingBadge.textContent = pendingRequests.length;

const numberAdults = document.querySelector(".adult-input");
const numberChildren = document.querySelector(".children-input");
const totalGuests = document.querySelector(".add-booking-form .total");

numberAdults.addEventListener("change", () => {
  totalGuests.value = numberAdults.value + numberChildren.value;
});

numberChildren.addEventListener("change", () => {
  totalGuests.value =
    parseInt(numberAdults.value) + parseInt(numberChildren.value);
});

totalGuests.value = "";
numberChildren.value = "";
numberAdults.value = "";

function createCalendar(x, y) {
  var calendar = x;
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth();

  var monthYear = calendar.querySelector(".monthYear");
  var prevMonth = calendar.querySelector(".prevMonth");
  var nextMonth = calendar.querySelector(".nextMonth");

  // Update the month and year in the header
  updateHeader();

  // Add event listeners to the previous and next buttons
  prevMonth.addEventListener("click", showPrevMonth);
  nextMonth.addEventListener("click", showNextMonth);

  // Update the calendar
  updateCalendar();

  function updateHeader() {
    monthYear.textContent = getMonthName() + " " + year;
  }

  function showPrevMonth() {
    if (month === 0) {
      year--;
      month = 11;
    } else {
      month--;
    }
    updateHeader();
    updateCalendar();
  }

  function showNextMonth() {
    if (month === 11) {
      year++;
      month = 0;
    } else {
      month++;
    }
    updateHeader();
    updateCalendar();
  }

  function updateCalendar() {
    var tbody = calendar.querySelector("tbody");
    tbody.innerHTML = "";

    var today = new Date();
    var firstDay = new Date(year, month, 1).getDay();
    var daysInMonth = new Date(year, month + 1, 0).getDate();

    var date = 1;
    for (var i = 0; i < 6; i++) {
      var row = document.createElement("tr");
      for (var j = 0; j < 7; j++) {
        var cell = document.createElement("td");

        if (i === 0 && j < firstDay) {
          // Fill in empty cells before the first day
          var text = document.createTextNode("");
          cell.appendChild(text);
        } else if (date > daysInMonth) {
          // Fill in empty cells after the last day
          var text = document.createTextNode("");
          cell.appendChild(text);
        } else {
          // Fill in cells with the day numbers
          var text = document.createTextNode(date);
          cell.appendChild(text);

          // Add event listener to update the selected date
          cell.addEventListener("click", function () {
            var selected = tbody.querySelector(".selected");
            if (selected) {
              selected.classList.remove("selected");
            }
            this.classList.add("selected");
            var day = this.textContent;
            var fullDate = new Date(year, month, day);
            var options = { month: "long", year: "numeric", day: "numeric" };
            var formattedDate = fullDate.toLocaleDateString("en-US", options);

            const arrDate = y;
            arrDate.value = formattedDate;
          });

          // If this is the current date, add the 'today' class
          if (
            date === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
          ) {
            cell.classList.add("today");
          }

          date++;
        }

        if (cell.innerText === "") {
          cell.classList.add("ignore");
        }
        row.appendChild(cell);
      }
      tbody.appendChild(row);
    }
  }

  function getMonthName() {
    var monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return monthNames[month];
  }
}

const calendars = document.querySelectorAll(".calendar-input");
const arrDate = document.querySelector(".arrival-date");
arrDate.value = "";
const depDate = document.querySelector(".depart-date");
depDate.value = "";
createCalendar(calendars[0], arrDate);
createCalendar(calendars[1], depDate);

const checkInCalendar = document.querySelector("#booking-picker-1");
const checkOutCalendar = document.querySelector("#booking-picker-2");
const ignoreEl = document.querySelectorAll(".ignore");

// Add an event listener to the first input group
arrDate.addEventListener("click", function () {
  // Add the active class to the calendar
  checkInCalendar.classList.add("date-picker-active");
});

depDate.addEventListener("click", function () {
  // Add the active class to the calendar
  checkOutCalendar.classList.add("date-picker-active");
});

// Add an event listener to the document
document.addEventListener("click", function (event) {
  // Check if the clicked element is not the first input group or the calendar

  if (
    event.target !== arrDate &&
    event.target !== checkInCalendar &&
    !event.target.classList.contains("ignore") &&
    !event.target.classList.contains("disabled")
  ) {
    // Remove the active class from the calendar
    checkInCalendar.classList.remove("date-picker-active");
  }
});

document.addEventListener("click", function (event) {
  // Check if the clicked element is not the first input group or the calendar

  if (
    event.target !== depDate &&
    event.target !== checkOutCalendar &&
    !event.target.classList.contains("ignore") &&
    !event.target.classList.contains("disabled")
  ) {
    // Remove the active class from the calendar
    checkOutCalendar.classList.remove("date-picker-active");
  }
});

ignoreEl.forEach((el) => {
  el.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});

const addBookingBtn = document.querySelector(".add-booking-btn");
const addBookForm = document.querySelector(".add-booking-form");
const cancelBookingBtn = document.querySelector(".booking-form-cancel");

addBookingBtn.addEventListener("click", () => {
  addBookForm.classList.add("add-booking-form-active");
});

cancelBookingBtn.addEventListener("click", () => {
  addBookForm.classList.remove("add-booking-form-active");
});

const viewActions = document.querySelectorAll("#bookings-table td .action");
const viewBookingDetails = document.querySelector(".view-booking-details");
const closeView = viewBookingDetails.querySelector(".close-view");
const saveBooking = viewBookingDetails.querySelector(".save-btn");
const viewSelect = document.getElementById("view-select");

viewActions.forEach((action) => {
  action.addEventListener("click", () => {
    var actionParent = action.parentElement.parentElement;
    var name = actionParent.querySelector(".name");
    var phone = actionParent.querySelector(".phone");
    var email = actionParent.querySelector(".info .email");
    var checkInDate = actionParent.querySelector(".check-in-date");
    var checkOutDate = actionParent.querySelector(".check-out-date");
    var guests = actionParent.querySelector(".total");
    var adults = actionParent.querySelector(".adults");
    var children = actionParent.querySelector(".children");
    var status = actionParent.querySelector(".table-pill");
    viewSelect.value = status.textContent;

    viewBookingDetails.querySelector(".info .booker-name").textContent =
      name.textContent;
    viewBookingDetails.querySelector(".info .phone").textContent =
      phone.textContent;
    viewBookingDetails.querySelector(".info .email").textContent =
      email.textContent;
    viewBookingDetails.querySelector(".info .check-in-date").textContent =
      checkInDate.textContent;
    viewBookingDetails.querySelector(".info .check-out-date").textContent =
      checkOutDate.textContent;
    viewBookingDetails.querySelector(".info .total").textContent =
      guests.textContent;
    viewBookingDetails.querySelector(".info .adults").textContent =
      adults.textContent;
    viewBookingDetails.querySelector(".info .children").textContent =
      children.textContent;

    if (status.textContent == "Pending") {
      viewBookingDetails
        .querySelector(".info .status")
        .classList.remove("complete");
      viewBookingDetails
        .querySelector(".info .status")
        .classList.remove("canceled");
      viewBookingDetails
        .querySelector(".info .status")
        .classList.add("pending");
      viewBookingDetails.querySelector(".info .status").textContent =
        status.textContent;
    } else if (status.textContent == "Complete") {
      viewBookingDetails
        .querySelector(".info .status")
        .classList.remove("canceled");
      viewBookingDetails
        .querySelector(".info .status")
        .classList.remove("pending");
      viewBookingDetails
        .querySelector(".info .status")
        .classList.add("complete");
      viewBookingDetails.querySelector(".info .status").textContent =
        status.textContent;
    } else if (status.textContent == "Canceled") {
      viewBookingDetails
        .querySelector(".info .status")
        .classList.remove("complete");
      viewBookingDetails
        .querySelector(".info .status")
        .classList.remove("pending");
      viewBookingDetails
        .querySelector(".info .status")
        .classList.add("canceled");
      viewBookingDetails.querySelector(".info .status").textContent =
        status.textContent;
    }

    viewBookingDetails.classList.add("view-booking-details-active");
  });
});

closeView.addEventListener("click", () => {
  viewBookingDetails.classList.remove("view-booking-details-active");
});

saveBooking.addEventListener("click", () => {
  viewBookingDetails.classList.remove("view-booking-details-active");
});

viewSelect.value = "";
viewSelect.addEventListener("change", () => {
  viewBookingDetails.querySelector(".info .status").textContent =
    viewSelect.value;

  if (
    viewBookingDetails.querySelector(".info .status").textContent == "Pending"
  ) {
    viewBookingDetails
      .querySelector(".info .status")
      .classList.remove("complete");
    viewBookingDetails
      .querySelector(".info .status")
      .classList.remove("canceled");
    viewBookingDetails.querySelector(".info .status").classList.add("pending");
  } else if (
    viewBookingDetails.querySelector(".info .status").textContent == "Complete"
  ) {
    viewBookingDetails
      .querySelector(".info .status")
      .classList.remove("canceled");
    viewBookingDetails
      .querySelector(".info .status")
      .classList.remove("pending");
    viewBookingDetails.querySelector(".info .status").classList.add("complete");
  } else if (
    viewBookingDetails.querySelector(".info .status").textContent == "Canceled"
  ) {
    viewBookingDetails
      .querySelector(".info .status")
      .classList.remove("complete");
    viewBookingDetails
      .querySelector(".info .status")
      .classList.remove("pending");
    viewBookingDetails.querySelector(".info .status").classList.add("canceled");
  }
});
