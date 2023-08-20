const servs = document.querySelectorAll(".serv");

servs.forEach((s) => {
  s.addEventListener("click", () => {
    servs.forEach((el) => {
      el.classList.remove("serv-active");
    });

    s.classList.add("serv-active");
  });
});

// window.addEventListener("load", () => {
//  const observer = new IntersectionObserver((entries) => {
//    entries.forEach((entry) => {
//      entry.target.classList.add("serv-active");
//    });
//  });

 

//  const cctv = document.querySelector("#cctv");
// observer.observe(cctv);
// });


const upBtn = document.querySelector(".up-btn");
const downBtn = document.querySelector(".down-btn");
const btnWrapper = document.querySelector(".btn-container");
const wrapper = document.querySelector(".services-container");

function updateScrollButtons() {
  const scrollTopWithPadding =
    wrapper.scrollTop;
  const scrollBottomWithPadding =
    wrapper.scrollHeight -
    wrapper.offsetHeight -
    1.5 * parseFloat(getComputedStyle(wrapper).paddingBottom);

  if (scrollTopWithPadding <= 0) {
    upBtn.classList.remove("show-btn")
  } else {
    upBtn.classList.add("show-btn")
  }

  if (wrapper.scrollTop >= scrollBottomWithPadding) {
    downBtn.classList.remove("show-btn")
  } else {
    downBtn.classList.add("show-btn")
  }
}

upBtn.addEventListener("click", function () {
  if (wrapper.scrollTop > 0) {
    wrapper.scrollTop -= 100;
  }
  updateScrollButtons();
});

downBtn.addEventListener("click", function () {
  if (wrapper.scrollTop < wrapper.scrollHeight - wrapper.offsetHeight) {
    wrapper.scrollTop += 100;
  }
  updateScrollButtons();
});

wrapper.addEventListener("scroll", updateScrollButtons);

