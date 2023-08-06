<?php
    include "classes/products.class.php";

         $productName  = $_POST['productName'] ;
         $description = $_POST['description'] ;
         $price = $_POST['price'];
         $quantity = $_POST['quantity']; 
         $category = $_POST['category'];


  $fileTmpPath = $_FILES["file"]["tmp_name"];
  $fileName = $_FILES["file"]["name"];
  $fileSize = $_FILES["file"]["size"];
  $fileType = $_FILES["file"]["type"];

  $targetDir = "image/";
  $targetFilePath = $targetDir . $fileName;
  $path = "image/" . $fileName;

  move_uploaded_file($fileTmpPath, $targetFilePath);



        $response = array ( 'success' => false , 'code' => '' );
         $obj = new Products();
         $result = $obj->setProduct( $productName, $description, $price, $quantity, $category, $path );

         if( $result === 'done' ){
            $response['success'] = true;
         }


         $results = $obj->getProducts();
         $index = 0;
         $output = '';
         if ( mysqli_num_rows( $results ) > 0 ){
             $output = '
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
             
             ';
             while($row = $results->fetch_assoc()){
              $index++;
                 $output .='
                 
                 <tr id="'.$row["product_id"].'" >
                 <td class="index">'.$index.'</td>
                 <<td><img src="'.$row['image'].'"</td>
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
             $output .= "</tbody";
         }

         $response['code'] .= $output;
         echo json_encode($response);