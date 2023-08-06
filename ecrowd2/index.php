<?php

  include "classes/products.class.php";
  $obj = new Products();

  $results = $obj->getProducts();

  session_start();
  
  $first = "";
  $status = "false";
  if ( isset($_SESSION['user']) ){
    $first = $_SESSION['user']['firstName'];
    $status = 'true';
  } else{
    $status = 'false';
  }

?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Project Management System</title>

    <link rel="stylesheet" href="css/index.css" />

    <script src="js/jquery.js"></script>
    <script defer src="js/cart.js"></script>

    <script src="js/jquery.dataTables.min.js"></script>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
    />
  </head>
  <body class="user-content">
      <div class="navbar">
            <div class="logo">
              <a href="">E-Crowd2</a>
            </div>

            <div class="links">
              <a href="#usersearch" class="search">
                <i class="bi bi-search"></i>
              </a>

              <span class="cart">
                <span class="counter"></span>
                <i class="bi bi-cart"></i>
              </span>

              <a class="cta" href="login.php"> Sign in </a>

              <div class="user-account">
                <i class="bi bi-person-fill-gear"></i>
                <span class="user-name">NOEL</span>

                <!-- <a href = "sign-out.php?id=<?php echo $_SESSION['user']['user_id']; ?>" class="log-out-btn">
                  Sign out
                </a > -->

                <a href = "" class="log-out-btn">
                  Sign out
                </a >

                
               </div>
            </div>
      </div>

    <div class="login-notification">
         Please sign in first
    </div>


    <div class="hero-section">
      <img src="public/images/laptop.png" alt="" class="hero-img" />

      <h1>In need of best high quality laptops at an affordable price?</h1>
      <p class="hero-text">At E-Crowd2 we got you covered</p>

      <a href="#usersearch" class="cta">Search for a laptop</a>
    </div>

    <div id="usersearch" class="user-search">
    <div class="filter-container">
         Price range:

          <div class="filters">

            <form method="POST"  class="range-picker">
              <span class="min">
                From:
                <input required name="min" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"  type="text" />
              </span>

              <span class="max">
                To:
                <input required name="max" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');" type="text" />
              </span>


              <button type="submit" >Filter</button>
            </form>
          </div>
        </div>
      <div class="user-search-box">
        <span><i class="bi bi-search"></i></span>
        <input id="searchuser-1" type="text" />
      </div>
    </div>

    <div id="products-container" class="products-wrapper">
        <?php

        if( $results->num_rows > 0 ){
          $count = 1;
                  while( $row = $results->fetch_assoc()) {

                    echo '

                    <div id="'.$count.'" data-clicked="" class="card">
                            <span class="check-mark">
                              <i class="bi bi-check"></i>
                            </span>
                            <img src="'.$row['image'].'" alt="Laptop" class="card-img" />
                            <div class="laptop-info">
                              <span title="Lenovo" class="laptop-name">'.$row['product_name'].'</span>
                              <span class="remaining-quantity">
                                Left: <span class="number">'.$row['quantity'].'</span>
                              </span>
                              <span class="price">MK <span>'.$row['price'].'</span></span>
                            </div>
                    
                            <div class="buy">
                              <span class="quantinty-picker">
                                <span class="btn minus">-</span>
                                <input disabled value="0" type="text" />
                                <span class="btn add">+</span>
                              </span>
                              <span class="add-cart cta">
                                <i class="bi bi-cart-plus"></i>
                                Cart
                              </span>
                            </div>
                  </div>

                    
                    ';
                    $count++;
                      
                  }
                }
              ?>

    </div>
   
  </body>


    <!-- <?php 
    echo "<script> var isLoggedIn = ". $status. "; > ";
    
    ?> -->
  <script>

    

        $(document).ready(function () {
          $("#searchuser-1").keyup(function () {
            checkChildren();
            var search = $(this).val();
            $.ajax({
              url: "search-user.php",
              method: "post",
              data: { query: search },
              success: function (response) {
                $("#products-container").html(response);
              },
            });

           
          });
        });


        $(document).ready(function() {
            $(".range-picker").submit(function(e) {
              checkChildren();
              e.preventDefault(); 

                var min = $("input[name=min]").val();
                var max = $("input[name=max]").val();


              var formData = new FormData();
              formData.append("min",min);
              formData.append("max",max);


              $.ajax({
                url: "userRangeProducts.php", 
                type: "POST",
                data: formData,
                processData: false,
                contentType: false,
                success: function (response) {
                  $("#products-container").html(response);
                },
              });
            });
          });


      var isLoggedIn  =  true;

      const cta = document.querySelector(".navbar .cta");
      const userAcc = document.querySelector(".user-account");
      const notification = document.querySelector(".login-notification");
      const addCartBtns = document.querySelectorAll(".buy .add-cart");
      const logout = document.querySelector(".log-out-btn")

      userAcc.addEventListener("click", ()=>{
        
        userAcc.classList.add("user-account-active")
        logout.classList.add("log-out-btn-active");
            })

            document.addEventListener("click", function (event) {
        if (
        
          event.target !== userAcc
        ) {
          userAcc.classList.remove("user-account-active")
              logout.classList.remove("log-out-btn-active");
        }
      });

      userAcc.addEventListener("click", () => {
        event.stopPropagation();
      });


     if(isLoggedIn){
      cta.style.display = "none";
      userAcc.style.display = "flex";
     }else{
      cta.style.display = "flex";
      userAcc.style.display = "none";
     }

     
     addCartBtns.forEach((btn)=>{
      btn.addEventListener("click", ()=>{
     
        if(!isLoggedIn){
          notification.classList.add("login-notification-active");
          var counter = 0
          window.setTimeout(()=>{
            notification.classList.remove("login-notification-active");
          }, 5000)
        }
      })
     })


     

      function checkChildren(){
        var userProducts = document.querySelector(".products-wrapper");

        if(userProducts.children.length < 3){
          userProducts.classList.add("less-than-3")
        }
        else{
          userProducts.classList.remove("less-than-3")
        }
      }

      checkChildren()




      const search = document.getElementById("searchuser-1");
          const filterContainer = document.querySelector(".filter-container");
          search.addEventListener("click", () => {
            filterContainer.classList.add("filter-container-active");
          });

          search.addEventListener("focus", () => {
            filterContainer.classList.add("filter-container-active");
          });

          document.addEventListener("click", function (event) {
            if (
              event.target !== filterContainer &&
              event.target !== search &&
              !event.target.classList.contains("filter-title")
            ) {
              filterContainer.classList.remove("filter-container-active");
            }
          });

          filterContainer.addEventListener("click", () => {
            event.stopPropagation();
          });


     
  </script>
</html>
