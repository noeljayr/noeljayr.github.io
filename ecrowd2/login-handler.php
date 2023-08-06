<?php
include "classes/users.class.php";
session_start();

    $email = $_POST['email'];
    $password = $_POST['password'];


    $user = new Users();

    $results     =    $user->logIn( $email, $password );
    if( mysqli_num_rows($results) > 0 ){
        while($row = mysqli_fetch_assoc($results)) {
            $details = array( "user_id" => $row['user_id'], "firstName" => $row['firstName'], "lastName" => $row['lastName'], "role" => $row['role'],"email" => $row['email'] );

            $_SESSION["user"] = $details;
            $user->updateStatusToOnline ( $_SESSION['user']['user_id'] );

            if( $_SESSION['user']['role'] == 'customer' ){
                echo "<script>window.location = 'index.php'</script>"; 
            } else {
                echo "<script>window.location = 'admin.php'</script>"; 
            }
        }
    } else {
        echo "    <script>alert('wrong password or email !');</script>        ";
        echo "      <script>window.location = 'login.php'</script>       "; 
    }