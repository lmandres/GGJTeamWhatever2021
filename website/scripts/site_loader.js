
let site_data;
let params;

function preload () {
    site_data = loadJSON("data.json");
    params = getURLParams();
}

function setup() {
    noLoop()
}

function draw() {
    // default to first site if none was specified
    site = params.site == null ? 0 : params.site;

    select('#name').html(site_data["sites"][site]["site_name"]);
    select('#description').html(site_data["sites"][site]["description"]);
    select('#hint').html(site_data["sites"][site]["hint"]);


}
