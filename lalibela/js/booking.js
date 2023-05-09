const hideOnBook = document.querySelectorAll(".hide-on-book");
const booking = document.querySelector(".booking");
const bookBnt = document.querySelector(".reservation .cta");
var arrivalDate = document.querySelector(".arrival-date");
var depatDate = document.querySelector(".depart-date");
var type = document.querySelector(".type-dropdown .input-value");

var validated = false;
bookBnt.addEventListener("click", () => {
  
 
  const toast = document.querySelector(".error-toast");
  var secTrigger = document.querySelector(".date-trigger-2");
  var firsTrigger = document.querySelector(".date-triger");


  const guestTrigger = document.querySelector(".guest-input-trigger");
  const typeSelector = document.querySelector(
    ".type-dropdown .input-value"
  ).textContent;
  var totalGuests = document.querySelector(".guest-value");
  var adultValue = document.querySelector("#adult-calc .result").value;
  var childValue = document.querySelector("#child-calc .result").value;
  const dateStrOne = arrivalDate.textContent;
  const dateStrTwo = depatDate.textContent;

  const date1 = new Date(dateStrOne);
  const date2 = new Date(dateStrTwo);

  if (
    depatDate.textContent != "Select date" &&
    arrivalDate.textContent != "Select date" &&
    date1 <= date2 &&
    totalGuests.textContent != "0"
  ) {
    hideOnBook.forEach((el) => {
      el.style.display = "none";
      booking.style.display = "flex";
    });

    const checkIn = document.querySelector(".check-in-input");
    const checkOut = document.querySelector(".check-out-input");
    const typeInput = document.querySelector(".type-input");
    const guests = document.querySelector(".guests-input");

    checkIn.value = dateStrOne;
    checkOut.value = dateStrTwo;
    typeInput.value = typeSelector;

    if (totalGuests.textContent === "70 Seats Max") {
      guests.value = "Only Conference Room";
    } else {
      guests.value =
        totalGuests.textContent +
        " Guests (" +
        adultValue +
        " Adults and " +
        childValue +
        " Children)";
    }

    guestTrigger.style.border = "0px solid red";
    secTrigger.classList.remove("date-trigger-2-error");
    firsTrigger.style.border = "0px solid red";

     if (windowWidth <= 720) {
       // var checkHeight = () => {
       //   var img = document.querySelector(".hero-img");
       //   var imgHeight = img.offsetHeight;
       //   console.log(imgHeight);
       // };
        heroSection.style.marginTop = imgHeight - 50 + "px";
     } else {
       heroSection.style.marginTop = "5rem";
     }
  } else {
    if (
      depatDate.textContent != "Select date" &&
      arrivalDate.textContent != "Select date"
    ) {
      if (date1 > date2) {
        toast.classList.add("toast-active");
        secTrigger.classList.add("date-trigger-2-error");
        window.setTimeout(() => {
          toast.classList.remove("toast-active");
        }, 3000);
      } else {
        secTrigger.classList.remove("date-trigger-2-error");
      }
    } else {
      if (arrivalDate.textContent === "Select date") {
        firsTrigger.style.border = "1px solid red";
      } else {
        firsTrigger.style.border = "0px solid red";
      }

      if (depatDate.textContent === "Select date") {
        secTrigger.classList.add("date-trigger-2-error");
      } else {
        secTrigger.classList.remove("date-trigger-2-error");
      }
    }
    if (totalGuests.textContent === "0") {
      guestTrigger.style.border = "1px solid red";
    } else {
      guestTrigger.style.border = "0px solid red";
    }
  }
});

const validateInput = () => {};

const cancelBooking = document.querySelector(".cancel-booking");

cancelBooking.addEventListener("click", () => {
  hideOnBook.forEach((el) => {
    el.style.display = "";
    booking.style.display = "none";
  });
});
