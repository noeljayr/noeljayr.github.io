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
              } else{
                echo"Sorry, we do not have that one";
              }
            ?>

