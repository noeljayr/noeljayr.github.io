const editBtns = document.querySelectorAll(".edit-btn");
const save = document.querySelector(".save-settings");


const settingsForm = document.querySelector(".settings-form");
const closeSettings = document.querySelector(".discard-edit");
const inputs = settingsForm.querySelectorAll(".text-input");
const editPassword = settingsForm.querySelector(".edit-password");
const hiddenEls = settingsForm.querySelectorAll(".hidden");
const currentPassword = settingsForm.querySelector("#current-password");
const newPassword = document.querySelector(".new-password-group");
newPassword.value = currentPassword.value;

editBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let input = btn.parentElement.querySelector("input");
    let originalValue = input.value;
    input.removeAttribute("readonly");
    input.focus();
    input.classList.add("editable");

    // input.addEventListener("input", () => {
    //   if (originalValue !== input.value && input.value.length > 0 || newPassword != currentPassword) {
    //     save.style.display = "flex";
    //   } else {
    //     save.style.display = "none";
    //   }
    // });

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

let originalValues = ["", "", "", ""];

for (let i = 0; i < inputs.length; i++) {
  originalValues[i] = inputs[i].value;
}

editPassword.addEventListener("click", () => {
  newPassword.value = "";
  editPassword.parentElement.style.display = "none";
  hiddenEls.forEach((el) => {
    el.style.display = "flex";
    let elInput = el.querySelector("input");
    elInput.removeAttribute("readonly");
    elInput.classList.add("editable");

    elInput.addEventListener("change", () => {
      // if (oldPassword.value == currentPassword.value && newPassword.value == confirmPassword.value) {
      //   save.style.display = "flex";
      // } else {
      //    save.style.display = "none";
      // }
    });
  });
});



closeSettings.addEventListener("click", () => {
  const inputBoxs = settingsForm.querySelectorAll(".text-input");
  for (let i = 0; i < inputBoxs.length; i++) {
    inputBoxs[i].value = originalValues[i];
    console.log(inputBoxs[i].value);
  }

  
  inputs.forEach((input) => {
    input.setAttribute("readonly", "");
    input.classList.remove("editable");
  });

  hiddenEls.forEach((el) => {
    el.style.display = "none";
    let elInput = el.querySelector("input");
    elInput.setAttribute("readonly", "");
    elInput.classList.remove("editable");
  });
  editPassword.parentElement.style.display = "flex";
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
