let occuppied = 12;

/* 
The max number of bookings is 28
so pass the number of bookings to the occupied the calculations will be based on that
when user checks out it dedacts from the number
this percentage is based on daily basis, meaning bookings for any day after the current day (today)
is not counted.
it will be better if this data changes when the day starts.
also this is for the number of people who are scheduled to check in today


the use of the percentage is so that admin can either reject or approve booking based on how full the hotel is.

*/

let percentage = occuppied / 28;

const spanPercentage = document.querySelector(".percentage");
// console.log(percentage.toFixed(2));
spanPercentage.textContent = percentage.toFixed(1) * 100 + "%";
var percentageComplete = percentage.toFixed(2);
var strokeDashOffsetValue = 100 - percentageComplete * 100;
var progressBar = $(".js-progress-bar");
progressBar.css("stroke-dashoffset", strokeDashOffsetValue);

const monthName = document.querySelector(".month-name");
const months = [
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

const currentDate = new Date();
const currentMonth = months[currentDate.getMonth()];

monthName.textContent = currentMonth;

