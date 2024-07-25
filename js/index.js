// const loader = document.querySelector(".loader-overlay");

// window.addEventListener("load", () => {
//   loader.classList.add("loaded");

//   window.setTimeout(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           if (entry.target.classList.contains("fade-in-hidden")) {
//             entry.target.classList.add("fade-in-show");
//           } else if (entry.target.classList.contains("hidden")) {
//             entry.target.classList.add("show");
//           } else if (entry.target.classList.contains("fly-in-right-hidden")) {
//             entry.target.classList.add("fly-in-right-show");
//           } else {
//             entry.target.classList.add("pop-in-show");
//           }
//         }
//       });
//     });

//     const hiddenElements = document.querySelectorAll(".hidden");
//     const fadeInElements = document.querySelectorAll(".fade-in-hidden");
//     const flyRight = document.querySelectorAll(".fly-in-right-hidden");
//     const popIn = document.querySelectorAll(".pop-in-hidden");
//     hiddenElements.forEach((el) => observer.observe(el));
//     fadeInElements.forEach((el) => observer.observe(el));
//     flyRight.forEach((el) => observer.observe(el));
//     popIn.forEach((el) => observer.observe(el));
//   }, 2000);
// });

// const leftBtn = document.querySelector(".left-btn");
// const rightBtn = document.querySelector(".right-btn");
// const btnWrapper = document.querySelector(".btn-container");
// const wrapper = document.querySelector(".project-wrapper");

// leftBtn.addEventListener("click", function () {
//   wrapper.scrollLeft -= 200;
// });

// rightBtn.addEventListener("click", function () {
//   wrapper.scrollLeft += 200;
// });

// function checkOverflowX(wrapper) {
//   return wrapper.offsetWidth < wrapper.scrollWidth;
// }

// const isOverflowingX = checkOverflowX(wrapper);

// if (isOverflowingX) {
//   btnWrapper.style.display = "flex";
// } else {
//   btnWrapper.style.display = "none";
// }

// window.addEventListener("resize", function () {
//   if (isOverflowingX) {
//     btnWrapper.style.display = "flex";
//   } else {
//     btnWrapper.style.display = "none";
//   }
// });

// const menu = document.querySelector(".menu");
// const btn = menu.querySelector(".nav-tgl");
// const navMenu = document.querySelector(".nav");
// btn.addEventListener("click", (evt) => {
//   menu.classList.toggle("active");
//   navMenu.classList.toggle("nav-active");
// });

// const navlinks = document.querySelectorAll(".nav-link");

// navlinks.forEach((link) => {
//   link.addEventListener("click", () => {
//     menu.classList.remove("active");
//     navMenu.classList.remove("nav-active");
//   });
// });

// const navBar = document.querySelector(".navbar");

// let navBarHeight = navBar.offsetHeight;

// document.documentElement.style.setProperty(
//   "--scroll-padding",
//   navBarHeight + "px"
// );

// const airtel = document.getElementById("airtel-app");
// const projectOverlay = document.querySelector(".project-overlay");
// const saveSMS = document.querySelector(".save-sms");
// const saveLink = document.getElementById("save-mart");
// const airtelImage = document.querySelector(".airtel");
// const closePop = document.querySelector(".close-pop");

// airtel.addEventListener("click", () => {
//   projectOverlay.classList.add("project-overlay-active");
//   saveSMS.style.display = "none";
//   airtelImage.style.display = "grid";
// });

// saveLink.addEventListener("click", () => {
//   projectOverlay.classList.add("project-overlay-active");
//   airtelImage.style.display = "none";
//   saveSMS.style.display = "grid";
// });

// closePop.addEventListener("click", () => {
//   projectOverlay.classList.remove("project-overlay-active");
//   airtelImage.style.display = "none";
//   saveSMS.style.display = "none";
// });

// var thumbnails = document.querySelector(".image-selectors");
// var imgs = thumbnails.getElementsByTagName("img");
// var main = document.getElementById("main");
// var counter = 0;

// for (let i = 0; i < imgs.length; i++) {
//   let img = imgs[i];

//   img.addEventListener("click", function () {
//     main.src = this.src;
//   });
// }

const qs = document.querySelectorAll(".question");

qs.forEach((q) => {
  q.addEventListener("click", () => {
    qs.forEach((xq) => {
      xq.classList.remove("active-question");
      xq.classList.remove("active-question-four");
      xq.classList.remove("active-question-two");
    });

    if (event.target.parentElement === qs[3]) {
      q.classList.add("active-question-four");
    } else if (event.target.parentElement === qs[1]) {
      q.classList.add("active-question-two");
    } else {
      q.classList.add("active-question");
    }
  });
});

// const menubtn = document.querySelector(".menu");
// const menuList = document.querySelector(".mobile-menu");

// menubtn.addEventListener("click", () => {
//   menuList.classList.add("mobile-menu-active");
//   event.stopPropagation();
// });

// window.addEventListener("click", (event) => {
//   if (event.target !== menubtn) {
//     menuList.classList.remove("mobile-menu-active");
//   }
// });

const cardsContainer = document.querySelector(".clients");
let isScrolling = false;
let direction = 3;
let scrollSpeed = 1; // Variable to control scroll speed (initially set to 1)

function startAutoScroll() {
  if (!isScrolling) {
    isScrolling = true;

    const scrollInterval = setInterval(() => {
      if (!isScrolling) {
        clearInterval(scrollInterval);
        return;
      }

      // Use scrollLeft property for consistent behavior:
      cardsContainer.scrollLeft += direction * scrollSpeed;

      // Ensure scrolling within bounds and adjust for browser differences:
      const maxScrollLeft =
        cardsContainer.scrollWidth - cardsContainer.clientWidth;
      if (direction > 0 && cardsContainer.scrollLeft >= maxScrollLeft) {
        direction = -3; // Reverse direction
        cardsContainer.scrollLeft = maxScrollLeft; // Ensure smooth edge transition
      } else if (direction < 0 && cardsContainer.scrollLeft <= 0) {
        direction = 3; // Reset direction
        cardsContainer.scrollLeft = 0; // Ensure smooth edge transition
      }
    }, 50);
  }
}

startAutoScroll();

function initialiseSwiper() {
  var mySwiper = new Swiper("#pricing-swiper", {
    slidesPerView: 1.1,
    spaceBetween: 0,
    initialSlide: 1,
    pagination: {
      el: ".plans-toggle",
      clickable: true, // Enable clicking on pagination elements
      renderBullet: function (index, className) {
        // Customize the pagination item based on the index
        var text = "";
        switch (index) {
          case 0:
            text = "Basic";
            break;
          case 1:
            text = "Pro";
            break;
          case 2:
            text = "Ultimate";
            break;
          default:
            // Handle unexpected index values gracefully
            text = "Slide " + (index + 1);
        }

        return '<span class="' + className + '">' + text + "</span>";
      },
    },

    // ... other Swiper events and options

    onInit: function (swiper) {
      // Update pagination styles after Swiper initialization
      var paginationBullets = swiper.pagination.bullets;
      for (var i = 0; i < paginationBullets.length; i++) {
        var bullet = paginationBullets[i];
        bullet.style.backgroundColor = "#ccc"; // Set initial background color

        // Add hover effect (optional)
        bullet.addEventListener("mouseover", function () {
          this.style.backgroundColor = "#aaa";
        });
        bullet.addEventListener("mouseout", function () {
          this.style.backgroundColor = "#ccc";
        });
      }

      // Set active bullet color after initial slide (optional)
      swiper.pagination.bullets[swiper.activeIndex].style.backgroundColor =
        "#999";
    },

    onSlideChange: function (swiper) {
      // Update active bullet color on slide change
      for (var i = 0; i < swiper.pagination.bullets.length; i++) {
        swiper.pagination.bullets[i].style.backgroundColor = "#ccc";
      }
      swiper.pagination.bullets[swiper.activeIndex].style.backgroundColor =
        "#999";
    },
  });
}

var projectSwipper = new Swiper(".projects-swiper-container", {
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: ".project-type-toggle",
    clickable: true, // Enable clicking on pagination elements
    renderBullet: function (index, className) {
      // Customize the pagination item based on the index
      var text = "";
      switch (index) {
        case 0:   
          text = "Figma Designs";
          break;
        case 1:
          text = "Deployed";
          break;
        default:
          // Handle unexpected index values gracefully
          text = "Slide " + (index + 1);
      }

      return '<span class="' + className + '">' + text + "</span>";
    },
  },

  // ... other Swiper events and options

  onInit: function (swiper) {
    // Update pagination styles after Swiper initialization
    var paginationBullets = swiper.pagination.bullets;
    for (var i = 0; i < paginationBullets.length; i++) {
      var bullet = paginationBullets[i];
      bullet.style.backgroundColor = "#ccc"; // Set initial background color

      // Add hover effect (optional)
      bullet.addEventListener("mouseover", function () {
        this.style.backgroundColor = "#aaa";
      });
      bullet.addEventListener("mouseout", function () {
        this.style.backgroundColor = "#ccc";
      });
    }

    // Set active bullet color after initial slide (optional)
    swiper.pagination.bullets[swiper.activeIndex].style.backgroundColor =
      "#999";
  },

  onSlideChange: function (swiper) {
    // Update active bullet color on slide change
    for (var i = 0; i < swiper.pagination.bullets.length; i++) {
      swiper.pagination.bullets[i].style.backgroundColor = "#ccc";
    }
    swiper.pagination.bullets[swiper.activeIndex].style.backgroundColor =
      "#999";
  },
});


initialiseSwiper();

