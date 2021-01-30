
let radius = 20;

let myLocation;
let local_data;
let local_index;

function getLocation(location_span, site_data, site_index) {

    local_data = site_data;
    local_index = site_index;
    myLocation = location_span;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        myLocation.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {

    let distance = GreatCircle.distance(40.26392, -76.88929, position.coords.latitude, position.coords.longitude, "FT");

    console.log(local_data);
    console.log(local_data[local_index]);

    if (distance < radius) {
        myLocation.innerHTML = "<a href=\"ymca.html\">Click Here</a>.";
    } else {
        myLocation.innerHTML = "You are " + distance + " feet away.";
    }
}
