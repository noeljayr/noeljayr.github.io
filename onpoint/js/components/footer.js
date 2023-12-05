const footer = document.querySelector(".footer");
const pPolicy = document.querySelector(".p-policy-credit");

if (footer) {
  footer.innerHTML = `
     <div class="info">
        <div class="logo">
          <img src="public/logos/logo.png" alt="">
          <h2>On-point Finance and Business Consultants</h2>
        </div>
        <p>
          We help businesses of all sizes access financial resources, manage their operations, and report their activities, enabling them to compete and expand fairly within the market.
        </p>
      </div>

      <div class="footer-section">
        <h2>Links</h2>
        <a href="index.html#services" class="foot-link">Services and Products</a>
        <a href="contact.html" class="foot-link">Contact us</a>
        <a href="profile.html" class="foot-link">Profile</a>

        <a href="register.html" class="cta">Work with us</a>
      </div>

      <div class="footer-section contact-links">
        <p>Mzuzu, Malawi</p>
        <span>
          <b>From:</b>  8:30 AM <b>To:</b> 16:30 PM
        </span>

        <span>
          <b>Phone: </b><a href="tel:+265888881689">+265888881689</a> /
          <a href="tel:+265995165219">+265995165219</a>
          
        </span>

        <span>
          <b>Email: <a href="mailto:chiuyedevelious@opfaconsultants.org ">chiuyedevelious@opfaconsultants.org </a></b>
        </span>
      </div>
`;
}

