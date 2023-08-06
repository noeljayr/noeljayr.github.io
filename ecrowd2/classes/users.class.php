<?php

Class Users{

    private $firstName ;
    private $lastName;
    private $email;
    private $password;
    private $role;
    private $status;



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
    public function addUser( $firstName, $lastName, $email, $password, $role, $status  ){
        $conn = $this->connection();
        $stmt = "INSERT INTO `users`( `firstName`, `lastName`, `email`, `password`, `role`, `status`) VALUES ('$firstName','$lastName','$email','$password','$role','$status')";

        $result = "";
        
        $temp = $this->getUserByEmail( $email ) ;
        if ( mysqli_num_rows( $temp ) > 0 ){
            $result = 'exist';
        }else {
          if ( mysqli_query($conn, $stmt) === TRUE) {
            $result = "done";
          } else {
            $result = "failed";
          }

        }

        return $result;  

    }
    public function getUser( $userId ){
        $conn = $this->connection();
        $stmt = "SELECT * FROM `users` WHERE `user_id` = $userId ";
     
        $result = mysqli_query($conn, $stmt);

        return $result;   
    }
    public function getUserByEmail( $email ){
      $conn = $this->connection();
      $stmt = "SELECT * FROM `users` WHERE `email` = '$email' ";
   
      $result = mysqli_query($conn, $stmt);

      return $result;  
    }
    public function allUsers(){
        $conn = $this->connection();
        $stmt = "SELECT * FROM `users`";
     
        $result = mysqli_query($conn, $stmt);

        return $result;   
    }
    public function updateStatusToOnline ( $userId ){
        $conn = $this->connection();
        $stmt = "UPDATE `users` SET `status`='online' WHERE `user_id` =  $userId ";

        $result = "";
        
        if (mysqli_query($conn, $stmt) === TRUE) {
            $result = "done";
          } else {
            $result = "failed";
          }

        return $result;
    }
    public function updateStatusToOffline ( $userId ){
        $conn = $this->connection();
        $stmt = "UPDATE `users` SET `status`='offline' WHERE `user_id` =  $userId ";

        $result = "";
        
        if ($conn->query($stmt) === TRUE) {
            $result = "done";
          } else {
            $result = "failed";
          }

        return $result;
    }
    public function logIn( $email, $password ){
        $conn = $this->connection();
        $stmt = "SELECT * FROM `users` 
        WHERE `email` = '$email' AND `password` = '$password'  ";


        $result = mysqli_query($conn, $stmt);

        return $result;
    }
    public function logOut( $userId ){
        $this->updateStatusToOffline ( $userId );
        // remove all session variables
        session_unset();

        // destroy the session
        session_destroy();

    }
}