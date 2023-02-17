const searchBox = document.getElementById("home-search");
const searchWrapper = document.querySelector(".search-icon");
const realIcon = document.getElementById("s-icon");
const createPlaylistFloat = document.querySelector(".create-playlist");

searchBox.addEventListener("click", () => {
  searchBox.style.width = "45vw";
});

window.addEventListener("click", function (e) {
  if (searchWrapper.contains(e.target)) {
  } else {
    searchBox.style.width = "100px";
  }
});

createPlaylistFloat.addEventListener("click", () => {
  playlistOverlay.classList.add("add-playlist-overlay-active");
});

/* Tabs */

const headerTabs = document.querySelector(".header-tabs");

const playlistContainer = document.querySelector(".playlists-container");
const artistsContainer = document.querySelector(".artists-container");
const albumContainer = document.querySelector(".album-container");

headerTabs.addEventListener("click", (event) => {
  // Get the clicked tab element
  const clickedTab = event.target;

  // If the clicked element is not a tab, return
  if (!clickedTab.classList.contains("tabs")) {
    return;
  }

  // Remove the active-tab class from all tabs
  const tabs = headerTabs.querySelectorAll(".tabs");
  tabs.forEach((tab) => tab.classList.remove("active-tab"));

  // Add the active-tab class to the clicked tab
  clickedTab.classList.add("active-tab");

  // Log the appropriate message to the console
  if (clickedTab.textContent === "Playlists") {
    artistsContainer.classList.remove("active-tab-container");
    albumContainer.classList.remove("active-tab-container");
   
    playlistContainer.classList.add("active-tab-container");
  } else if (clickedTab.textContent === "Albums") {
    playlistContainer.classList.remove("active-tab-container");
    artistsContainer.classList.remove("active-tab-container");
   
    albumContainer.classList.add("active-tab-container");
  } else if (clickedTab.textContent === "Artists") {
    playlistContainer.classList.remove("active-tab-container");
    albumContainer.classList.remove("active-tab-container");
   
    artistsContainer.classList.add("active-tab-container");
  }
});

/*Select */

function createSelect() {
  var select = document.getElementsByTagName("select"),
    liElement,
    ulElement,
    optionValue,
    iElement,
    optionText,
    selectDropdown,
    elementParentSpan;

  for (var select_i = 0, len = select.length; select_i < len; select_i++) {
    //console.log('selects init');

    select[select_i].style.display = "none";
    wrapElement(
      document.getElementById(select[select_i].id),
      document.createElement("div"),
      select_i,
      select[select_i].getAttribute("placeholder-text")
    );

    for (var i = 0; i < select[select_i].options.length; i++) {
      liElement = document.createElement("li");
      optionValue = select[select_i].options[i].value;
      optionText = document.createTextNode(select[select_i].options[i].text);
      liElement.className = "select-dropdown__list-item";
      liElement.setAttribute("data-value", optionValue);
      liElement.appendChild(optionText);
      ulElement.appendChild(liElement);

      liElement.addEventListener(
        "click",
        function () {
          displyUl(this);
        },
        false
      );
    }
  }
  function wrapElement(el, wrapper, i, placeholder) {
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);

    document.addEventListener("click", function (e) {
      let clickInside = wrapper.contains(e.target);
      if (!clickInside) {
        let menu = wrapper.getElementsByClassName("select-dropdown__list");
        menu[0].classList.remove("active");
      }
    });

    var buttonElement = document.createElement("button"),
      spanElement = document.createElement("span"),
      spanText = document.createTextNode(placeholder);
    iElement = document.createElement("i");
    ulElement = document.createElement("ul");

    wrapper.className = "select-dropdown select-dropdown--" + i;
    buttonElement.className =
      "select-dropdown__button select-dropdown__button--" + i;
    buttonElement.setAttribute("data-value", "");
    buttonElement.setAttribute("type", "button");
    spanElement.className = "select-dropdown select-dropdown--" + i;
    iElement.className = "bi bi-caret-down-fill";
    ulElement.className = "select-dropdown__list select-dropdown__list--" + i;
    ulElement.id = "select-dropdown__list-" + i;

    wrapper.appendChild(buttonElement);
    spanElement.appendChild(spanText);
    buttonElement.appendChild(spanElement);
    buttonElement.appendChild(iElement);
    wrapper.appendChild(ulElement);
  }

  function displyUl(element) {
    if (element.tagName == "BUTTON") {
      selectDropdown = element.parentNode.getElementsByTagName("ul");
      //var labelWrapper = document.getElementsByClassName('js-label-wrapper');
      for (var i = 0, len = selectDropdown.length; i < len; i++) {
        selectDropdown[i].classList.toggle("active");
        //var parentNode = $(selectDropdown[i]).closest('.js-label-wrapper');
        //parentNode[0].classList.toggle("active");
      }
    } else if (element.tagName == "LI") {
      var selectId =
        element.parentNode.parentNode.getElementsByTagName("select")[0];
      selectElement(selectId.id, element.getAttribute("data-value"));
      elementParentSpan =
        element.parentNode.parentNode.getElementsByTagName("span");
      element.parentNode.classList.toggle("active");
      elementParentSpan[0].textContent = element.textContent;
      elementParentSpan[0].parentNode.setAttribute(
        "data-value",
        element.getAttribute("data-value")
      );
    }
  }
  function selectElement(id, valueToSelect) {
    var element = document.getElementById(id);
    element.value = valueToSelect;
    element.setAttribute("selected", "selected");
  }
  var buttonSelect = document.getElementsByClassName("select-dropdown__button");
  for (var i = 0, len = buttonSelect.length; i < len; i++) {
    buttonSelect[i].addEventListener(
      "click",
      function (e) {
        e.preventDefault();
        displyUl(this);
      },
      false
    );
  }
}

createSelect();



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