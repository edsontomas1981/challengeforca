var tela = document.querySelector('canvas');
var pincelCabeca = tela.getContext('2d');
var pincelCorpo = tela.getContext('2d');
var raio = 0

function desenhaCabeca() {
    pincelCabeca.fillStyle = 'black';
    pincelCabeca.beginPath();
    pincelCabeca.arc(50, 39, 20, 0, 2 * Math.PI);
    pincelCabeca.fill();
    pincelCabeca.fillStyle = 'white';
    pincelCabeca.beginPath();
    pincelCabeca.arc(50, 39, 19, 0, 2 * Math.PI);
    pincelCabeca.fill();
    desenhaOlhosVivos();
    desenhaBoca();
}
function desenhaCorpo(){
    pincelCorpo.moveTo(50,60);
    pincelCorpo.lineWidth = 3 ;
    pincelCorpo.lineTo(50, 110);
    pincelCorpo.stroke();
    pincelCorpo.fill();
}
function desenhaBracoDir(){
    pincelCorpo.moveTo(50,65);
    pincelCorpo.lineWidth = 3 ;
    pincelCorpo.lineTo(80, 80);
    pincelCorpo.stroke();
    pincelCorpo.fill();
}
function desenhaBracoEsq(){
    pincelCorpo.moveTo(50,65);
    pincelCorpo.lineWidth = 3 ;
    pincelCorpo.lineTo(20, 80);
    pincelCorpo.stroke();
    pincelCorpo.fill();
}
function desenhaPernaEsq(){
    pincelCorpo.moveTo(50,110);
    pincelCorpo.lineWidth = 3 ;
    pincelCorpo.lineTo(20, 140);
    pincelCorpo.stroke();
    pincelCorpo.fill();
}
function desenhaPernaDir(){
    pincelCorpo.moveTo(50,110);
    pincelCorpo.lineWidth = 3 ;
    pincelCorpo.lineTo(80, 140);
    pincelCorpo.stroke();
    pincelCorpo.fill();
}

function desenhaOlhosVivos() {
    pincelCabeca.fillStyle = 'black';
    pincelCabeca.beginPath();
    pincelCabeca.arc(40, 40, 4, 0, 2*Math.PI);
    pincelCabeca.fill();
    pincelCabeca.fillStyle = 'black';
    pincelCabeca.beginPath();
    pincelCabeca.arc(60, 40, 4, 0, 2 * Math.PI);
    pincelCabeca.fill();
}
function desenhaBoca(){
    pincelCabeca.fillStyle = 'black';
    pincelCabeca.beginPath();
    pincelCabeca.arc(50, 45, 6, 0, Math.PI);
    pincelCabeca.fill();
    pincelCabeca.fillStyle = 'white';
    pincelCabeca.beginPath();
    pincelCabeca.arc(50, 45, 4, 0, Math.PI);
    pincelCabeca.fill();
}

