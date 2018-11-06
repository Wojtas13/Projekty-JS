let plik = document.querySelector('#grafika');
let plotno = document.querySelector('#plotno');
let btnRun = document.querySelector('#run2');

let kontrast = document.querySelector('#kontrast');
let jasnosc = document.querySelector('#jasnosc');
let nasycenie = document.querySelector('#nasycenie');

//////////////////////////////////

let value = undefined;  // wartosc suwaka
let zdjecie = "./city.jpg";
let ctx = plotno.getContext('2d'); // kontekst
let img = new Image(); // pobieranie zdjecia
img.src = zdjecie;

// po zaladowaniu strony

img.addEventListener('load', (e) => {
    ctx.drawImage(img, 0, 0, plotno.clientWidth, plotno.height); // rysowanie zdjecia
    let imageData = ctx.getImageData(0, 0, plotno.width, plotno.height); // wspolrzedne
});

// pobierz piksele

btnRun.addEventListener('click', (e) => {
    imageData = ctx.getImageData(0, 0, plotno.width, plotno.height); // pobieranie pikseli
    console.log(imageData);
/*
    for(let i = 0; i < imageData.data.length; i += 4){ //petla pobiera caly piksel 
        imageData.data[i] = Math.min(255, imageData.data[i] + 30);
        imageData.data[i + 1] = Math.min(255, imageData.data[i + 1] + 30);
        imageData.data[i + 2] = Math.min(255, imageData.data[i + 2] + 30); // dodawanie wartosci do kazdej skladowej piksela
    }
    ctx.putImageData(imageData, 0, 0); // wrzucanie do canvasa */
});

// suwak kontrastu

kontrast.addEventListener('change', (e) => {
    value = kontrast.value;
    value = parseInt(value, 10);
    imageData = ctx.getImageData(0, 0, plotno.width, plotno.height);
    factor = (259 * (value + 255)) / (255 * (259 - value));
    for (var i = 0; i < imageData.data.length; i += 4) {
        imageData.data[i] = factor * (imageData.data[i] - 128) + 128;
        imageData.data[i + 1] = factor * (imageData.data[i + 1] - 128) + 128;
        imageData.data[i + 2] = factor * (imageData.data[i + 2] - 128) + 128;
    }
    ctx.putImageData(imageData, 0, 0);
    console.log(punkt.width);
});

// suwak jasnosci

jasnosc.addEventListener('change', (e) => { 
    value = jasnosc.value;
    value = parseInt(value, 10);
    imageData = ctx.getImageData(0, 0, plotno.width, plotno.height);
    for(let i = 0; i < imageData.data.length; i += 4){
        imageData.data[i] += value;
        imageData.data[i + 1] += value;
        imageData.data[i + 2] += value;
    }
    ctx.putImageData(imageData, 0, 0);
});

// suwak nasycenia

nasycenie.addEventListener('change', (e) => {
    value = nasycenie.value;
    value = parseFloat(value);
    imageData = ctx.getImageData(0, 0, plotno.width, plotno.height);
    let dA = imageData.data;
    let sv = value;
    let luR = 0.3086;
    let luG = 0.6094;
    let luB = 0.0820;
    let az = (1 - sv) * luR + sv;
    let bz = (1 - sv) * luG;
    let cz = (1 - sv) * luB;
    let dz = (1 - sv) * luR;
    let ez = (1 - sv) * luG + sv;
    let fz = (1 - sv) * luB;
    let gz = (1 - sv) * luR;
    let hz = (1 - sv) * luG;
    let iz = (1 - sv) * luB + sv;
    for (let i = 0; i < dA.length; i += 4) {
        let red = dA[i];
        let green = dA[i + 1];
        let blue = dA[i + 2];
        let saturatedRed = (az * red + bz * green + cz * blue);
        let saturatedGreen = (dz * red + ez * green + fz * blue);
        let saturateddBlue = (gz * red + hz * green + iz * blue);
        dA[i] = saturatedRed;
        dA[i + 1] = saturatedGreen;
        dA[i + 2] = saturateddBlue;
    }
    imageData.data = dA;
    ctx.putImageData(imageData, 0, 0);
});

//-------------------------
//zmiana kontrastu jasnosci nasycenia
// rysowanie po zdjeciu mouse events canvas