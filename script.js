document.addEventListener("DOMContentLoaded", function() {
    getLocation();
});

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(savePosition, showError);
    } else {
        document.getElementById("coordinates").innerHTML = "Geolocation is not supported by this browser.";
    }
}

function savePosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    document.getElementById("coordinates").innerHTML = "Latitude: " + latitude + "<br>Longitude: " + longitude;

    // Save coordinates to a text file using AJAX
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log("Coordinates saved successfully.");
        }
    };
    xhr.open("POST", "save_coordinates.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("latitude=" + latitude + "&longitude=" + longitude);
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById("coordinates").innerHTML = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById("coordinates").innerHTML = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            document.getElementById("coordinates").innerHTML = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById("coordinates").innerHTML = "An unknown error occurred.";
            break;
    }
}
