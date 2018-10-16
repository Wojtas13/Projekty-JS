let slider = document.querySelector('#slider');
let img = document.querySelectorAll('img');

function zmienslajd()
{
    slider.style.left = "-30px";
    img.style.left = "10px";
}

let slider2 = addEventListener('mouseover', zmienslajd());   

