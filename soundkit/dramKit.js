document.addEventListener("DOMContentLoaded", appStart);

const sounds = {
    97: 'boom',
    115: "clap",
    100: "hihat",
    102: "kick",
    103: "openhat",
    104: "ride",
    106: "snare",
    107: "tink",
    108:"tom"
}

//kanaly do odtwarzania
let channel1 =[];
let channel2 =[];
let channel3 =[];
let channel4 =[];

let isRecording = false;
let recStart = null;

function appStart() {
    window.addEventListener('keypress', playSound);
    document.querySelector('#rec').addEventListener('click', (e)=>{
        isRecording = !isRecording;
        recStart = Date.now();
        e.target.innerHTML = isRecording ? 'Zatrzymaj' : 'Nagrywaj';
    });
    document.querySelector('#play').addEventListener('click', playMusic);
}

function playMusic() {
    channel1.forEach(sound =>{
        setTimeout(
            () => {
                audioDOM = document.querySelector(`#${sound.sound}`);
                audioDOM.currentTime = 0;
                audioDOM.play();
                }
            ,sound.time
        )},
    )
    channel2.forEach(sound =>{
        setTimeout(
            () => {
                audioDOM = document.querySelector(`#${sound.sound}`);
                audioDOM.currentTime = 0;
                audioDOM.play();
                }
            ,sound.time
        )},
    )
    channel3.forEach(sound =>{
        setTimeout(
            () => {
                audioDOM = document.querySelector(`#${sound.sound}`);
                audioDOM.currentTime = 0;
                audioDOM.play();
                }
            ,sound.time
        )},
    )
    channel4.forEach(sound =>{
        setTimeout(
            () => {
                audioDOM = document.querySelector(`#${sound.sound}`);
                audioDOM.currentTime = 0;
                audioDOM.play();
            }
        , sound.time
    )}
)}

function playSound(e) {
    //pobierz nazwe dzwieku
    const soundName = sounds[e.charCode];
    //pobierz uchwyt
    audioDOM = document.querySelector(`#${soundName}`);
    //otworz dzwiek
    audioDOM.currentTime = 0;
    audioDOM.play();
    //zapisz dzwiek w tablicy
    if(isRecording){
        channel1.push({
            sound: soundName,
            time: Date.now() - recStart
        });
    }
}

//mapa przypisuje wartosci do klucza
/*
const s = Map()
s.setItem(true, 'prawda');
*/