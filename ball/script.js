// wzor labiryntu
let mazeArray = [
    1,1,1,3,1,0,0,0,3,0,0,0,3,0,0,0,0,3,0,1,
    0,0,1,0,0,0,3,0,0,0,1,0,0,0,3,0,0,1,0,0,
    0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,3,0,1,0,0,
    0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,3,0,
    0,3,3,0,0,0,3,0,1,3,0,0,0,1,0,1,0,1,0,0,
    0,1,1,0,3,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,
    0,0,1,0,1,0,1,0,1,0,3,1,0,0,0,1,0,1,0,0,
    1,0,1,3,1,0,1,0,1,0,0,1,0,1,1,1,0,1,3,0,
    3,0,1,0,0,0,0,0,1,3,0,1,0,3,0,0,0,1,0,0,
    0,0,1,0,1,3,1,1,1,0,0,1,0,1,0,1,0,1,0,1,
    1,0,3,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,
    0,0,1,0,1,0,3,1,1,1,1,1,0,1,0,0,0,1,3,0,
    0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,3,1,1,0,0,
    3,0,1,1,1,1,1,3,0,3,0,3,0,1,0,0,0,1,1,0,
    0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,
    1,1,3,0,1,0,3,1,1,1,1,1,0,1,0,0,0,0,0,3,
    0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,
    1,0,3,1,1,0,1,1,0,1,0,3,1,1,1,1,0,0,0,1,
    3,0,1,0,3,0,3,0,0,1,0,0,0,3,0,0,0,3,0,2,
    1,0,0,0,0,0,1,1,0,1,3,3,0,0,0,1,0,1,0,1];

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");

let startGame = document.getElementById('start');
let time = document.getElementById('czas');
//tworzenie pol labiryntu
let ball = document.getElementById('ball');
let ctxBall = ball.getContext('2d');
ctxBall.beginPath();
ctxBall.arc(24, 24, 24, 0, 2 * Math.PI);
ctxBall.fillStyle = "#35cac5";
ctxBall.fill();
ctxBall.stroke();

let sciana = new Image();
sciana.src = "sciana.png";

let meta = new Image();
meta.src = "meta.png";

let lawa = new Image();
lawa.src = "lawa.png";

let poczatek, koniec;
//tworzenie labiryntu i gracza
let maze = [];
let gracz = {x:0,y:1,loc:20}; // x i y pozycja kulki
let x = 0, y = 0;

for (let i = 0;i < 20 * 20;i++){
	maze.push({"x":x,"y":y,"stan":mazeArray[i]});
	if (x == 19){
		y++;
		x = 0;
	}
	else {x++;}
}
//czas
function odliczanie(){
    poczatek = Date.now();
    let minuty, sekundy;
    setTimeout(odliczanie, 1000);
    let czas = koniec - poczatek;

    time.innerHTML = czas;
}
//funkcja sterujaca
function moveMe(e){
    let moveY = e.gamma / 10; //range -90,90
    let moveX = e.beta / 10; //range -180,180

    //wykluczenie obruconego telefonu do gory nogami
    if(moveX > 90)
        moveX -= 90;
    if(moveX < 90)
        moveX += 90;

    //Prawo
    if(moveY > 0 && moveY < 180){
        if (gracz.x != 19){
            gracz.loc ++;
            if (maze[gracz.loc].stan != 1){
                //usuwanie kulki po ruchu
                ctx.clearRect(gracz.x * 24,gracz.y * 24, 24, 24);
                gracz.x++;
            }
            else {
                gracz.loc --;
            }
        }
    }
    //Lewo
    if(moveY < 0 && moveY > -90){
        if (gracz.x != 0){
            gracz.loc --;
            if (maze[gracz.loc].stan != 1){
                ctx.clearRect(gracz.x * 24,gracz.y * 24, 24, 24);
                gracz.x --;
            }
            else {
                gracz.loc ++;
            }
        }
    }
    //Dol
    if(moveX > 9 && moveX < 180){
        if (gracz.y != 19){
            gracz.loc += 20;
            if (maze[gracz.loc].stan != 1){
                ctx.clearRect(gracz.x * 24,gracz.y * 24, 24, 24);
                gracz.y ++;
            }
            else {
                gracz.loc -= 20;
            }
        }
    }
    //Gora
    if(moveX < 90 && moveX > 0){
        if (gracz.y != 0){
            gracz.loc -= 20;
            if (maze[gracz.loc].stan != 1){
                ctx.clearRect(gracz.x * 24,gracz.y * 24, 24, 24);
                gracz.y --;
            }
            else {
                gracz.loc += 20;
            }
        }
    }
    ctx.drawImage(ball,gracz.x * 24,gracz.y * 24,24,24);
    //wygrana
	if (maze[gracz.loc].stan == 2){
        koniec = Date.now();
        alert("Gratulacje! Wygrałeś! Twój czas to:"+koniec - poczatek+""); //dodac czas
        location.reload();
    }
    //przegrana
    if (maze[gracz.loc].stan == 3){
        alert("Wpadłeś do lawy, spróbuj ponownie :)"+koniec - poczatek+"");
        location.reload();
    }
}
//rysowanie pola gry
function start(){
	for (let i = 0;i < 20 * 20;i++){
        //sciana
		if (maze[i].stan == 1 || maze[i].stan == "1")
            ctx.drawImage(sciana,maze[i].x * 24, maze[i].y * 24, 22, 22);
        //meta
		if (maze[i].stan == 2 || maze[i].stan == "2")
            ctx.drawImage(meta,maze[i].x * 24, maze[i].y * 24, 22, 22);
        //lawa
        if (maze[i].stan == 3 || maze[i].stan == "3")
			ctx.drawImage(lawa,maze[i].x * 24, maze[i].y * 24, 22, 22);
	}
	ctx.drawImage(ball,gracz.x * 24,gracz.y * 24,24,24);
    window.addEventListener("deviceorientation", moveMe, true);
}
//nowa gra
startGame.addEventListener('mousedown', () => {
    start();
    odliczanie();
});
