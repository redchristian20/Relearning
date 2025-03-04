var h1Element = document.querySelector('h1');

h1Element.style.color = 'blue';

var isYellow = false;
var bodyElement = document.querySelector('body');

setInterval(function (){
    if (isYellow){
        bodyElement.style.background = 'white';
    }else{
        bodyElement.style.background = 'yellow';
    }
    isYellow = !isYellow;

},1000);