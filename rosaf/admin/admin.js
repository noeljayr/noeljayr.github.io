const discriptBtn = document.querySelector(".descript-btn");
const eventDiscript = document.querySelector(".up-coming-event p");
const eventClose = document.querySelector(".discrpt-mordal .close");
const eventModal = document.querySelector(".discrpt-mordal");

discriptBtn.addEventListener("click", () => {
  eventModal.querySelector("p").innerHTML = eventDiscript.innerHTML;
  eventModal.classList.add("discrpt-mordal-active");
});

eventClose.addEventListener("click", () => {
  eventModal.querySelector("p").innerHTML = "";
  eventModal.classList.remove("discrpt-mordal-active");
});

const events = document.querySelectorAll(".up-coming-event");

events.forEach((event) => {
  checkDate(event);
});

function checkDate(x) {
  // Input date in the format "15 July 2023"
  var inputDate = x.querySelector(".event-start-date").textContent;

  // Convert the input date string to a Date object
  var dateParts = inputDate.split(" ");
  var year = parseInt(dateParts[2]);
  var month = new Date(Date.parse(dateParts[1] + " 1, " + year)).getMonth();
  var day = parseInt(dateParts[0]);
  var inputDateObj = new Date(year, month, day);

  // Get the current date
  var currentDate = new Date();

  // Compare the input date with the current date
  if (inputDateObj < currentDate) {
    console.log("passed");
  } else {
    console.log("not passed");
  }
}
