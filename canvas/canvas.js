let plik = document.querySelector('#grafika');
let plotno = document.querySelector('#plotno');
let btnRun = document.querySelector('#run');
let kontrast = document.querySelector('#kontrast');
let jasnosc = document.querySelector('#jasnosc');
let nasycenie = document.querySelector('#nasycenie');

/*
plik.addEventListener('change', (e) => {
    console.log(e)
});
*/

let zdjecie = "./city.jpg";

let ctx = plotno.getContext('2d'); // kontekst

let img = new Image(); // pobieranie zdjecia
img.src = zdjecie;
img.addEventListener('load', (e) => {
    ctx.drawImage(img, 0, 0, plotno.clientWidth, plotno.height); // rysowanie zdjecia
});

btnRun.addEventListener('click', (e) => {
    let imageData = ctx.getImageData(0, 0, plotno.width, plotno.height); // pobieranie pikseli
    console.log(imageData);
    for(let i = 0; i < imageData.data.length; i += 4){ //petla pobiera caly piksel 
        imageData.data[i] = Math.min(255, imageData.data[i] + 30);
        imageData.data[i + 1] = Math.min(255, imageData.data[i + 1] + 30);
        imageData.data[i + 2] = Math.min(255, imageData.data[i + 2] + 30); // dodawanie wartosci do kazdej skladowej piksela
    }
    ctx.putImageData(imageData, 0, 0); // wrzucanie do canvasa 
});

kontrast.addEventListener('click', (e) => {
    
})

//zmiana kontrastu jasnosci nasycenia
// rysowanie zdjecia podpiecie mousemove do canvasa