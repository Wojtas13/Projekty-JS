window.addEventListener('deviceorientation', moveMe);

let mazeArray = [
    0,1,0,0,0,0,1,0,0,1,
    0,1,0,0,0,0,1,0,0,1,
    0,1,0,0,1,0,1,0,0,1,
    0,1,1,0,1,0,1,0,0,1,
    0,1,0,0,0,0,1,0,0,1,
    0,1,0,1,0,0,1,0,0,1,
    0,1,0,0,0,0,1,0,1,1,
    0,1,0,0,0,0,1,0,0,1,
    0,1,0,0,1,0,1,0,0,1,
    0,1,0,0,0,0,1,0,0,1
];

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");

let ball = document.getElementById('ball');
let ctxBall = ball.getContext('2d');
ctxBall.beginPath();
ctxBall.arc(24, 24, 24, 0, 2 * Math.PI);
ctxBall.stroke();

let start = new Image();
start.src = "start.png";

let stop = new Image();
stop.src = "stop.png";

let maze = [];

let gracz = new Object({x:0, y:1, loc:10, time: 0});

let x = 0, y = 0;

for(let i = 0; i < 10 * 10; i++){
    maze.push({"x":x, "y":y, "state":mazeArray[1]});
    if(x == 9){
        y++;
        x = 0;
    }
    else
        x++;
}
//dokonczyc funkcje https://www.youtube.com/watch?v=iUy9gNKFCjk //1:29
function moveMe(event){

    let moveRL = event.alpha;
    let moveUD = event.beta;
    let moveR = event.gamma;



}


// gra typu labirynt z kulka na czas 
//wlasciwosci alpha beta gamma
// zapisac polozenie telefonu na start

// ---- googlemaps ----
// navigator.geolocation.getCurrentPosition(funkcjaOK, funkcjaFail)
// data.coords.latitude i longitude

//alpha - prawo lewo
//beta - gora dol
//gamma - obracanie wokol osi


