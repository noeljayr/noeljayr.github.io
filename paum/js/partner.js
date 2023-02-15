/*Sort*/
const latest = document.querySelector(".latest");
const oldest = document.querySelector(".oldest");

latest.addEventListener("click", () => {
  oldest.classList.remove("sort-active");
  latest.classList.add("sort-active");
});

oldest.addEventListener("click", () => {
  latest.classList.remove("sort-active");
  oldest.classList.add("sort-active");
});
