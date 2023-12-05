const navbar = document.querySelector(".navbar");

if (navbar) {
  navbar.innerHTML = `

     <a href="./" class="logo">
        <img src="public/logos/logo.png" alt="" />
        <span class="full">On-point Finance and Business Consultants</span>
        <span class="abriv">OPFBC</span>
      </a>
      <span class="links">
        <a class="navlink" href="./">Home</a>

        <a class="navlink" href="./#services">Services</a>
        <a class="navlink" href="media.html">Media</a>
        <a class="navlink" href="contact.html">Contact us</a>
        <a class="navlink" href="profile.html">Profile</a>

        <span class="mobile-menu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </span>

        <a class="navlink cta" href="register.html">Work with us</a>
      </span>

      <span class="menu-list">
      
        <span>
          <a class="" href=".../index.html">Home</a>
          <a class="" href=".../index.html#services">Services</a>
          <a class="" href="media.html">Media</a>
          <a class="" href="contact.html">Contact us</a>
          <a class="" href="profile.html">Profile</a>
          <a class="cta" href="register.html">Work with us</a>
        </span>
      </span>

       
`;

  const navLinks = navbar.querySelectorAll(".navlink");
  navLinks.forEach((link) => {
    if (link.textContent == page) {
      link.classList.add("active-navlink");
    }
  });
}
