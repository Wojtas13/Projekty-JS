// obiekt websocket 
//      (let a = new WebSocket(urlserwera))
// serwer: 
//      ws://wsei.edu.pl:8010
// wysylanie wiadomosci a.send(wiadomosc)
// odbieranie wiadomosci: zdarzenie message obiektu websocket
// inne zdarzenia: error, open, close

let server = 'ws://localhost:8080';
let ws = new WebSocket(server);
document.addEventListener("DOMContentLoaded", appStart);

function appStart(){
    ws.addEventListener('open', wsOpen);
    ws.addEventListener('close', wsClose);
    ws.addEventListener('message', wsMessage);
    ws.addEventListener('error', wsError);
    
    let btn = document.querySelector('#send');
    btn.addEventListener('mousedown', wsMessage);
    
}

function wsOpen(){
    console.log("ws open");
}

function wsClose(){
    console.log("ws close");
}
function wsMessage(){
    
    let message = {
        body: document.querySelector('#msg').value,
        nick: document.querySelector('#nick').value
    }
    ws.send(JSON.stringify(message));
    console.log(message)
}

function wsError(){
    console.log("ws error");
}