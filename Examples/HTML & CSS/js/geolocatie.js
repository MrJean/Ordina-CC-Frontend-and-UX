function show_map(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var accuracy = position.coords.accuracy;

    // let's show a map or do something interesting!

    document.getElementById('latitude').textContent = latitude;
    document.getElementById('longitude').textContent = longitude;
    document.getElementById('accuracy').textContent = accuracy;
    
    var url = GMaps.staticMapURL({
        size: [300, 150],
        lat: latitude,
        lng: longitude,
        zoom: 10,
        markers: [
            {lat: latitude, lng: longitude }
        ]
    });

    document.getElementById('map').setAttribute('src', url);
}

function handle_error(err) { 
    if (err.code == 1) {
        // how about no!
    }
}

var positionoptions_object = {
    enableHighAccuracy: true
};

navigator.geolocation.getCurrentPosition(show_map, handle_error);
//navigator.geolocation.getCurrentPosition(show_map, handle_error, positionoptions_object);