
let site_data;
let params;

function preload () {

    params = getURLParams();

    let jsonFile = "data.json";

    if (params.json_test_file) {
        jsonFile = params.json_test_file;
    }
    
    site_data = loadJSON(jsonFile);
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
