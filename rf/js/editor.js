$("#bold").on("click", function () {
  document.execCommand("bold", false, null);
});

$("#italic").on("click", function () {
  document.execCommand("italic", false, null);
});

$("#underline").on("click", function () {
  document.execCommand("underline", false, null);
});

$("#align-left").on("click", function () {
  document.execCommand("justifyLeft", false, null);
});

$("#align-center").on("click", function () {
  document.execCommand("justifyCenter", false, null);
});

$("#align-right").on("click", function () {
  document.execCommand("justifyRight", false, null);
});

$("#list-ul").on("click", function () {
  document.execCommand("insertUnorderedList", false, null);
});

$("#list-ol").on("click", function () {
  document.execCommand("insertOrderedList", false, null);
});

$("#fonts").on("change", function () {
  var font = $(this).val();
  document.execCommand("fontName", false, font);
});

$("#size").on("change", function () {
  var size = $(this).val();
  $(".editor").css("fontSize", size + "px");
});

$(".editor").perfectScrollbar();

const editor = document.querySelector(".editor");

editor.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key === "b") {
    e.preventDefault(); // Prevent the browser's default behavior
    document.execCommand("bold", false, null);
  }
  if (e.ctrlKey && e.key === "i") {
    e.preventDefault(); // Prevent the browser's default behavior
    document.execCommand("italic", false, null);
  }
  if (e.ctrlKey && e.key === "u") {
    e.preventDefault(); // Prevent the browser's default behavior
    document.execCommand("underline", false, null);
  }
  if (e.ctrlKey && e.key === "l") {
    e.preventDefault(); // Prevent the browser's default behavior
    document.execCommand("justifyLeft", false, null);
  }
  if (e.ctrlKey && e.key === "e") {
    e.preventDefault(); // Prevent the browser's default behavior
    document.execCommand("justifyCenter", false, null);
  }
  if (e.ctrlKey && e.key === "r") {
    e.preventDefault(); // Prevent the browser's default behavior
    document.execCommand("justifyRight", false, null);
  }
});

function showLinkPopup() {
  var selectedText = window.getSelection().toString().trim();
  if (selectedText !== "") {
    var selection = window.getSelection().getRangeAt(0).getBoundingClientRect();
    var divRect = editor.getBoundingClientRect();

    saveSelection();

    linkPopup.style.top =
      selection.top - divRect.top + window.pageYOffset + "px";
    linkPopup.style.left =
      selection.left - divRect.left + window.pageXOffset + "px";
    showPopUp(linkPopup);
  }
}

const popupOverlay = document.querySelector(".popup-overlay");

function showEmbedPopup() {
  popupOverlay.style.visibility = "visible";
  popupOverlay.style.opacity = "0.25";
  showPopUp(embeddedPopup);
}

function showPopUp(popup) {
  popup.style.visibility = "visible";
  popup.style.opacity = "1";
}

const linkTool = document.getElementById("link");
const linkPopup = document.getElementById("link-popup");
const embeddedPopup = document.getElementById("embedded-popup");
const urlInput = document.getElementById("url");
const postImagePopup = document.getElementById("cover-image")
const nextBtn = document.getElementById("next-btn")
// linkTool.addEventListener("click", showLinkPopup);

let savedSelection;

function saveSelection() {
  if (window.getSelection) {
    let sel = window.getSelection();
    if (sel.getRangeAt && sel.rangeCount) {
      savedSelection = sel.getRangeAt(0);
    }
  } else if (document.selection && document.selection.createRange) {
    savedSelection = document.selection.createRange();
  }
}

nextBtn.addEventListener("click", ()=>{
  popupOverlay.style.visibility = "visible";
  popupOverlay.style.opacity = "0.25";
  showPopUp(postImagePopup)
})

function restoreSelection() {
  if (savedSelection) {
    if (window.getSelection) {
      let sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(savedSelection);
    } else if (document.selection && savedSelection.select) {
      savedSelection.select();
    }
  }
}

linkPopup.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    createLink();
  }
});

const urlPattern =
  /^(http(s)?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?(\S*)$/;
const urlPattern2 =
  /^(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?(\S*)$/;

function createLink() {
  const url = urlInput.value;
  if (urlPattern.test(url)) {
    let aTag = document.createElement("a");
    aTag.setAttribute("target", "_blank");
    aTag.setAttribute("rel", "noopener noreferrer");
    aTag.href = url;
    aTag.textContent = savedSelection.toString();
    savedSelection.deleteContents();
    savedSelection.insertNode(aTag);
    hidePopUp(linkPopup);
  }
}

const embeddedInput = document.getElementById("embedded-input");

function hidePopUp(parent) {
  parent.style.visibility = "hidden";
  parent.style.opacity = "0";
  popupOverlay.style.visibility = "hidden";
  popupOverlay.style.opacity = "0";
}

function appendIframeToDiv() {
  const iframeCode = embeddedInput.value;
  const div = document.createElement("div");
  div.innerHTML = "<br/>" + iframeCode + "<br/>";
  editor.appendChild(div);
  hidePopUp(embeddedPopup);
}

const imageUpload = document.getElementById("imageUpload");
const altText = document.getElementById("alt");
const imagePopup = document.getElementById("insert-image")

function showImagePopup() {
  popupOverlay.style.visibility = "visible";
  popupOverlay.style.opacity = "0.25";
  imagePopup.style.visibility = "visible";
  imagePopup.style.opacity = "1";
}
function insertImage() {
  const file = imageUpload.files[0];
  if (file && altText.value.length > 0) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      const div = document.createElement("div");
      div.innerHTML = `
        <br/>
        <img src= "${reader.result}" alt="${altText.value}">
        <br/>
        `;
      editor.appendChild(div);
      hidePopUp(imagePopup);
    };
  }
}

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

function readtwo(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $("#imagePreview-2").css(
        "background-image",
        "url(" + e.target.result + ")"
      );
      $("#imagePreview-2").hide();
      $("#imagePreview-2").fadeIn(650);
    };
    reader.readAsDataURL(input.files[0]);
  }
}
$("#imageUpload-2").change(function () {
  readtwo(this);
});