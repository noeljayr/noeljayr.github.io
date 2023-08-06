<?php
    include "../classes/products.class.php";
    $forms = array ( 'success' => false , 'code' => '' );
    $obj = new Products();

    $productId =  $_POST['query'];

    $results = $obj->getProductById($productId);

         $output = '';
         if ( mysqli_num_rows( $results ) > 0 ){

            $row = $results->fetch_assoc();

            $output ='
            <h1>Edit Product</h1>
            <div class="input-group">
              <label for="">Product Name:</label>
              <input value="'.$row['product_name'].'" name="pname2" type="text"  />
            </div>
            <input type="number" name = "id2" value="'. $productId .'" hidden/>
            <div class="input-group">
              <label for="">Price (MK):</label>
              <input
                oninput="this.value = this.value.replace(/[^0-9.]/g, "").replace(/(\..*?)\..*/g, "$1");"
                name="price2"
                type="text"
                value="'.$row['price'].'"
              />
            </div>
            <div class="input-group">
              <label for="">Quantity:</label>
              <input
              value="'.$row['quantity'].'"
                oninput="this.value = this.value.replace(/[^0-9.]/g, "").replace(/(\..*?)\..*/g, "$1");"
                name="quantity2"
                type="text"
              />
            </div>
            <div class="input-group">
              <label for="">Description:</label>
              <input  name="description2" type="text" value="'.$row['description'].'" />
            </div>
            <div class="input-group">
              <label for="">Category:</label>
              <input value="'.$row['category'].'" name="category2" type="text" />
            </div>
      
            <div class="btn-container">
              <a onclick = "cancelModal()" id="cancel-edit" class="form-btn" type="reset">Discard</a>
              <button class="submit-btn" type="submit" onclick = "editData(); event.preventDefault();">Save</button>
            </div>
            ';

         }

         $forms['code'] .= $output;
         echo json_encode($forms);