<?php
// Assuming you have established a database connection and retrieved the image data using SQL queries
$imageData = array(
  array(
    "src" => "public/images/1.jgp",
    "alt" => "",
    "date" => "2023-04-10 10:39:37"
  ),
  // More image objects...
);

// Convert the image data to JSON and send it as the response
header("Content-Type: application/json");
echo json_encode($imageData);
?>
