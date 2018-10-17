let slider = document.querySelector('#slider');
let positionSlider = 0;

requestAnimationFrame(animation);
let start = true;

function animationStartStop(e)
{
    start = !start;
    requestAnimationFrame(animation);
}


function animation() {
       
    setTimeout(animation, 16);
    positionSlider--;

    slider.addEventListener('mouseover', animationStartStop);
    slider.addEventListener('mouseleave', animationStartStop);

    if(start)
    {
         slider.style.left = `${positionSlider}px`;
    }
}

function animationStart(e){
    start = true;
    animation();
}