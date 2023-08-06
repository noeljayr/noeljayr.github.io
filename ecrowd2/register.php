<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Project Management System</title>

    <link rel="stylesheet" href="css/index.css" />

    <script src="js/jquery.js"></script>

    <!-- <script defer src="js/index.js"></script> -->

    <script src="js/jquery.dataTables.min.js"></script>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
    />
  </head>
  <body class="user-content user-login">
    <form action="includes/register.includes.php" class="form login" method = "post" onsubmit="return validateForm()" >
      <h1>E-Crowd2</h1>

      <div class="input-group">
        <input name="fname" placeholder="First Name" type="text" required />
      </div>

      <div class="input-group">
        <input name="lname" placeholder="Last Name" type="text" required />
      </div>

      <div class="input-group">
        <input name="email" placeholder="E-mail" type="email" required />
      </div>
      <div class="input-group">
        <input name="password" placeholder="password" type="password" required />
      </div>
      <div class="input-group">
        <input name="passwordRepeat" placeholder="Repeat password" type="password" required />
      </div>

      <button class="cta">
        Sign up
      </button>

      <span class="account-status">
        Already have an account? <a href="login.php">Sign in</a>
      </span>

    
    </form>
  </body>
  <script>
    function validateForm() {
      var password1 = document.forms["form"]["password"].value;
      var passwordRepeat = document.forms["form"]["passwordRepeat"].value;
      if ( password1 !== passwordRepeat ) {
        alert("password and password reapeat do no match!");
        return false;
      } 
      
    }
    </script>
</html>
