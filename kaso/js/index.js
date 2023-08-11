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

