
let radius = 100;

let myLocation;
let local_data;
let local_index;

function getLocation(location_span, site_data, site_index) {

    local_data = site_data;
    local_index = (site_index ? site_index : 0);
    myLocation = location_span;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        myLocation.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {

    let next_site = null;
    let distance = radius + 100;
   

    if (local_index < local_data["sites"].length-1) {

        next_site = local_data["sites"][local_index+1];
        distance = GreatCircle.distance(next_site["coordinates"]["latitude"], next_site["coordinates"]["longitude"], position.coords.latitude, position.coords.longitude, "FT");

        if (distance < radius) {
            myLocation.innerHTML = "<a href=\"site.html?site=" + (local_index+1) + "\">Click Here</a>.";
        } else {
            myLocation.innerHTML = "You are " + distance.toFixed(2) + " feet away.";
        }

    } else {

        myLocation.innerHTML = "You have found Mason Smith!!!";
    }
}
