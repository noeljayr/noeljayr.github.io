const projectView = document.querySelector(".project-view");
const backBtn = document.querySelector(".top .back");
const projectNameEl = document.querySelector(".project-name h3");

const uiDesignProjects = [
  {
    title: "Metatron Insights",
    slug: "metatron-insights",
    screenshots: [
      "/public/ui/metatron-insights-cover.png",
      "/public/ui/metatron-insights-dark.png",
      "/public/ui/metatron-insights-light.png",
    ],
  },
  {
    title: "ApoRent",
    slug: "aporent",
    screenshots: [
      "/public/ui/aporent-cover.png",
      "/public/ui/aporent-1.png",
      "/public/ui/aporent-2.png",
      "/public/ui/aporent-3.png",
      "/public/ui/aporent-4.png",
      "/public/ui/aporent-5.png",
      "/public/ui/aporent-6.png",
    ],
  },
  {
    title: "Rainbow Paints",
    slug: "rainbow-paints",
    screenshots: [
      "/public/ui/rainbow-paints-cover.png",
      "/public/ui/rainbow-paints-1.png",
      "/public/ui/rainbow-paints-2.png",
    ],
  },
  {
    title: "Edge North International College",
    slug: "edge-north-international-college",
    screenshots: [
      "/public/ui/edge-north-international-college-cover.png",
      "/public/ui/edge-north-international-college-1.png",
      "/public/ui/edge-north-international-college-2.png",
    ],
  },
];

let mainSwiper;

backBtn.addEventListener("click", () => {
  projectView.classList.remove("project-view-active");

  if (mainSwiper) {
    mainSwiper.destroy();
    mainSwiper = null;
  }

  history.back();
});

const urlParams = new URLSearchParams(window.location.search);
const slug = urlParams.get("design");

function openProject(slug) {
  const activeSlug = slug;
  const project = uiDesignProjects.find(
    (project) => project.slug === activeSlug
  );
  if (!project) {
    window.location.href = "/";
  }

  // Update project name
  projectNameEl.textContent = project.title;

  // Get container elements
  const imageContainer = document.querySelector(".project-image-container");
  const navContainer = document.querySelector(".project-view-navigation");

  // Clear existing content and destroy previous swiper if exists
  imageContainer.innerHTML = "";
  navContainer.innerHTML = "";
  if (mainSwiper) {
    mainSwiper.destroy();
    mainSwiper = null;
  }

  // Create main slider container
  const mainSlider = document.createElement("div");
  mainSlider.classList.add("swiper", "main-slider");
  mainSlider.id = "main-slider";

  const mainWrapper = document.createElement("div");
  mainWrapper.classList.add("swiper-wrapper");

  // Create main slides from screenshots
  project.screenshots.forEach((screenshot) => {
    const slide = document.createElement("div");
    slide.classList.add("swiper-slide");

    const img = document.createElement("img");
    img.src = screenshot;
    img.alt = project.title;

    slide.appendChild(img);
    mainWrapper.appendChild(slide);
  });

  mainSlider.appendChild(mainWrapper);
  imageContainer.appendChild(mainSlider);

  // Create normal navigation thumbnails container
  const navWrapper = document.createElement("div");
  navWrapper.classList.add("nav-thumbnails");

  project.screenshots.forEach((screenshot, index) => {
    const thumb = document.createElement("span");
    const thumbImage = document.createElement("img");
    thumbImage.src = screenshot;
    thumbImage.alt = project.title;
    thumb.classList.add("nav-thumbnail");
    thumb.dataset.index = index;
    thumb.appendChild(thumbImage);

    // Add click event to navigate main slider to the clicked slide
    thumb.addEventListener("click", () => {
      if (mainSwiper) {
        mainSwiper.slideTo(index);
      }
    });

    navWrapper.appendChild(thumb);
  });

  navContainer.appendChild(navWrapper);

  // Initialize main swiper slider
  mainSwiper = new Swiper("#main-slider", {
    spaceBetween: 10,
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    on: {
      slideChange: function () {
        updateActiveThumbnail(this.activeIndex);
      },
    },
  });

  // Set initial active thumbnail style
  updateActiveThumbnail(mainSwiper.activeIndex);

  // Function to update active thumbnail style
  function updateActiveThumbnail(activeIndex) {
    const thumbs = document.querySelectorAll(".nav-thumbnail");
    thumbs.forEach((thumb, idx) => {
      if (idx === activeIndex) {
        thumb.classList.add("active-thumb");
      } else {
        thumb.classList.remove("active-thumb");
      }
    });
  }
}

slug ? openProject(slug) : (window.location.href = "/");
