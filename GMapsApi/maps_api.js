let map;
let uluru;
function initMap() {
        uluru = {lat: 50.014023, lng: 20.987543};
        map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: uluru,
        keyboardShortcuts: false
    });
}

