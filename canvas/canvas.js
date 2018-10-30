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

kontrast.addEventListener('change', (e) => {
    imageData = ctx.getImageData(0, 0, plotno.width, plotno.height);
    let value = kontrast.value;                          // pobieranie wartosci z suwaka
    console.log(value);
})
jasnosc.addEventListener('change', (e) => {
    imageData = ctx.getImageData(0, 0, plotno.width, plotno.height);
    value = jasnosc.value;                                  // pobieranie wartosci z suwaka

    if(value <= -100 || value < 0){
        for(let i = 0; i < imageData.data.length; i += 4){
            imageData.data[i] = Math.min(255, imageData.data[i] + value);
            imageData.data[i + 1] = Math.min(255, imageData.data[i + 1] + value);
            imageData.data[i + 2] = Math.min(255, imageData.data[i + 2] + value);
        }
        ctx.putImageData(imageData, 0, 0);
    }
    else if(value >= 100 || value > 0){
        for(let i = 0; i < imageData.data.length; i += 4){
            imageData.data[i] = Math.min(255, imageData.data[i] - value);
            imageData.data[i + 1] = Math.min(255, imageData.data[i + 1] - value);
            imageData.data[i + 2] = Math.min(255, imageData.data[i + 2] - value);
        }
        ctx.putImageData(imageData, 0, 0);
    }
    else{
        for(let i = 0; i < imageData.data.length; i += 4){
            imageData.data[i] = Math.min(255, imageData.data[i]);
            imageData.data[i + 1] = Math.min(255, imageData.data[i + 1]);
            imageData.data[i + 2] = Math.min(255, imageData.data[i + 2]);
        }
        ctx.putImageData(imageData, 0, 0);
    }
    console.log(value);
})
nasycenie.addEventListener('change', (e) => {
    imageData = ctx.getImageData(0, 0, plotno.width, plotno.height);
    value = nasycenie.value;                                // pobieranie wartosci z suwaka
    console.log(value);
})

//zmiana kontrastu jasnosci nasycenia
// rysowanie zdjecia podpiecie mousemove do canvasa