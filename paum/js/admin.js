const stuff = document.querySelector(".stuff");
const partners = document.querySelector(".admin-p");
const partnersHeader = document.querySelector(".s-p-header");
const stuffHeader = document.querySelector(".s-s-header");
const partnersIcon = document.querySelector(".partners-icon");
const blogsIcon = document.querySelector(".blogs-icon");
const blogs = document.querySelector(".admin-blogs");
const adminTable = document.querySelector(".admin-table");
const adminTHeader = document.querySelector(".s-ad-header");
const adminsIcon = document.querySelector(".admins-icon");

partnersIcon.addEventListener("click", () => {
  stuff.style.display = "none";
  stuffHeader.style.display = "none";
  adminTHeader.classList.remove("active-section");
  blogs.classList.remove("active-section");
  adminTable.classList.remove("active-section");
  partners.classList.add("active-section");
  partnersHeader.classList.add("active-section");
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
});

blogsIcon.addEventListener("click", () => {
  stuff.style.display = "none";
  stuffHeader.style.display = "none";
  adminTHeader.classList.remove("active-section");
  adminTable.classList.remove("active-section");
  partners.classList.remove("active-section");
  partnersHeader.classList.remove("active-section");
  blogs.classList.add("active-section");
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
});

adminsIcon.addEventListener("click", () => {
  stuff.style.display = "none";
  stuffHeader.style.display = "none";
  partners.classList.remove("active-section");
  partnersHeader.classList.remove("active-section");
  blogs.classList.remove("active-section");
  adminTHeader.classList.add("active-section");
  adminTable.classList.add("active-section");
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
});

document.querySelectorAll(".navlink").forEach((link) =>
  link.addEventListener("click", () => {
    hamburger.classList.add("active");
    navMenu.classList.add("active");
  })
);

const settingsNav = document.getElementById("settings-nav");
const settingDrop = document.querySelector(".settings-drop");

settingsNav.addEventListener("click", () => {
  settingDrop.classList.toggle("drop-active");
});

window.addEventListener("click", function (e) {
  if (settingsNav.contains(e.target)) {
  } else {
    settingDrop.classList.remove("drop-active");
  }
});

const dashItems = document.querySelectorAll(".dash-item");
const overlay = document.querySelector(".overlay");
const addNews = document.querySelectorAll(".add-btn");

dashItems.forEach((dashitem) => {
  dashitem.addEventListener("click", () => {
    overlay.classList.add("overlay-active");
  });
});

addNews.forEach((addNew) => {
  addNew.addEventListener("click", () => {
    overlay.classList.add("overlay-active");
  });
});

/* Input forms on quick actions*/

const adminForm = document.querySelector(".admin-form-wrapper");
const partnerForm = document.querySelector(".partner-form-wrapper");
const postForm = document.querySelector(".post-form-wrapper");
const infoForm = document.querySelector(".edit-form-wrapper");
const stuffForm = document.querySelector(".stuff-form-wrapper");
const addButton = document.getElementById("stuff-add");
const cancel = document.querySelectorAll(".cancel");

/*Stuff inputs*/

const sAddBtn = document.getElementById("s-m-add-btn");
const fnameInput = document.getElementById("stuff-f-name");
const lnameInput = document.getElementById("stuff-l-name");
const stuffPosition = document.getElementById("stuff-position");

/*Partner inputs*/

const pNameInput = document.getElementById("p-name-input");
const pWebInput = document.getElementById("p-web-input");
const pDescInput = document.getElementById("p-desc-input");
const pAddBtn = document.getElementById("p-add-btn");

const postDash = dashItems[0];
const adminDash = dashItems[1];
const partnerDash = dashItems[2];
const infoDash = dashItems[3];

adminDash.addEventListener("click", () => {
  adminForm.style.display = "block";
});

postDash.addEventListener("click", () => {
  postForm.style.display = "block";
});

partnerDash.addEventListener("click", () => {
  partnerForm.style.display = "block";
});

infoDash.addEventListener("click", () => {
  infoForm.style.display = "block";
});

addButton.addEventListener("click", () => {
  stuffForm.style.display = "block";
  fnameInput.value = "";
  lnameInput.value = "";
  stuffPosition.value = "";
  sAddBtn.textContent = "Add";
});

cancel.forEach((btn) => {
  btn.addEventListener("click", () => {
    overlay.classList.remove("overlay-active");
    adminForm.style.display = "none";
    partnerForm.style.display = "none";
    infoForm.style.display = "none";
    postForm.style.display = "none";
    stuffForm.style.display = "none";
    adminForm.style.display = "none";
    passwordForm.style.display = "none";

    /*stuff edit */
    fnameInput.value = "";
    lnameInput.value = "";
    stuffPosition.value = "";
    sAddBtn.textContent = "Add";

    /*patner edit*/
    pNameInput.value = "";
    pWebInput.value = "";
    pDescInput.value = "";
    pAddBtn.textContent = "Add";

    /*pos edit*/
    postTitleInput.value = "";
    postInfoInput.value = "";
    postBtn.textContent = "Post";
  });
});

/* Remove Confirm PopUP */

const removeButtons = document.querySelectorAll(".stuff-button");
const pRemoveBnts = document.querySelectorAll(".p-button");
const bRemoveBtns = document.querySelectorAll(".blog-button");

removeButtons.forEach((removeButton) => {
  removeButton.addEventListener("click", () => {
    var parent = removeButton.parentElement;
    var SuperParent = parent.parentElement;
    SuperParent.classList.add("confirm-active");
  });
});

pRemoveBnts.forEach((removeButton) => {
  removeButton.addEventListener("click", () => {
    var parent = removeButton.parentElement;
    var parentUpper = parent.parentElement;
    var superParent = parentUpper.parentElement;
    superParent.classList.add("confirm-active");
  });
});

bRemoveBtns.forEach((removeButton) => {
  removeButton.addEventListener("click", () => {
    var parent = removeButton.parentElement;
    var parentUpper = parent.parentElement;
    var superParent = parentUpper.parentElement;
    superParent.classList.add("confirm-active");
  });
});

const noButtons = document.querySelectorAll(".no");
const yesButtons = document.querySelectorAll(".yes");

noButtons.forEach((noButton) => {
  noButton.addEventListener("click", () => {
    var parent = noButton.parentElement;
    var parentUpper = parent.parentElement;
    var superParent = parentUpper.parentElement;
    superParent.classList.remove("confirm-active");
  });
});

yesButtons.forEach((yesButton) => {
  yesButton.addEventListener("click", () => {
    var parent = yesButton.parentElement;
    var parentUpper = parent.parentElement;
    var superParent = parentUpper.parentElement;
    superParent.style.display = "none";
  });
});

/*Edit stuff */

const editButtons = document.querySelectorAll(".stuff-button-edit");

editButtons.forEach((editButton) => {
  editButton.addEventListener("click", () => {
    overlay.classList.add("overlay-active");
    stuffForm.style.display = "block";

    var parent = editButton.parentElement;
    var parentUpper = parent.parentElement;
    var fname = parentUpper.querySelector(".s-m-fname");
    var lname = parentUpper.querySelector(".s-m-lname");
    var position = parentUpper.querySelector(".s-card-position");

    fnameInput.value = fname.textContent;
    lnameInput.value = lname.textContent;
    stuffPosition.value = position.textContent;
    sAddBtn.textContent = "Save";
  });
});

/*Edit Partner*/

const pEditbtns = document.querySelectorAll(".p-button-edit");

pEditbtns.forEach((editButton) => {
  editButton.addEventListener("click", () => {
    overlay.classList.add("overlay-active");
    partnerForm.style.display = "block";

    var parent = editButton.parentElement;
    var parentUpper = parent.parentElement;
    var superParent = parentUpper.parentElement;
    var pname = superParent.querySelector(".p-name");
    var pweb = superParent.querySelector(".p-web");
    var pdesc = superParent.querySelector(".p-info");

    // var lname = parentUpper.querySelector(".s-m-lname");
    // var position = parentUpper.querySelector(".s-card-position");
    pNameInput.value = pname.textContent;
    pWebInput.value = pweb.textContent;
    pDescInput.value = pdesc.innerText;
    pAddBtn.textContent = "Save";
  });
});

/*Edit blog */

const bEditbtns = document.querySelectorAll(".blog-button-edit");
const postBtn = document.getElementById("blog-post-btn");
const postTitleInput = document.getElementById("blog-title-input");
const postInfoInput = document.getElementById("blog-info-input");

bEditbtns.forEach((beditButton) => {
  beditButton.addEventListener("click", () => {
    overlay.classList.add("overlay-active");
    postForm.style.display = "block";

    var parent = beditButton.parentElement;
    var parentUpper = parent.parentElement;
    var superParent = parentUpper.parentElement;
    var blogTitle = superParent.querySelector(".blog-title");
    var blogInfo = superParent.querySelector(".blog-info");

    postTitleInput.value = blogTitle.textContent;
    postInfoInput.value = blogInfo.innerText;
    postBtn.textContent = "Save";
   
  });
});

/*Personal Information */

const passworOption = document.querySelector(".password-reset");
const passwordForm = document.querySelector(".password-form");
const addTitle = document.getElementById("admin-title-header");
const adminAddbtn = document.getElementById("admin-add-btn");
const editPersonal = document.getElementById("edit-option");

editPersonal.addEventListener("click", () => {
  adminForm.style.display = "block";
  addTitle.textContent = "Personal Information";
  adminAddbtn.textContent = "Save";
  overlay.classList.add("overlay-active");
});

passworOption.addEventListener("click", () => {
  passwordForm.style.display = "block";
  overlay.classList.add("overlay-active");
});

const showIcons = document.querySelectorAll(".lets-show");

showIcons.forEach((showIcon) => {
  showParent = showIcon.parentElement;
  showParentUpper = showParent.parentElement;
  var inputField = showParentUpper.querySelector(".password-input");

  showIcon.addEventListener("click", () => {
    if (showIcon.classList.contains("fa-eye")) {
      showIcon.classList.toggle("fa-eye-slash");
      showIcon.classList.toggle("fa-eye");

      inputField.setAttribute("type", "text");
    } else {
      inputField.setAttribute("type", "password");

      showIcon.classList.toggle("fa-eye");
      showIcon.classList.toggle("fa-eye-slash");
    }
  });
});
