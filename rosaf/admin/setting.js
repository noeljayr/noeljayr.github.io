const editBtns = document.querySelectorAll(".edit-btn");
const save = document.querySelector(".save-settings");
editBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let input = btn.parentElement.querySelector("input");
    let originalValue = input.value;
    input.removeAttribute("readonly");
    input.focus();
    input.classList.add("editable");

    input.addEventListener("input", () => {
      if (originalValue !== input.value && input.value.length > 0) {
        save.style.display = "flex";
      } else {
        save.style.display = "none";
      }
    });

    input.addEventListener("blur", () => {
      if (originalValue == input.value) {
        input.setAttribute("readonly", "");
        input.classList.remove("editable");
      } else if (input.value.length < 1) {
        input.value = originalValue;
        input.setAttribute("readonly", "");
        input.classList.remove("editable");
      }
    });
  });
});

const settingsIcon = document.querySelector(".settings");
const settingsForm = document.querySelector(".settings-form");
const closeSettings = document.querySelector(".discard-edit");
const inputs = settingsForm.querySelectorAll(".text-input");
let originalValues = ["", "", "", ""];

for (let i = 0; i < inputs.length; i++) {
  originalValues[i] = inputs[i].value;

}

settingsIcon.addEventListener("click", () => {
  settingsForm.classList.add("settings-form-active");
});

closeSettings.addEventListener("click", () => {
  const inputBoxs = settingsForm.querySelectorAll(".text-input");
  for (let i = 0; i < inputBoxs.length; i++) {
    inputBoxs[i].value = originalValues[i];
    console.log(inputBoxs[i].value);
  }

  settingsForm.classList.remove("settings-form-active");
  inputs.forEach((input) => {
    input.setAttribute("readonly", "");
    input.classList.remove("editable");
  })
  save.style.display = "none";
});



function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $("#imagePreview").css(
        "background-image",
        "url(" + e.target.result + ")"
      );
      $("#imagePreview").hide();
      $("#imagePreview").fadeIn(650);
    };
    reader.readAsDataURL(input.files[0]);
  }
}
$("#imageUpload").change(function () {
  readURL(this);
});