<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Retrieve coordinates from the POST request
    $latitude = $_POST["latitude"];
    $longitude = $_POST["longitude"];

    // Write coordinates to a text file
    $file = fopen("gps_coordinates.txt", "a"); // Open file in append mode
    fwrite($file, "Latitude: $latitude, Longitude: $longitude\n");
    fclose($file);

    // Send a response
    echo "Coordinates saved successfully.";
} else {
    // Handle invalid requests
    http_response_code(400);
    echo "Invalid request.";
}
?>
