<?php
session_start();

include "../classes/users.class.php";

    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $passwordRepeat = $_POST['passwordRepeat'];
    $role = "customer";
    $status = "offLine";


    if (empty($fname) && empty($lname) && empty($email) && empty($password) && empty($passwordRepeat)  ){
        echo "    <script>alert('make sure that all fields are empty')</script>
        ";
        header("location: ../register.php?error=empty fields"); 
        exit;

    }
    if ( $password !== $passwordRepeat  ){
        echo "    <script>alert('Password and Repeat password are not identitcal');</script>
        ";
        echo "<script>window.location = '../register.php'</script>"; 
        exit;
    }


    $user = new Users();
    $response =  $user->addUser( $fname, $lname, $email, $password, $role, $status );

    
    if ( $response == 'done'){


        $results = $user->logIn( $email, $password );

        if ( mysqli_num_rows($results) > 0 ){
            while($row = mysqli_fetch_assoc($results)) {
                $details = array( "user_id" => $row['user_id'], "firstName" => $row['firstName'], "lastName" => $row['lastName'], "role" => $row['role'],"email" => $row['email'] );

                $_SESSION["user"] = $details;
                $user->updateStatusToOnline ( $_SESSION['user']['user_id'] );

                if( $_SESSION['user']['role'] == 'customer' ){
                    echo "    <script>alert('Sign up is successful');</script>        ";
                    echo "<script>window.location = '../index.php'</script>"; 
                } else {
                    echo "    <script>alert('Sign up is successful');</script>        ";
                    echo "<script>window.location = '../admin.php'</script>"; 
                }
            }
        }else{
            echo 'error';
        }

        exit;
    } elseif( $response == 'exist'){
        echo "    <script>alert('User  aready exist');</script>
        ";
        echo "<script>window.location = '../register.php'</script>"; 
        exit;

    }else {
        echo "    <script>alert('Sign up is failed');</script>
        ";
        echo "<script>window.location = '../register.php'</script>"; 
        exit;
    }

