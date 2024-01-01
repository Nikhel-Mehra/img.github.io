<?php
// Simulate getting GPS coordinates (replace this with actual GPS retrieval logic)
$latitude = 37.7749;
$longitude = -122.4194;

// Write coordinates to a text file
$file = fopen("gps_coordinates.txt", "w");
fwrite($file, "Latitude: $latitude\nLongitude: $longitude");
fclose($file);

// Return coordinates as response
echo "$latitude, $longitude";
?>
