<?php
session_start();
    include "classes/users.class.php";

        $id = $_GET['id'];
        $user = new Users();
        $user->logOut( $id );

        header("location: index.php");
