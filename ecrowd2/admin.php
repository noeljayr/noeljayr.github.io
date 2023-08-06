<?php

  include "classes/products.class.php";
  $obj = new Products();

  $results = $obj->getProducts();


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

    <script defer src="js/index.js"></script>
  

    <script src="js/jquery.dataTables.min.js"></script>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
    />
  </head>

  <style>
      .admin-nav{
        position: fixed;
      }

      body{
        padding-top: 4rem;
      }

      .admin-nav *{
        color: var(--black);
      }

      .admin-nav a:hover{
        color: var(--black);
      }


      .user-account{
      background-color: var(--blue-3);
      padding: var(--padding);
      border-radius: 1rem;
      display: flex;
      margin-left: 1rem;
      cursor: pointer;
      position: relative;
      width: 5rem;
      transition: var(--transition);
    }



    .navbar .user-account-active{
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    .log-out-btn{
      padding: var(--padding);
      background-color: #8e99f9;
      position: absolute;
      top: 0%;
      visibility: hidden;
      transition: var(--transition);
      width: 5rem;
      right: 0;
      cursor: pointer;
      border-radius:1rem;

      box-shadow: 0px 1.4px 5.3px -6px rgba(0, 0, 0, 0.098),
        0px 4.7px 17.9px -6px rgba(0, 0, 0, 0.118),
        0px 21px 80px -6px rgba(0, 0, 0, 0.17);
    }

    .log-out-btn:hover{
      background-color: var(--blue);
      color: var(--white);
    }

    .log-out-btn-active{
      top: 100%;
      visibility: visible;
      
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }

    .navbar .user-account span{
      margin: 0;
      font-weight: bold;
      text-transform: uppercase;
    }

    .navbar .user-account i{
      margin-right: 0.5rem;

    }

    .heading{
      margin-top: 1rem;
      font-weight: bold;
      font-size: var(--font-m);
    }


    
</style>



  <body>
  <div class="navbar admin-nav">
      <div class="logo">
        <a href="">E-Crowd2</a>
      </div>

       
      <div class="links">


        <div class="user-account">
          <i class="bi bi-person-fill-gear"></i>
          <span class="user-name">NOEL</span>

          <a href = "sign-out.php?id=<?php echo $_SESSION['user']['user_id']; ?>" class="log-out-btn">
                  Sign out
                </a >
        </div>
      </div>
    </div>

    <span class="heading">Product Management System</span>

   

    <div class="tool-bar">
      <div class="add-product">
        <span><i class="bi bi-plus-lg"></i></span>
        Add Product
      </div>

      <div class="search-bar">
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
        <input id="search" type="text" placeholder="Search..." />
        <input
          id="filter-by"
          class="hidden"
          value="product-name"
          type="text"
          name="filter-by"
        />
        <div class="search-icon">
          <i class="bi bi-search"></i>
        </div>
      </div>
    </div>

    <div class="overlay"></div>
<!-- edit producst -->
  <form action="" class="edit-form" id = "edit_form">
      <h1>Edit Product</h1>
      <div class="input-group">
        <label for="">Product Name:</label>
        <input id="edit-name" value="" name="pname2" type="text"  />
      </div>
      <input id="edit-id" type="number" name = "id2" value="" hidden/>
      <div class="input-group">
        <label for="">Price (MK):</label>
        <input
          id="edit-price"
          oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
          name="price2"
          type="text"
          value=""
        />
      </div>
      <div class="input-group">
        <label for="">Quantity:</label>
        <input
        id="edit-qty"
        value=""
          oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
          name="quantity2"
          type="text"
        />
      </div>
      <div class="input-group">
        <label for="">Description:</label>
        <input id="edit-descr"  name="description2" type="text" value="" />
      </div>
      <div class="input-group">
        <label for="">Category:</label>
        <input id="edit-category" value="" name="category2" type="text" />
      </div>
      

      <div class="btn-container">
        <a onclick = "cancelModal()" id="cancel-edit" class="form-btn" type="reset">Discard</a>
        <button id="save-btn" type="submit" onclick="editData(); event.preventDefault()">Save</button>
      </div>
    </form>
  
<!-- delete products -->
    <form action="" class="confirm-delete-form">
      <input class="hidden" type="text">
        
        <p>Delete product?</p>
      <div>
        <button id="cancel-delete" type="reset">Cancel</button>
        <a href="">Delete</a>
      </div>
    </form>
<!-- add new products -->
    <form action="" method="post" class="product-form" enctype = "multipart/form-data">
      <h1>Add New Product</h1>
      <div class="input-box">
        <label class="input-label" for="">Product Name:</label>
        <input
          class="input-1"
          onfocus="setFocus(true)"
          onblur="setFocus(false)"
          name="pname"
          type="text"
        />
      </div>
      <div class="input-box">
        <label class="input-label" for="">Price (MK):</label>
        <input
          class="input-1"
          onfocus="setFocus(true)"
          onblur="setFocus(false)"
          oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
          name="price"
          type="text"
        />
      </div>
      <div class="input-box">
        <label class="input-label" for="">Quantity:</label>
        <input
          class="input-1"
          onfocus="setFocus(true)"
          onblur="setFocus(false)"
          oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
          name="quantity"
          type="text"
        />
      </div>
      <div class="input-box">
        <label class="input-label" for="">Description:</label>
        <input
          class="input-1"
          onfocus="setFocus(true)"
          onblur="setFocus(false)"
          name="description"
          type="text"
        />
      </div>
      <div class="input-box">
        <label class="input-label" for="">Category:</label>
        <input
          class="input-1"
          onfocus="setFocus(true)"
          onblur="setFocus(false)"
          name="category"
          type="text"
        />
      </div>
      <div class="input-group">
        <input type="file" class="input-1 fileInfo" name="fileInput" id="fileInput"  required>
      </div>

      
      <div class="btn-container">
        <button type="reset">Discard</button>
        <div class="message-container">
          <i class="bi bi-x-circle-fill"></i>
          <div id="displayMassage">Fill all fields</div>
        </div>
      
        <!-- <button class="submit-btn" type="submit" onclick = "sendData(); event.preventDefault();">Add</button> -->
        <button class="submit-btn" type="submit" >Add</button>
        
      </div>
    </form>

    <div class="table-container">
      <div class="table-wrapper">
        <table id="products-table">
              <colgroup>
                    <col width="0.3%" />
                    <col width="9%" />
                    <col width="13%" />
                    <col width="1%" />
                    <col width="3%" />
                    <col width="5%" />
                    <col width="1.5%" />
                </colgroup>

          <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Category</th>
            <th>Action</th>
            <!-- <th class="hidden">More Info</th> -->
            </tr>
          </thead>
          <tbody>

          <?php
           $index = 0;

            if( $results->num_rows > 0 ){
              while($row = $results->fetch_assoc()) {
                $index = $index + 1;
                echo '
                <tr id="'.$row["product_id"].'" >
                      <td class="index">'.$index.'</td>
                      <td><img src="'.$row['image'].'"</td>
                      <td>'.$row['product_name'].'</td>
                      <td>'.$row['quantity'].'</td>
                      <td>'.$row['price'].'</td>
                      <td>'.$row['category'].'</td>
                      <td>
                        <a class="edit edit-btn action-btn">Edit</a>
                        <a id="'.$row["product_id"].'" class="delete delete-btn action-btn">Delete</a>
                   </td>
              </tr>
                
                ';
                  
              }
            }
          ?>

          <!-- <form action="">
            <input type="number" value = '2' >
            <input type="button">
          </form> -->

          </tbody>
        </table>
      </div> 
    </div>
            <?php  // deleting a product
                if ( isset($_GET['delete']) ){
                  echo" <script>
                  $.ajax({
                    url: 'includes/delete.includes.php',
                        method: 'post',
                        data:{delete:".$_GET['delete']." },
                        success:function(response){
                          var res = JSON.parse(response);

                          $('#products-table').html(res.code);
                          $('#displayMassage').html(res.success);
              
                        }
                  })
                  </script>
                  ";
                }

            ?>
  </body>


  <script>

   



const userAcc = document.querySelector(".user-account");
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

</script>


</html>
