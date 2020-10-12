var mouseEvent = " ";
var l_x,l_y;
var width = screen.width;
new_width = screen.width - 70;
new_height = screen.height - 300




canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="blue";
var width_of_line = 1;
if(width < 992)
{
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}
canvas.addEventListener("mousedown" , my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    
    width_of_line = document.getElementById("width_of_line").value;

    mouseEvent = "mouseDown"

}
function cleararea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
canvas.addEventListener("mousemove" , my_mousemove);

function my_mousemove(e)
{
    
    c_mouse_x=e.clientX - canvas.offsetLeft;
    c_mouse_y=e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(l_x,l_y);

        ctx.lineTo(c_mouse_x,c_mouse_y);
        ctx.stroke();
    }
    l_x = c_mouse_x;
    l_y = c_mouse_y;



}
canvas.addEventListener("mouseup" , my_mouseup);

function my_mouseup(e)
{
    mouseEvent = "mouseUp";

}
canvas.addEventListener("mouseleave" , my_mouseleave);

function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}
canvas.addEventListener("touchstart" , my_touchstart);

function my_touchstart(e)
{
    console.log("my_touchstart");
    l_x = e.touches[0].clientX-canvas
    l_y = e.touches[0].clientY-canvas
}
canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e)
{
    console.log("my_touchMove");
    c_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
    c_mouse_y = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath()
    ctx.strokeStyle=color;
    ctx.lineWidth = width_of_line
    ctx.moveTo(l_x,l_y);
    ctx.lineTo(c_mouse_x,c_mouse_y);
    ctx.stroke();
    l_x = c_mouse_x;
    l_y = c_mouse_y;

}
