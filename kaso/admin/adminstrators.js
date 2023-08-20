const adminCards = document.querySelectorAll(".admin-card");

adminCards.forEach((card) => {
  let profilePic = card.querySelector("img");
  if (profilePic == null) {
    card.classList.add("no-profile-img");
  } else {
    card.classList.remove("no-profile-img");
  }
});

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

const addCard = document.querySelector(".add-card span");
const addForm = document.querySelector(".add-form");
const discardBtn = document.querySelector(".discard-btn");

addCard.addEventListener("click", () => {
  addForm.classList.add("add-form-active");
});

discardBtn.addEventListener("click", () => {
  addForm.classList.remove("add-form-active");
});

const disableBtns = document.querySelectorAll(".disable-admin");

disableBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const parentEl = btn.parentElement.parentElement;
    parentEl.classList.add("disable-admin-active");
  });
});

const disableCancelBtns = document.querySelectorAll(".cancel-conf");
disableCancelBtns.forEach((cancel) => {
  cancel.addEventListener("click", () => {
    const parentEl = cancel.parentElement.parentElement.parentElement;
    parentEl.classList.remove("disable-admin-active");
  });
});

const confirmDisable = document.querySelectorAll(".confirm");
confirmDisable.forEach((confirm) => {
  confirm.addEventListener("click", () => {
    const parentEl = confirm.parentElement.parentElement.parentElement;
    parentEl.classList.remove("disable-admin-active");
    let adminStatus = parentEl.querySelector(".info-status");
    adminStatus.textContent = "Disabled";
    parentEl.classList.add("disabled");
  });
});

const enableBtns = document.querySelectorAll(".enable-admin");
enableBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const parentEl = btn.parentElement.parentElement;
    let adminStatus = parentEl.querySelector(".info-status");
    adminStatus.textContent = "Enabled";
    parentEl.classList.remove("disabled");
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

checkDisabled();

const view = document.querySelector(".view-admin");
const closeView = document.querySelector(".close-btn");
const viewAdminBtns = document.querySelectorAll(".view-admin-btn");
const viewDisable = document.querySelector(".view-disable-btn");
const viewEnable = document.querySelector(".view-enable-btn");
const phone = document.querySelector(".phone");
const fname = document.querySelector(".fName");
const lname = document.querySelector(".lName");
const email = document.querySelector(".email");
const userId = document.querySelector(".user-id");
const adminStatus = document.querySelector(".view-admin .active-status");
const profilePic = document.querySelector(".profile-img");

viewAdminBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let card = btn.parentElement.parentElement;
    fname.textContent = card.querySelector(".info-fname").textContent;
    lname.textContent = card.querySelector(".info-lname").textContent;
    phone.textContent = card.querySelector(".info-phone").textContent;
    email.textContent = card.querySelector(".info-email").textContent;
    userId.textContent = card.querySelector(".info-user-id").textContent;
    adminStatus.textContent = card.querySelector(".info-status").textContent;
    let avatar = document.querySelector(".view-admin .profile-img i");

    let cardPic = card.querySelector("img");
    if (cardPic == null) {
      avatar.style.display = "flex";
      if (profilePic.querySelector("img")) {
        profilePic.removeChild(profilePic.querySelector("img"));
      }
    } else {
      if (!profilePic.querySelector("img")) {
        let img = document.createElement("img");
        avatar.style.display = "none";
        img.src = cardPic.src;
        profilePic.appendChild(img);
      }
    }
    checkDisabled();
    view.classList.add("view-admin-active");
  });
});

viewDisable.addEventListener("click", () => {
  let id = userId;
  const cards = document.querySelectorAll(".admin-card");
  cards.forEach((card) => {
    if (card.querySelector(".info-user-id").textContent == id.textContent) {
      card.classList.add("disabled");
      card.querySelector(".info-status").textContent = "Disabled";
      adminStatus.textContent = "Disabled";
       checkDisabled();
    }
  });
});

viewEnable.addEventListener("click", () => {
  let id = userId;
  const cards = document.querySelectorAll(".admin-card");
  cards.forEach((card) => {
    if (card.querySelector(".info-user-id").textContent == id.textContent) {
      card.classList.remove("disabled");
      card.querySelector(".info-status").textContent = "Enabled";
      adminStatus.textContent = "Enabled"
        checkDisabled();
    }
  });
});

closeView.addEventListener("click", () => {
  view.classList.remove("view-admin-active");
});
