<?php
  include "classes/products.class.php";


  $productId = $_GET['edit'];

  $obj = new Products();

  $results = $obj->getProductById($_GET['edit']);
  $final = array();
    $product = "";
    $price = "";
    $quantity = "";
    $description = "";
    $category = "";
        while($row = $results->fetch_assoc()) {
            $product =  $row['product_name'];
            $price =  $row['price'];
            $quantity =  $row['quantity'];
            $description =  $row['description'];
            $category =  $row['category'];
          }

          echo $product ." ". $description ." ". $price ." ". $quantity ." ". $category;


          // print_r($final);
          // echo $final['product_name'];

?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Edit Product</title>

    <link rel="stylesheet" href="css/index.css" />
    <link rel="stylesheet" href="css/bootstrap.min.css" />

    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js"
      integrity="sha512-pumBsjNRGGqkPzKHndZMaAG+bir374sORyzM3uulLV14lN5LyykqNk8eEeUlUkB3U0M4FApyaHraT65ihJhDpQ=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>

    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
    />
  </head>
  <body>
    <form action="includes/editProduct.includes.php" class="edit-form">
      <h1>Edit Product</h1>
      <div class="input-group">
        <label for="">Product Name:</label>
        <input value="<?php echo $product ?>" name="pname" type="text"  />
      </div>
      <input type="number" name = "id" value="<?php echo $productId ?>" hidden/>
      <div class="input-group">
        <label for="">Price (MK):</label>
        <input
          oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
          name="price"
          type="text"
          value="<?php echo $price ?>"
        />
      </div>
      <div class="input-group">
        <label for="">Quantity:</label>
        <input
        value="<?php echo $quantity ?>"
          oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
          name="quantity"
          type="text"
        />
      </div>
      <div class="input-group">
        <label for="">Description:</label>
        <input  name="description" type="text" value="<?php echo $description ?>" />
      </div>
      <div class="input-group">
        <label for="">Category:</label>
        <input value="<?php echo $category ?>" name="category" type="text" />
      </div>

      <div class="btn-container">
        <a class="form-btn" href="/index.html" type="reset">Discard</a>
        <button type="submit">Save</button>
      </div>
    </form>
  </body>
</html>
