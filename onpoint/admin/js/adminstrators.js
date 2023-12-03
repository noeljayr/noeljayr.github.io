const adminCards = document.querySelectorAll(".admin-card");

adminCards.forEach((card) => {
  let profilePic = card.querySelector("img");
  if (profilePic == null) {
    card.classList.add("no-profile-img");
  } else {
    card.classList.remove("no-profile-img");
  }
});

const addCard = document.querySelector(".add-card span");
const addForm = document.querySelector(".add-form");
const discardBtn = document.querySelector(".discard-btn");
var overlay = document.querySelector(".modal-overlay");

function initializeModal(btn, modal) {
  btn.addEventListener("click", () => {
    modal.classList.add("modal-form-active");
    overlay.classList.add("overlay-active");
  });

  modal.querySelector(".discard-btn").addEventListener("click", () => {
    modal.reset();
    overlay.classList.remove("overlay-active");
    modal.classList.remove("modal-form-active");
    disableForm.reset();
    enableForm.reset();
  });

  overlay.addEventListener("click", () => {
    var modals = document.querySelectorAll(".modal-form");
    modals.forEach((modal) => {
      modal.classList.remove("modal-form-active");
      overlay.classList.remove("overlay-active");
      view.classList.remove("view-admin-active");
      disableForm.reset();
      enableForm.reset();
    });
  });
}

initializeModal(addCard, addForm);

const disableCancelBtns = document.querySelectorAll(".cancel-conf");
disableCancelBtns.forEach((cancel) => {
  cancel.addEventListener("click", () => {
    const parentEl = cancel.parentElement.parentElement.parentElement;
    parentEl.classList.remove("disable-admin-active");
  });
});


function checkDisabled() {
  const activeStatus = document.querySelector(".view-admin .active-status");
  const viewEnablebtn = document.querySelector(".view-enable-btn");
  const viewDisableBtn = document.querySelector(".view-disable-btn");
  if (activeStatus.textContent == "Enabled") {
    viewDisableBtn.style.display = "flex";
    viewEnablebtn.style.display = "none";
    activeStatus.classList.remove("disabled-status");
    activeStatus.classList.add("enabled-status");
  } else {
    viewDisableBtn.style.display = "none";
    viewEnablebtn.style.display = "flex";
    activeStatus.classList.remove("enabled-status");
    activeStatus.classList.add("disabled-status");
  }
}

const view = document.querySelector(".view-admin");
const closeView = document.querySelector(".close-btn");
const viewAdminBtns = document.querySelectorAll(".view-admin-btn");
const viewDisable = document.querySelector(".view-disable-btn");
const viewEnable = document.querySelector(".view-enable-btn");

const enableForm = document.getElementById("admin-enable-form");
const disableForm = document.getElementById("admin-disable-form");

// submit disableForm

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("confirm")) {
    disableForm.querySelector("button").click()
  }
});


viewEnable.addEventListener("click", () => {
  disableForm.querySelector("button").click();

});


viewDisable.addEventListener("click", () => {
  disableForm.querySelector("button").click();
});

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("action-view-overlay")) {
    var btn = e.target;

    view.classList.add("view-admin-active");
    overlay.classList.add("overlay-active");

    var parentEl = btn.parentElement.parentElement.parentElement;
    admins.forEach((a) => {
      if (a.id == parentEl.id) {
        // var id = view.querySelector(".user-id");
        var fName = view.querySelector(".fName");
        var lName = view.querySelector(".lName");
        var phone = view.querySelector(".phone");
        var email = view.querySelector(".email");
        var status = view.querySelector(".active-status");

        // id.textContent = a.id;

        enableForm.querySelector("input").value = a.id;
        disableForm.querySelector("input").value = a.id;

        fName.textContent = a.fname;
        lName.textContent = a.lname;
        phone.textContent = a.phone;
        email.textContent = a.email;
        status.textContent = a.status;

        checkDisabled();
      }
    });
  } else if (e.target.classList.contains("action-disable-overlay")) {
    var btn = e.target;
    var parentEl = btn.parentElement.parentElement.parentElement;
    disableForm.querySelector("input").value = parentEl.id;
    parentEl.classList.add("disable-admin-active");
  } else if (e.target.classList.contains("action-enable-overlay")) {
    var btn = e.target;
    var parentEl = btn.parentElement.parentElement.parentElement;
    enableForm.querySelector("input").value = parentEl.id;

    enableForm.querySelector("button").click();
  }
});

closeView.addEventListener("click", () => {
  view.classList.remove("view-admin-active");
  overlay.classList.remove("overlay-active");
  disableForm.reset();
  enableForm.reset();
});

disableForm.reset();
enableForm.reset();
