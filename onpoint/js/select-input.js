const selectorTrigger = document.querySelector(".selector-trigger");
const selectedT = document.querySelector(".select .selected");
const selector = document.querySelector(".option-selector .select");
const options = document.querySelectorAll(".options span");

const formSelect = document.getElementById("select");

selectorTrigger.addEventListener("click", (e) => {
  selectorTrigger.classList.toggle("selector-trigger-active");
  selector.classList.toggle("select-active");

  e.stopPropagation();
});

selectedT.addEventListener("click", () => {
  selectorTrigger.classList.toggle("selector-trigger-active");
  selector.classList.toggle("select-active");
});

window.addEventListener("click", (e) => {
  if (
    e.target != selectorTrigger &&
    e.target != selectedT &&
    e.target != selector
  ) {
    selectorTrigger.classList.remove("selector-trigger-active");
    selector.classList.remove("select-active");
  }
});

options.forEach((o) => {
  o.addEventListener("click", () => {
    options.forEach((op) => {
      op.classList.remove("selected-option");
    });
    o.classList.add("selected-option");

    formSelect.value = o.textContent.trim();
    var event = new Event("change");

    // Dispatch the event on the element
    formSelect.dispatchEvent(event);
    selectedT.textContent = o.textContent.trim();

    if (page === "reg") {
       var submitBtn = document.querySelector("form button");
       var appForm = document.querySelector("form");
    

       function preventDefaultBehaviour(event) {
         event.preventDefault();
         showApplicationMode();
       }

      

       function handleFormSelectChange() {
         if (formSelect.value == "Loan") {
           showApplicationMode();
           submitBtn.addEventListener("click", showApplicationMode);
           appForm.addEventListener("submit", preventDefaultBehaviour);
         } else {
           submitBtn.removeEventListener("click", showApplicationMode);
           appForm.removeEventListener("submit", preventDefaultBehaviour);
         }
       }

       // Initial check
       handleFormSelectChange();

       // Event listener for changes to the select element
       formSelect.addEventListener("change", handleFormSelectChange);
    }
  });
});

// formSelect.addEventListener("change", () => {
//   console.log(formSelect.value);
// });
