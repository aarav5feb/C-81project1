canvas=document.getElementById("myCanvas");
color="blue";
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{
    color=document.getElementById("color").value;
    console.log(color);

    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;

    console.log("X = " + mouse_x +" ,Y = " + mouse_y);
    circle(mouse_x, mouse_y);
}

function circle(mouse_x, mouse_y)
{
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(mouse_x, mouse_y, 40 ,0,2*Math.PI);
    ctx.stroke();
    
}






canvas=document.getElementById("myCanvas");
color2="yellow";
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle=color2;
ctx.lineWidth=2;
ctx.arc(250,250,40,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{
    color=document.getElementById("color2").value;
    console.log(color);

    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;

    console.log("X = " + mouse_x +" ,Y = " + mouse_y);
    circle(mouse_x, mouse_y);
}

function circle(mouse_x, mouse_y)
{
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(mouse_x, mouse_y, 40 ,0,2*Math.PI);
    ctx.stroke();
    
}







canvas=document.getElementById("myCanvas");
color3="black";
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle=color3;
ctx.lineWidth=2;
ctx.arc(300,200,40,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{
    color=document.getElementById("color3").value;
    console.log(color);

    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;

    console.log("X = " + mouse_x +" ,Y = " + mouse_y);
    circle(mouse_x, mouse_y);
}

function circle(mouse_x, mouse_y)
{
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(mouse_x, mouse_y, 40 ,0,2*Math.PI);
    ctx.stroke();
    
}









canvas=document.getElementById("myCanvas");
color4="green";
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle=color4;
ctx.lineWidth=2;
ctx.arc(350,250,40,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{
    color=document.getElementById("color4").value;
    console.log(color);

    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;

    console.log("X = " + mouse_x +" ,Y = " + mouse_y);
    circle(mouse_x, mouse_y);
}

function circle(mouse_x, mouse_y)
{
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(mouse_x, mouse_y, 40 ,0,2*Math.PI);
    ctx.stroke();
    
}













canvas=document.getElementById("myCanvas");
color5="red";
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle=color5;
ctx.lineWidth=2;
ctx.arc(400,200,40,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{
    color=document.getElementById("color5").value;
    console.log(color);

    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;

    console.log("X = " + mouse_x +" ,Y = " + mouse_y);
    circle(mouse_x, mouse_y);
}

function circle(mouse_x, mouse_y)
{
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(mouse_x, mouse_y, 40 ,0,2*Math.PI);
    ctx.stroke();
    
}




















canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
ctx.fillStyle= "rgb(235,33,46)";
ctx.fillRect(50,40,100,30);
