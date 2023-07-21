// You should pass the array of objects with ajax... check the sample on the php page
const imageData = [
  {
    src: "/public/images/1.jpg",
    caption: "Random Caption",
    date: "2023-06-10 10:39:37",
  },
  {
    src: "/public/images/2.jpg",
    caption: "Random Caption",
    date: "2023-06-11 10:30:00",
  },

  {
    src: "/public/images/3.jpg",
    caption: "Random Caption",
    date: "2023-06-6 10:39:37",
  },

  {
    src: "/public/images/4.jpg",
    caption: "Random Caption",
    date: "2023-05-6 10:39:37",
  },

  {
    src: "/public/images/5.jpg",
    caption: "Random Caption",
    date: "2023-05-11 10:39:37",
  },

  {
    src: "/public/images/6.jpg",
    caption: "Random Caption",
    date: "2023-05-13 10:39:37",
  },

  {
    src: "/public/images/7.jpg",
    caption: "Random Caption",
    date: "2023-06-18 10:39:37",
  },

  {
    src: "/public/images/8.jpg",
    caption: "Random Caption",
    date: "2023-04-10 10:39:37",
  },
];

// Sort the image data by date (most recent first)
imageData.sort((a, b) => new Date(b.date) - new Date(a.date));

// Group the images by month
const groupedData = {};
imageData.forEach((image) => {
  const month = new Date(image.date).toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });
  if (!groupedData[month]) {
    groupedData[month] = [];
  }
  groupedData[month].push(image);
});

// Generate the HTML for the gallery
const galleryContainer = document.getElementById("gallery-container");
for (const month in groupedData) {
  const monthDiv = document.createElement("div");
  monthDiv.classList.add("month");
  var monthHeader = document.createElement("h2");
  monthHeader.textContent = month;

  groupedData[month].forEach((image) => {
    const img = document.createElement("img");
    img.src = image.src;
    img.setAttribute("data-caption", image.caption);
    img.setAttribute("data-date", image.date)
    img.alt = image.alt;
    monthDiv.appendChild(img);
  });

  galleryContainer.appendChild(monthDiv);
  monthDiv.appendChild(monthHeader);
}



const images = document.querySelectorAll(".gallery-container img");
const imageViewer = document.querySelector(".image-viewer");
const closeBtn = document.querySelector(".image-viewer .close");
const imageDate = document.querySelector(
  ".image-viewer .image-info .added-date #date"
);
const imageCapt = document.querySelector(
  ".image-viewer .image-info .caption #caption"
);

images.forEach((pic)=>{
    pic.addEventListener("click", ()=>{
        var viewedImg = imageViewer.querySelector("img");
        viewedImg.src = pic.src;
        imageDate.textContent = pic.getAttribute("data-date");
        imageCapt.textContent = pic.getAttribute("data-caption");
        imageViewer.classList.add("image-viewer-active");
    })
})

closeBtn.addEventListener("click",()=>{
    var viewedImg = imageViewer.querySelector("img");
    viewedImg.src = "";
    imageDate.textContent = "";
    imageCapt.textContent = "";
    imageViewer.classList.remove("image-viewer-active");
})