<?php
    include 'connect.php';
    include 'classes/products.class.php';

    $obj1 = new Products();

    $output = '';
    $results ;
    $index = 0;

         $min  = $_POST['min'] ;
         $max = $_POST['max'] ;

    $results = $obj1->range( $min, $max );


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
            $index = $index + 1;
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
        echo $output;
    } else {
        //echo "<h2>No matching records found</h2>";
    }
    
//     include "classes/products.class.php";

//          $min  = $_POST['min'] ;
//          $max = $_POST['max'] ;


// echo "<script>       console.log(4455);</script>";

//         // $response = array ( 'success' => false , 'code' => '' );
//         $response = "";
//          $obj = new Products();
//          $results = $obj->range( $min, $max );

//         //  if( $results == 'done' ){
//         //     $response['success'] = true;
//         //  }

//          $index = 0;
//          $output = '';
//          if ( mysqli_num_rows( $results ) > 0 ){
//             $output = '
//                   <colgroup>
//                         <col width="0.3%" />
//                         <col width="9%" />
//                         <col width="13%" />
//                         <col width="1%" />
//                         <col width="3%" />
//                         <col width="5%" />
//                         <col width="1.5%" />
//                     </colgroup>
    
    
//                 <thead>
//                 <tr>
//                 <th>#</th>
//                 <th>Image</th>
//                 <th>Product Name</th>
//                 <th>Quantity</th>
//                 <th>Price</th>
//                 <th>Category</th>
//                 <th>Action</th>
//                 <!-- <th class="hidden">More Info</th> -->
//                 </tr>
//                 </thead>
//                 <tbody>
            
//             ';
//             while($row = mysqli_fetch_assoc($results) ){
//                 $index = $index + 1;
//                 $output .='
                
//                 <tr id="'.$row["product_id"].'" >
//                     <td class="index">'.$index.'</td>
//                     <<td><img src="'.$row['image'].'"</td>
//                     <td>'.$row['product_name'].'</td>
//                     <td>'.$row['quantity'].'</td>
//                     <td>'.$row['price'].'</td>
//                     <td>'.$row['category'].'</td>
//                     <td>
//                       <a class="edit edit-btn action-btn">Edit</a>
//                       <a id="'.$row["product_id"].'" class="delete delete-btn action-btn">Delete</a>
//                     </td>
//                   </tr>
//                 ';
//             }
//             $output .= "</tbody";
//             //echo $output;
//         } else {
//             echo "<h2>No matching records found</h2>";
//         }

//          $response= $output;
//          echo json_encode($response);