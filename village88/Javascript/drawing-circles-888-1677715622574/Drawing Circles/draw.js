var choice = 3; //initialize green color
var i = 0; //Circle ID tracker
canvas = document.getElementById("canvas");
if(canvas)
{
    canvas.addEventListener("click", function(e) {
        let x = e.screenX -90; //Adjusted to my screen
        let y = e.screenY -169; //Adjusted to my screen
    
        //Circle Attributes
        var wid = [200,150,180];
        var hei = [200,150,180];
        var rad = [100,75,90];
    
        //Random number 0-2
        let rand = Math.floor(Math.random() * (3 - 0));
    
        var color = ['A31ACB','0081C9','CD0404','CCE8CC'];
    
        //Color Buttons -- using choice variable
        document.getElementById('blue').onclick = function() {
            choice = 1;
        };
        document.getElementById('red').onclick = function() {
            choice = 2;
        };
        document.getElementById('purple').onclick = function() {
            choice = 0;
        };
        
        //Reset
        document.getElementById('reset').onclick = function() {
            console.log('delete');
            const elements = document.getElementsByClassName("circles");
            while (elements.length > 0) elements[0].remove();
            i = 0;
            choice = 3;
            circle_ids = [];
        };
        console.log("Rand: ",rand, " Choice: ",choice);
    
        //Draw Circles
        var circle = document.createElement("p");
        circle.classList.add("circles");
    
        circle.id = "c" + i++;
        circle.style = "position: absolute; top: " + y + "px; left:" + x + "px; width:" + wid[rand] +"px; height:" + hei[rand] +"px; border-radius:" + rad[rand] +"px; background-color: #" + color[choice];
        document.getElementById('canvas').append(circle);
    
        var condition = true; //addition condition 
    
        let id = null;
        var element = document.getElementById(circle.id);
        let width = parseInt(element.style.width);
        let height = parseInt(element.style.height);
        clearInterval(id);
    
        id = setInterval(function shrink(){
            console.log('shrinking...');
                
            if(width === 0 && height === 0) {
                clearInterval(id);
                const c = document.getElementById(circle.id);
                c.remove();
                condition = false;
            } else {
                width--; height--;
                element.style.width = width + "px";
                element.style.height = height + "px";
            }
        },10); //Change 10 -> to a higher number to make animation slower
    });
}

