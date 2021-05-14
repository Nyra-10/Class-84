var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var rover_width=100;
var rover_height=90;
roverx=10;
rovery=10;
var bground_image="mars.jpg";
var rover_image="rover.png";
function addfunction(){
bground_image_tag=new Image();
bground_image_tag.onload=uploadbground;
bground_image_tag.src=bground_image;
rover_imagetag=new Image();
rover_imagetag.onload=uploadrover;
rover_imagetag.src=rover_image;
}
function uploadbground(){
    ctx.drawImage(bground_image_tag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_imagetag,roverx,rovery,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
keypress=e.keyCode;
if(keypress=='38'){
    up();
    console.log("up");
}
if(keypress=='40'){
    down();
    console.log("down");
}
if(keypress=='37'){
    left();
    console.log("left");
}
if(keypress=='39'){
    right();
    console.log("right");
}
}