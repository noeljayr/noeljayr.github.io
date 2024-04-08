const newTagBtn = document.getElementById("new-tag-btn");
const tagsContainer = document.querySelector(".filtered-tags");
const selectedTagsContainer = document.querySelector(".tags-container");
const tagsFilterInput = document.querySelector(".tags-fetch input");
const tagsFormTrigger = document.querySelector(".add-tag-btn");
const closeBtn = document.getElementById("close-tags-menu");
const postSettings = document.querySelector(".post-settings");

// let year = new Date().getFullYear();
// selectedTags.push(year.toString());

tagsFormTrigger.addEventListener("click", () => {
  postSettings.classList.add("tags-modal-active");
  tagsContainer.innerHTML = "";
  appendTags();
  checkSelectedTags();
});

closeBtn.addEventListener("click", () => {
  // if (e.target.classList.contains("close-btn")) {
  postSettings.classList.remove("tags-modal-active");
  const tags = selectedTagsContainer.querySelectorAll(".tag");

  tags.forEach((tag) => {
    selectedTagsContainer.removeChild(tag);
    tag = null;
  });

  appendSelectedTags();
});


function createTag(text, container) {
  const tagEl = document.createElement("span");
  tagEl.classList = "tag flex items-center justify-between";
  tagEl.innerHTML = `
  <span class="tag-title text-xs">${text}</span>
  <span class="checkbox">
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 12L10 17L20 7"
      stroke="#2e972e"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</span>
  `;
  container.appendChild(tagEl);
}

tagsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("tag")) {
    const tag = e.target;
    tag.classList.add("checked");
  }

  if (
    e.target.classList.contains("checkbox") ||
    e.target.classList.contains("tag-title")
  ) {
    const tag = e.target.parentElement;
    tag.classList.add("checked");

    if (!selectedTags.includes(tag.textContent.trim())) {
      selectedTags.push(tag.textContent.trim());
      console.log(selectedTags);
    } else {
      let index = selectedTags.indexOf(tag.textContent.trim());
      selectedTags.splice(index, 1);
      console.log(selectedTags);
      checkSelectedTags();
    }
  }
});

function appendTags() {
  tags.forEach((tag) => {
    createTag(tag, tagsContainer);
  });
}

appendSelectedTags();

function appendSelectedTags() {
  // selectedTagsContainer.innerHTML = ""
  selectedTags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList = "tag";
    // tagEl.textContent = tag;
    tagEl.innerHTML = `
            <span class="remove-tag">
              <img alt="close button" src="../public/svg/tabler-icon-plus.svg" />
            </span>
            <span class="tag-title text-xs">${tag}</span>
          `;
    selectedTagsContainer.appendChild(tagEl);

    const removeTagBtns =
      selectedTagsContainer.querySelectorAll(".tag .remove-tag");

    removeTagBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        // console.log(btn.parentElement);
        const parent = btn.parentElement;
        const tag = parent.querySelector(".tag-title").textContent;
        const filteredArray = selectedTags.filter((element) => element !== tag);

        selectedTags = filteredArray;

        const appendedTags = selectedTagsContainer.querySelectorAll(".tag");
        appendedTags.forEach((tag) => {
          selectedTagsContainer.removeChild(tag);
        });

        appendSelectedTags();
      });
    });
  });
}

appendTags();

function filterData(query) {
  return tags.filter((filtered) => {
    return filtered.toLowerCase().includes(query.toLowerCase());
  });
}

function displayResults(filteredData) {
  tagsContainer.innerHTML = "";
  filteredData.forEach((filtered) => {
    createTag(filtered, tagsContainer);
  });
}

function checkSelectedTags() {
  const selected = tagsContainer.querySelectorAll(".tag");

  selected.forEach((tag) => {
    const tagTitle = tag.querySelector(".tag-title");
    if (selectedTags.includes(tagTitle.textContent.trim())) {
      tag.classList.add("checked");
    } else {
      tag.classList.remove("checked");
    }
  });
}

checkSelectedTags();

tagsFilterInput.addEventListener("input", function () {
  if (tagsFilterInput.value.length >= 2) {
    const query = this.value.trim();
    const filteredData = filterData(query);
    displayResults(filteredData);
    checkSelectedTags();
  } else if (tagsFilterInput.value.length < 1) {
    tagsContainer.innerHTML = "";
    appendTags();
    checkSelectedTags();
  }
});

newTagBtn.addEventListener("click", () => {
  if (
    tagsFilterInput.value.length > 0 &&
    !selectedTags.includes(tagsFilterInput.value.trim())
  ) {
    createNewTag();
  }
});

function createNewTag() {
  selectedTags.push(tagsFilterInput.value.trim());
  tags.push(tagsFilterInput.value.trim());
  console.log(selectedTags);
  checkSelectedTags();
  const filteredData = filterData(tagsFilterInput.value.trim());
  displayResults(filteredData);
  checkSelectedTags();
}

tagsFilterInput.addEventListener("keydown", (e) => {
  if (
    e.key === "Enter" &&
    tagsFilterInput.value.length > 0 &&
    !selectedTags.includes(tagsFilterInput.value.trim())
  ) {
    createNewTag();
  }
});

tagsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("tag")) {
    const tag = e.target;
    if (!selectedTags.includes(tag.textContent.trim())) {
      selectedTags.push(tag.textContent.trim());
      console.log(selectedTags);
      checkSelectedTags();
    } else {
      let index = selectedTags.indexOf(tag.textContent.trim());
      selectedTags.splice(index, 1);
      console.log(selectedTags);
      checkSelectedTags();
    }
  }
  // console.log(e)
});

// selectedTagsContainer.addEventListener("click", (e) => {
//   if (e.target.classList.contains("remove-tag")) {
//     selectedTags.push(e.target.textContent.trim());
//     console.log(selectedTags);
//     checkSelectedTags();
//   }
// });
