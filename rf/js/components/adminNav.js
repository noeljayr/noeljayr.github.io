const navbar = document.querySelector(".admin-nav");

const links = [
  {
    name: "Dashboard",
    href: "/admin",
  },
  {
    name: "Posts",
    href: "./posts.html",
  },
  {
    name: "Adminstrators",
    href: "./admins.html",
  },
];
if (navbar) {
  navbar.innerHTML = `
  <img
    class="logo"
    src='../public/logos/logo.png'
    alt="Reggae fresh logo"
  />
  <span class="links flex gap-4 items-center">
      <a key="/dashboard" href="./dashboard.html" class="flex link items-center font-bold opacity-50">
        <span class="text-sm">Home</span>
      </a>
      <a key="./posts.html" href="./posts.html" class="flex link items-center font-bold opacity-50">
        <span class="text-sm">Posts</span>
      </a>
      <a key="./events.html" href="./events.html" class="flex link items-center font-bold opacity-50">
        <span class="text-sm">Events</span>
      </a>

      <a key="./admins.html" href="./admins.html" class="flex link items-center font-bold opacity-50">
        <span class="text-sm">Adminstrators</span>
      </a>
  </span>

  <a href="settings.html" class="settings-icon">
    <img alt="Settings Icon" src="../public/svg/tabler-icon-settings.svg" />
  </a>



`;

  const navLinks = navbar.querySelectorAll(".link");

  navLinks.forEach((link) => {
    if (link.querySelector("span").textContent == page) {
      link.classList.add("active-navlink");
    }
  });
}
