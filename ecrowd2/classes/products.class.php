<?php


class Products {
    private $productName;
    private $description;
    private $price;
    private $quantity; 
    private $category;

    public function connection(){
        $servername = "sql10.freesqldatabase.com";
        $username = "sql10636323";
        $password = "GxkPaH2VRF";
        $dbname = "sql10636323";
        
        $conn = new mysqli($servername, $username, $password, $dbname);
    
        if ($conn->connect_error) {
          die("Connection failed: " . $conn->connect_error);
        }
        return $conn;
    }

    public function range( $min, $max ){
      $conn = $this->connection();

      $stmt = " SELECT * FROM `products` WHERE price BETWEEN  '$min' AND  '$max' ";

      $result = mysqli_query($conn, $stmt);

      return $result;  
    }
    public function setProduct( $productName, $description, $price, $quantity,$category, $image ){

        $conn = $this->connection();
        $stmt = " INSERT INTO `products`( `product_name`, `description`, `price`, `quantity`, `category`, `image`) VALUES ('$productName','$description','$price','$quantity', '$category', '$image') ";

        $result = "";
        
        if ($conn->query($stmt) === TRUE) {
            $result = "done";
          } else {
            $result = "failed";
          }

        return $result;    
    }
    public function updateProduct ( $productId, $productName, $description, $price, $quantity, $category  ){
        $conn = $this->connection();
        $stmt = "UPDATE `products` SET `product_name`='$productName',`description`='$description',`price`='$price',`quantity`='$quantity', `category`='$category' WHERE `product_id` = '$productId' ";

        $result = "";
        
        if ($conn->query($stmt) === TRUE) {
            $result = "done";
          } else {
            $result = "failed";
          }

        return $result;
    }
    public function deleteProduct ( $productId ){
        $conn = $this->connection();

        $stmt = "DELETE FROM `products` WHERE `product_id` = $productId ";

        $result = "";
        
        if ($conn->query($stmt) === TRUE) {
            $result = "done";
          } else {
            $result = "failed";
          }

        return $result;        
    }
    public function getProducts(){
        $conn = $this->connection();

        $stmt = " SELECT * FROM `products` ";

        $result = mysqli_query($conn, $stmt);

        // if (mysqli_num_rows($result) > 0) {
        //   while($row = mysqli_fetch_assoc($result)) {
        //     echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
        //   }
        // } else {
        //   echo "0 results";
        // }

        return $result;  
    }
    public function getProductById( $productId ){
        $conn = $this->connection();

        $stmt = " SELECT * FROM `products` where product_id = $productId ";

        $result = mysqli_query($conn, $stmt);

        return $result;  
    }
    public function getProductByCategory( $category ){
        $conn = $this->connection();

        $stmt = " SELECT * FROM `products` where `category`='$category'  ";

        $result = mysqli_query($conn, $stmt);

        return $result;  
    }
    public function getProductsLike( $like ){
      $conn = $this->connection();

      $stmt = "SELECT * FROM `products` WHERE `product_name`  LIKE '%$like%' OR `category` LIKE '%$like%'";
      $result = mysqli_query( $conn, $stmt );

      return $result;
    }
}