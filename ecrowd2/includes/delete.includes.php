<?php
    include "../classes/products.class.php";

    $obj1 = new Products();

    $output = '';
    $results ;
    $response = array ( 'success' => false , 'code' => '' );

    if( isset( $_POST['delete'] ) ){
        $search = $_POST['delete'];
        $results = $obj1->deleteProduct( $search );
    }
    if( $results === 'done' ){
        $response['success'] = true;
     }


    $product_list = $obj1->getProducts();
    $index = 0;
    if ( mysqli_num_rows( $product_list ) > 0 ){
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
        while($row = $product_list->fetch_assoc()){
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
    } else {
        $output .= "<h2>No  Records Found</h2>";
    }
    $response['code'] .= $output;
    echo json_encode($response);