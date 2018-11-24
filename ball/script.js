window.addEventListener('deviceorientation', moveMe);

function moveMe(event){

    let alpha = event.alpha;
    let beta = event.beta;
    let gamma = event.gamma;

    console.log(beta);

}
// gra typu labirynt z kulka na czas 
//wlasciwosci alpha beta gamma
// zapisac polozenie telefonu na start

// ---- googlemaps ----
// navigator.geolocation.getCurrentPosition(funkcjaOK, funkcjaFail)
// data.coords.latitude i longitude