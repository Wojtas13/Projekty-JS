// obiekt websocket 
//      (let a = new WebSocket(urlserwera))
// serwer: 
//      ws://wsei.edu.pl:8010
// wysylanie wiadomosci a.send(wiadomosc)
// odbieranie wiadomosci: zdarzenie message obiektu websocket
// inne zdarzenia: error, open, close

let server = 'ws://wsei.edu.pl:8010';
let ws = new WebSocket(server);
let licznik = 1
document.addEventListener("DOMContentLoaded", appStart);

function appStart(){
    ws.addEventListener('open', wsOpen);
    ws.addEventListener('close', wsClose);
    ws.addEventListener('message', wsMessage);
    ws.addEventListener('error', wsError);
    
   /* function sa(){
        let title = document.querySelector('title').value;
        let body = document.querySelector('msg').value;
    }*/
    
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
        title: document.querySelector('#title').value
    }
    ws.send(JSON.stringify(message));
    console.log(licznik++)
}

function wsError(){
    console.log("ws error");
}