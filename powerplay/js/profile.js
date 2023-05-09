const editProfilebtn = document.querySelector(".edit-profile-btn");

closeBtns.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    playlistOverlay.classList.remove("add-playlist-overlay-active");
    editProfilebtn.style.display = "none";
    playlistForm.style.display = "none";
  });
});

editProfilebtn.addEventListener("click", () => {
  playlistOverlay.classList.add("add-playlist-overlay-active");
  playlistForm.style.display = "none";
  editProfilebtn.style.display = "flex";
});

/*Follow */
const followBtns = document.querySelectorAll(".following-btn");

followBtns.forEach((followBtn) => {
  followBtn.addEventListener("click", () => {
    if (followBtn.textContent == "Following") {
      followBtn.textContent = "Follow";
    } else {
      followBtn.textContent = "Following";
    }

    window.setTimeout(() => {
      if (followBtn.textContent == "Follow") {
        let followParent = followBtn.parentElement;
        followParent.style.display = "none";
      }
    }, 4000);
  });
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

var links = document.querySelectorAll(".single-page-app-link");

var loadedScripts = {};

links.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    var contentDiv = document.getElementById("spa-main");

    contentDiv.style.display = "flex";
    // Remove active class from all links
    links.forEach(function (link) {
      link.classList.remove("link-active");
    });

    // Add active class to clicked link
    this.classList.add("link-active");

    var url = this.getAttribute("href");

    fetch("/templates" + url + ".html")
      .then(function (response) {
        return response.text();
      })
      .then(function (html) {
        contentDiv.innerHTML = html;

        // Check if the script for the current url has already been loaded
        if (!loadedScripts[url]) {
          // Create a script element
          var script = document.createElement("script");

          // Set the src attribute to the path of the JavaScript file
          script.src = "/js" + url + ".js";

          // Append the script element to the contentDiv element
          contentDiv.appendChild(script);

          // Add the url to the list of loaded scripts
          loadedScripts[url] = true;
        }

        history.pushState({ url: url }, "", url);
      });
  });
});
