let slider = document.querySelector('#slider');
let positionSlider = 0;
let time = null;

requestAnimationFrame(animation);
let start = true;

function animationStartStop()
{
    start = !start;
    requestAnimationFrame(animation);
    clearTimeout(time);
}

function animation() {
       
    time = setTimeout(animation, 10);
    positionSlider--;

    slider.addEventListener('mouseover', animationStartStop);
    slider.addEventListener('mouseleave', animationStartStop);

    if(start)
    {
         slider.style.left = `${positionSlider}px`;
         
    }
    if(positionSlider == -2800){
        positionSlider = 0;
    } 
}

function animationStart(){
    start = true;
    animation();
}