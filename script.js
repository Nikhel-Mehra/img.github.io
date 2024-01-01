function getGPS() {
    // Make an AJAX request to the PHP script
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Display the retrieved coordinates
            document.getElementById("coordinates").innerHTML = "GPS Coordinates: " + xhr.responseText;
        }
    };
    xhr.open("GET", "get_coordinates.php", true);
    xhr.send();
}
