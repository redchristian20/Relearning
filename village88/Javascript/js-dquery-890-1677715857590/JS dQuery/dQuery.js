//Clicking on h1 should hide all the h1 and clicking on p should hide all the paragraphs
var h1 = document.getElementsByTagName('h1');
var p = document.getElementsByTagName('p');
if(h1)
{
    for(let i = 0; i < h1.length; i++) 
    {
        h1[i].onclick = function(event) 
        {
            h1[i].style.display = "none";
            console.log("h1 is clicked");
            console.log("event passed to the callback function is",event);
        }
    }
}
if(p)
{
    for(let i = 0; i < p.length; i++) 
    {
        p[i].onclick = function(event) 
        {
            for(let i = 0; i < p.length; i++) {
                p[i].style.display = "none";
            }
            console.log("p is clicked");
            console.log("event passed to the callback function is",event);
        } 
    }
}
if(p && h1)
{
    //Clicking on show_all should show both h1 and p
    document.getElementById('show_all').onclick = function(event) 
    {
        console.log("#show_all is clicked");
        console.log("event passed to the callback function is",event);
        const e_h1 = document.getElementsByTagName('h1');
        const e_p = document.getElementsByTagName('p');
        for(let i = 0; i < e_h1.length; i++) 
        {
            e_h1[i].style = "display:block";
        }
        for(let i = 0; i < e_p.length; i++) 
        {
            e_p[i].style = "display:block";
        }
    }

    //Clicking on hide_all hide both h1 and p
    document.getElementById('hide_all').onclick = function(event) 
    {
        console.log("#hide_all is clicked");
        console.log("event passed to the callback function is",event);
        const e_h1 = document.getElementsByTagName('h1');
        const e_p = document.getElementsByTagName('p');
        for(let i = 0; i < e_h1.length; i++) 
        {
            e_h1[i].style = "display:none";
        }
        for(let i = 0; i < e_p.length; i++) {
            e_p[i].style = "display:none";
        }
    }
}

