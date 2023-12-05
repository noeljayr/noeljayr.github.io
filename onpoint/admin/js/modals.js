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
  });

  overlay.addEventListener("click", () => {
    var modals = document.querySelectorAll(".modal-form");
    modals.forEach((modal) => {
      modal.classList.remove("modal-form-active");
      overlay.classList.remove("overlay-active");
    });
  });
}

function initilalizeDeleteModal(btn, modal) {
  var row = btn.parentElement.parentElement.parentElement;
  var name = row.querySelector(".name").textContent;
  var input = modal.querySelector("input");

  input.value = row.id;

  modal.querySelector("p span").textContent = name.trim();

  modal.classList.add("modal-form-active");
  overlay.classList.add("overlay-active");

  modal.querySelector(".discard-btn").addEventListener("click", () => {
    modal.reset();
    overlay.classList.remove("overlay-active");
    modal.classList.remove("modal-form-active");
  });

  overlay.addEventListener("click", () => {
    var modals = document.querySelectorAll(".modal-form");
    modals.forEach((modal) => {
      modal.classList.remove("modal-form-active");
      overlay.classList.remove("overlay-active");
    });
  });
}

function initilalizeEditModal(btn, modal) {
  var member = btn.parentElement.parentElement;
  var name = member.querySelector(".name").textContent;
  var position = member.querySelector(".position").textContent;
  var id = member.id;
  var img = member.querySelector("img").src;

  $("#editImagePreview").css("background-image", "url(" + img + ")");

  modal.querySelector("#member-id").value = id;
  modal.querySelector("#position").value = position;
  modal.querySelector("#name").value = name;

  modal.classList.add("modal-form-active");
  overlay.classList.add("overlay-active");

  modal.querySelector(".discard-btn").addEventListener("click", () => {
    modal.reset();
    overlay.classList.remove("overlay-active");
    modal.classList.remove("modal-form-active");
  });

  overlay.addEventListener("click", () => {
    var modals = document.querySelectorAll(".modal-form");
    modals.forEach((modal) => {
      modal.classList.remove("modal-form-active");
      overlay.classList.remove("overlay-active");
    });
  });
}

function initilalizeDeleteModal(btn, modal) {
  var member = btn.parentElement.parentElement;
  var name = member.querySelector(".name").textContent;
  var id = member.id;

  modal.querySelector("#delete-member-id").value = id;
  modal.querySelector("b").textContent = name;

  modal.classList.add("modal-form-active");
  overlay.classList.add("overlay-active");

  modal.querySelector(".discard-btn").addEventListener("click", () => {
    modal.reset();
    overlay.classList.remove("overlay-active");
    modal.classList.remove("modal-form-active");
  });

  overlay.addEventListener("click", () => {
    var modals = document.querySelectorAll(".modal-form");
    modals.forEach((modal) => {
      modal.classList.remove("modal-form-active");
      overlay.classList.remove("overlay-active");
    });
  });
}

function initilalizeDeleteCleintModal(btn, modal) {
  var member = btn.parentElement.parentElement;
  var name = member.querySelector(".client-name").textContent;
  var id = member.id;

  modal.querySelector("#delete-member-id").value = id;
  modal.querySelector("b").textContent = name;

  modal.classList.add("modal-form-active");
  overlay.classList.add("overlay-active");

  modal.querySelector(".discard-btn").addEventListener("click", () => {
    modal.reset();
    overlay.classList.remove("overlay-active");
    modal.classList.remove("modal-form-active");
  });

  overlay.addEventListener("click", () => {
    var modals = document.querySelectorAll(".modal-form");
    modals.forEach((modal) => {
      modal.classList.remove("modal-form-active");
      overlay.classList.remove("overlay-active");
    });
  });
}

function initilalizeDeleteCommentModal(btn, modal) {
  var object = btn.parentElement.parentElement.parentElement;
  var name = object.querySelector(".name b").textContent;
  var id = object.id;

  modal.querySelector("input").value = id;
  modal.querySelector("b").textContent = name;

  modal.classList.add("modal-form-active");
  overlay.classList.add("overlay-active");

  modal.querySelector(".discard-btn").addEventListener("click", () => {
    modal.reset();
    overlay.classList.remove("overlay-active");
    modal.classList.remove("modal-form-active");
  });

  overlay.addEventListener("click", () => {
    var modals = document.querySelectorAll(".modal-form");
    modals.forEach((modal) => {
      modal.classList.remove("modal-form-active");
      overlay.classList.remove("overlay-active");
    });
  });
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-comment")) {
    initilalizeDeleteCommentModal(
      e.target,
      document.querySelector("#delete-comment-form")
    );
  }
});

const addMemberBtn = document.querySelector(".add-member-btn");
const addMemberForm = document.querySelector("#add-member-form");

const editMemberForm = document.querySelector("#edit-member-form");
const deleteMemberForm = document.querySelector("#delete-member-form");

checkNull(
  document.querySelector(".add-video-btn"),
  document.querySelector("#add-video-form")
);

checkNull(
  document.querySelector(".add-member-btn"),
  document.querySelector("#add-member-form")
);

function checkNull(x, y) {
  if (x && y) {
    initializeModal(x, y);
  }
}


function initilalizeDeleteVideoModal(btn, modal) {
  var object = btn.parentElement.parentElement.parentElement;
  var id = object.id;

  modal.querySelector("input").value = id;

  modal.classList.add("modal-form-active");
  overlay.classList.add("overlay-active");

  modal.querySelector(".discard-btn").addEventListener("click", () => {
    modal.reset();
    overlay.classList.remove("overlay-active");
    modal.classList.remove("modal-form-active");
  });

  overlay.addEventListener("click", () => {
    var modals = document.querySelectorAll(".modal-form");
    modals.forEach((modal) => {
      modal.classList.remove("modal-form-active");
      overlay.classList.remove("overlay-active");
    });
  });
}