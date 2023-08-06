<?php
    $servername = "sql10.freesqldatabase.com";
    $username = "sql10636323";
    $password = "GxkPaH2VRF";
    $dbname = "sql10636323";
    
    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
    }