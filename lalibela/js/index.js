
// window.addEventListener("resize", function () {
//   var img = document.querySelector(".hero-img");
//   var imgHeight = img.offsetHeight;
//   console.log("Image height is: " + imgHeight);
// });

var windowWidth = window.innerWidth;
 const heroSection = document.querySelector(".hero");

if (windowWidth <= 720) {
  
  // var checkHeight = () => {
  //   var img = document.querySelector(".hero-img");
  //   var imgHeight = img.offsetHeight;
  //   console.log(imgHeight);
  // };

  window.addEventListener("load", () => {
   var img = document.querySelector(".hero-img");
   var imgHeight = img.offsetHeight;
    
    heroSection.style.marginTop = imgHeight - 50 +"px"
  })
} else {
  
  heroSection.style.marginTop = "5rem";
}

window.addEventListener("resize", function () {
  var windowWidth = window.innerWidth;

  if (windowWidth <= 720) {
    var img = document.querySelector(".hero-img");
    var imgHeight = img.offsetHeight;
   
    heroSection.style.marginTop = imgHeight - 50 + "px";
  } else {
    heroSection.style.marginTop = "5rem";
  }
});




/*FAQ*/

const questions = document.querySelectorAll(".question .question-heading");

questions.forEach((q) => {
  q.addEventListener("click", () => {
    let question = q.parentElement;
    // questions.forEach((que) => {
    //   queParent = que.parentElement;
    //   queParent.classList.remove("expand-question");
    // });
    question.classList.toggle("expand-question");
  });
});



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
          if (
            year < today.getFullYear() ||
            (year === today.getFullYear() && month < today.getMonth())
          ) {
            // If the year and month are in the past, disable the cell
            cell.classList.add("disabled");
          } else if (
            year === today.getFullYear() &&
            month === today.getMonth() &&
            date < today.getDate()
          ) {
            // If the date is in the past in the current month, disable the cell
            cell.classList.add("disabled");
          } else {
            // Otherwise, add the click event listener to select the cell
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
              arrDate.textContent = formattedDate;
            });
          }

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
const depDate = document.querySelector(".depart-date");
createCalendar(calendars[0], arrDate);
createCalendar(calendars[1], depDate);

const calendar = document.querySelector("#picker-1");
const secCalendar = document.querySelector("#picker-2");

const dateTrigger = document.querySelector(".date-triger");
const dateTriggerTwo = document.querySelector(".date-trigger-2");
const calendarControls = document.querySelectorAll("#calendar .header button");
const ignoreEl = document.querySelectorAll(".ignore");

// Add an event listener to the first input group
dateTrigger.addEventListener("click", function () {
  // Add the active class to the calendar
  calendar.classList.add("date-picker-active");
});

dateTriggerTwo.addEventListener("click", function () {
  // Add the active class to the calendar
  secCalendar.classList.add("date-picker-active");
});

// Add an event listener to the document
document.addEventListener("click", function (event) {
  // Check if the clicked element is not the first input group or the calendar

  if (
    event.target !== dateTrigger &&
    event.target !== calendar &&
    !event.target.classList.contains("ignore") &&
    !event.target.classList.contains("disabled")
  ) {
    // Remove the active class from the calendar
    calendar.classList.remove("date-picker-active");
  }
});

document.addEventListener("click", function (event) {
  // Check if the clicked element is not the first input group or the calendar

  if (
    event.target !== dateTriggerTwo &&
    event.target !== secCalendar &&
    !event.target.classList.contains("ignore") &&
    !event.target.classList.contains("disabled")
  ) {
    // Remove the active class from the calendar
    secCalendar.classList.remove("date-picker-active");
  }
});

ignoreEl.forEach((el) => {
  el.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});

const selectTrigger = document.querySelector(".select-trigger");
const selector = document.querySelector(".type-selector");
const selectValue = document.querySelector(".type-dropdown .input-value");
const options = document.querySelectorAll(".type-selector .option");
selectTrigger.addEventListener("click", () => {
  selector.classList.add("type-selector-active");
  selector.parentElement.classList.add("input-option-active");
});

document.addEventListener("click", function (event) {
  if (event.target !== selector && event.target !== selectTrigger) {
    selector.classList.remove("type-selector-active");
    selector.parentElement.classList.remove("input-option-active");
  }
});

/*guests calculator*/

const total = document.querySelector(".guest-value");
const guestTrigger = document.querySelector(".guest-input-trigger");
const guestForm = document.querySelector(".guest-input-form");
const doneBtn = document.querySelector(".done-btn");

guestTrigger.addEventListener("click", () => {
  guestForm.classList.add("guest-input-form-active");
});

document.addEventListener("click", function (event) {
  if (event.target !== guestForm && event.target !== guestTrigger) {
    guestForm.classList.remove("guest-input-form-active");
  }
});

guestForm.addEventListener("click", () => {
  event.stopPropagation();
});

doneBtn.addEventListener("click", () => {
  guestForm.classList.remove("guest-input-form-active");
});

const adultCalc = document.querySelector("#adult-calc");
const aldutInput = adultCalc.querySelector(".result");
aldutInput.value = 0;
const adultAdd = adultCalc.querySelector(".add");
const adultSub = adultCalc.querySelector(".sub");

const childCalc = document.querySelector("#child-calc");
const childInput = childCalc.querySelector(".result");
childInput.value = 0;
const childAdd = childCalc.querySelector(".add");
const childSub = childCalc.querySelector(".sub");

options.forEach((option) => {
  option.addEventListener("click", () => {
    selectValue.textContent = option.textContent;
    options.forEach((opt) => {
      opt.classList.remove("selected-option");
    });
    option.classList.add("selected-option");

    if (option.textContent === "Conference Only") {
      guestTrigger.style.display = "none";
      total.textContent = "70 Seats Max";
      aldutInput.value = 0;
      childInput.value = 0;

      guestForm.classList.remove("guest-input-form-active");
    } else {
      guestTrigger.style.display = "block";
      total.textContent = "0";
    }
  });
});

adultAdd.addEventListener("click", () => {
  if (parseInt(aldutInput.value) < 14) {
    aldutInput.value = parseInt(aldutInput.value) + 1;
    total.textContent = parseInt(total.textContent) + 1;
  }
});

adultSub.addEventListener("click", () => {
  if (parseInt(aldutInput.value) > 0) {
    aldutInput.value = parseInt(aldutInput.value) - 1;
    total.textContent = parseInt(total.textContent) - 1;
  }
});

childAdd.addEventListener("click", () => {
  if (parseInt(childInput.value) < 14) {
    childInput.value = parseInt(childInput.value) + 1;
    total.textContent = parseInt(total.textContent) + 1;
  }
});

childSub.addEventListener("click", () => {
  if (parseInt(childInput.value) > 0) {
    childInput.value = parseInt(childInput.value) - 1;
    total.textContent = parseInt(total.textContent) - 1;
  }
});

const numInputs = document.querySelectorAll(".num-input input");

numInputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (parseInt(input.value) > 14) {
      input.value = 14;
    }
  });

  input.addEventListener("change", () => {
    var inputOne = numInputs[0];
    var inputTwo = numInputs[1];

    total.textContent = parseInt(inputOne.value) + parseInt(inputTwo.value);
  });
});

function highlightRes() {
  const resBar = document.getElementById("reservation");

  resBar.classList.add("highlighted");

  window.setTimeout(() => {
    resBar.classList.remove("highlighted");
  }, 3000);
}

function setFocus(on) {
  var element = document.activeElement;
  if (on) {
    setTimeout(function () {
      element.parentNode.classList.add("focus");
    });
  } else {
    let box = document.querySelector(".input-box");
    box.classList.remove("focus");
    $("input").each(function () {
      var $input = $(this);
      var $parent = $input.closest(".input-box");
      if ($input.val()) $parent.addClass("focus");
      else $parent.removeClass("focus");
    });
  }
}
