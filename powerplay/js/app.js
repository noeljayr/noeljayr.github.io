// var links = document.querySelectorAll(".side-link");

// links.forEach(function (link) {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();

//     var url = this.getAttribute("href");
//     var contentDiv = document.getElementById("spa-main");

//     fetch("/templates" + url + ".html")
//       .then(function (response) {
//         return response.text();
//       })
//       .then(function (html) {
//         contentDiv.innerHTML = html;
//         history.pushState({ url: url }, "", url);
//       });
//   });
// });

// window.addEventListener("popstate", function (e) {
//   var url = e.state.url;
//   var contentDiv = document.getElementById("spa-main");

//   fetch("/templates" + url + ".html")
//     .then(function (response) {
//       return response.text();
//     })
//     .then(function (html) {
//       contentDiv.innerHTML = html;
//     });
// });

var links = document.querySelectorAll(".single-page-app-link");
const homeMain = document.getElementById("home-main");

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

    var link = this.getAttribute("href");
    var name = link.substr(link.indexOf("#") + 1);
    var url = "/" + name;


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

var mobilePlayer = document.querySelector(".player");

window.addEventListener("popstate", function (e) {
  var url = e.state.url;
  var contentDiv = document.getElementById("spa-main");

  if (mobilePlayer.classList.contains("player-mobile-active")) {
    mobilePlayer.classList.remove("player-mobile-active");
  } else {
    fetch("/templates" + url + ".html")
      .then(function (response) {
        return response.text();
      })
      .then(function (html) {
        contentDiv.innerHTML = html;

        // Find link with matching URL and add active class
        var activeLink = document.querySelector(
          '.side-link[href="' + url + '"]'
        );
        activeLink.classList.add("link-active");
      });
  }
});
