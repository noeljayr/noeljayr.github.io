const  sideBar = document.querySelector(".side-bar");

sideBar.innerHTML = `
        <a href="dashboard.html" class="side-link">
          <i class="bi bi-house-fill"></i>
          <span class="title">Dashboard</span>
        </a>

         <a href="clients.html" class="side-link">
          <i class="bi bi-person-lines-fill"></i>
          <span class="title">Clients</span>
        </a>

        <a href="messages.html" class="side-link ">
          <i class="bi bi-chat-square-text-fill"></i>
          <span class="title">Emails & Comments</span>
        </a>

        <a href="media.html" class="side-link">
          <i class="bi bi-play-btn-fill"></i>
          <span class="title">Media</span>
        </a>

        <a href="admins.html" class="side-link">
          <i class="bi bi-person-fill-lock"></i>
          <span class="title">Admins</span>
        </a>

`;

const links = document.querySelectorAll(".side-link")

links.forEach((link)=>{
  var title = link.querySelector(".title").textContent;

  if(title == page){
    link.classList.add("active-side-link");
  }
})