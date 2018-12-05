let mazeArray = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,
    1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,
    1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,
    1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,
    1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,
    1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,
    1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,
    1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,
    1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,
    1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,
    1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,
    1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,
    1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,
    1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,
    1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,
    1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,
    1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,
    1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,2,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");

let startGame = document.getElementById('start');
let end = document.getElementById('end');
let restart = document.getElementById('restart');

let ball = document.getElementById('ball');
let ctxBall = ball.getContext('2d');
ctxBall.beginPath();
ctxBall.arc(24, 24, 24, 0, 2 * Math.PI);
ctxBall.stroke();

let sciana = new Image();
sciana.src = "sciana.png";

let meta = new Image();
meta.src = "meta.png";

let maze = [];

let gracz = new Object({x:0,y:1,loc: 20}); // x i y pozycja kulki

let x = 0, y = 0;

for (let i = 0;i < 20 * 20;i++){
	maze.push({"x":x,"y":y,"state":mazeArray[i]});
	if (x == 19){
		y++;
		x = 0;
	}
	else {x++;}
}

function moveMe(e){
    let moveY = e.gamma / 10; //range -90,90
    let moveX = e.beta / 10; //range -180,180

    if(moveX > 90)
        moveX -= 90;
    if(moveX < 90)
        moveX += 90;

    //Prawo
    if(moveY > 0 && moveY < 180){
        if (gracz.x != 19){
            gracz.loc ++;
            if (maze[gracz.loc].state != 1){
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
            if (maze[gracz.loc].state != 1){
                ctx.clearRect(gracz.x * 24,gracz.y * 24, 24, 24);
                gracz.x --;
            }
            else {
                gracz.loc ++;
            }
        }
    }
    //Dol
    if(moveX > 90 && moveX < 180){
        if (gracz.y != 19){
            gracz.loc += 20;
            if (maze[gracz.loc].state != 1){
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
            if (maze[gracz.loc].state != 1){
                ctx.clearRect(gracz.x * 24,gracz.y * 24, 24, 24);
                gracz.y --;
            }
            else {
                gracz.loc += 20;
            }
        }
    }
    ctx.drawImage(ball,gracz.x * 24,gracz.y * 24,24,24);
	if (maze[gracz.loc].state == 2){
        end.style.display = "inline";
        restart.style.display = "inline";
        restart.addEventListener("click", ()=>{
            location.reload();
        });
	}
}

function start(){
	for (let i = 0;i < 20 * 20;i++){
		if (maze[i].state == 1 || maze[i].state == "1")
			ctx.drawImage(sciana,maze[i].x * 24, maze[i].y * 24, 22, 22);
		if (maze[i].state == 2 || maze[i].state == "2")
			ctx.drawImage(meta,maze[i].x * 24, maze[i].y * 24, 22, 22);
	}
	ctx.drawImage(ball,gracz.x * 24,gracz.y * 24,24,24);
    window.addEventListener("deviceorientation", moveMe, true);
}

startGame.addEventListener('mousedown', () => {
    start();
});