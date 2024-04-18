import posts from "./data.js";
import images from "./data-images.js";

const adminPostsWrapper = document.querySelector(".admin-posts-container");

function formatDate(inputDate) {
  const date = new Date(inputDate);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const year = date.getFullYear();
  const month = monthNames[date.getMonth()];
  const day = date.getDate();

  const formattedDate = `${month} ${day}, ${year}`;

  return formattedDate;
}

function getImage(images, postID) {
  const matchingImage = images.find((image) => image.post_id === postID);
  return matchingImage ? matchingImage.images : null;
}

function sortByDateAsc(posts) {
  return posts
    .slice()
    .sort((a, b) => new Date(a.post_date) - new Date(b.post_date));
}

function sortByDateDesc(posts) {
  return posts
    .slice()
    .sort((a, b) => new Date(b.post_date) - new Date(a.post_date));
}

let sortedPostsAsc = sortByDateAsc(posts);

let sortedPostsDesc = sortByDateDesc(posts);

function displayPosts() {
  sortedPostsDesc.forEach((post) => {
    if (post.post_title != "Home") {
      const postEl = document.createElement("a");
      postEl.classList = "post flex relative flex-row gap-4";
      postEl.href =
        "dashboard.html?" + post.post_title.replace(/\s/g, "-") + "_" 
        +  1
        // post.ID;
      postEl.innerHTML = `
      
            
            <img
              loading="lazy"
              src="${getImage(images, post.ID)}"
              alt="${post.post_title}"
            />
            <div class="info flex flex-col overflow-hidden gap-1">
              <span title="${
                post.post_title
              }" class="title whitespace-nowrap text-ellipsis">${
        post.post_title
      }</span>
              <span class="opacity-50 text-sm">${formatDate(
                post.post_date
              )}</span>
            </div>

            <div class="actions ml-auto flex gap-4"> 
            <a href=${
              postEl.href
            } title="Edit Post"  style="background-color: #D8E7FE;"  class="action flex">
            <img src="../public/svg/tabler-icon-edit.svg" alt="Edit Post" />
            </a>
            <span title="Delete Post" style="background-color: #FFBFBF;" class="action flex">
            <img src="../public/svg/tabler-icon-trash.svg" alt="Delete Post" />
            </span>
          </div>
      
      `;
      adminPostsWrapper.appendChild(postEl);
    }
  });
}

displayPosts();

function filterData(query) {
  return posts.filter((filtered) => {
    return filtered.post_title.toLowerCase().includes(query.toLowerCase());
  });
}

const input = document.querySelector("input");

input.addEventListener("input", function () {
  if (input.value.length >= 2) {
    const query = this.value.trim();
    const filteredData = filterData(query);
    displayResults(filteredData);
  } else {
    adminPostsWrapper.innerHTML = "";
    displayPosts();
  }
});

function displayResults(filteredData) {
  let sortedPostsDesc = sortByDateDesc(filteredData);
  adminPostsWrapper.innerHTML = "";
  sortedPostsDesc.forEach((filtered) => {
    const post = document.createElement("a");
    post.classList = "post flex relative flex-row gap-4";
    post.href =
      "dashboard.html?" +
      filtered.post_title.replace(/\s/g, "-") +
      "_" + 1
      // filtered.ID;
    post.innerHTML = `
    
          
          <img
            loading="lazy"
            src="${getImage(images, filtered.ID)}"
            alt="${filtered.post_title}"
          />
          <div class="info flex overflow-hidden flex-col gap-1">
            <span title="${
              filtered.post_title
            }" class="title whitespace-nowrap text-ellipsis">${
      filtered.post_title
    }</span>
            <span class="opacity-50 text-sm">${formatDate(
              filtered.post_date
            )}</span>
          </div>

          <div class="actions  ml-auto flex gap-4"> 
            <a href="${
              post.href
            }" title="Edit Post"  style="background-color: #D8E7FE;"  class="action flex">
            <img src="../public/svg/tabler-icon-edit.svg" alt="Edit Post" />
            </a>
            <span title="Delete Post" style="background-color: #FFBFBF;" class="action flex">
            <img src="../public/svg/tabler-icon-trash.svg" alt="Delete Post" />
            </span>
          </div>
    
    `;
    adminPostsWrapper.appendChild(post);
  });
}
