const lamp = document.getElementById ( 'lamp' );

function On(){
  if(!isLampBroken()){
    lamp.src = './img/ligada-removebg-preview.png';
  }
}
function Off(){
  if(!isLampBroken()){
    lamp.src = './img/desligada-removebg-preview.png'
  }
}

function Broken () {
    lamp.src = './img/quebrada-removebg-preview.png';
}

function isLampBroken () {
    return lamp.src.indexOf ( 'quebrada' ) > -1
}

lamp.addEventListener ( 'mouseover', On );
lamp.addEventListener ( 'mouseleave', Off );
lamp.addEventListener ( 'dblclick', Broken );