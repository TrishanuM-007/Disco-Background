
var circle

var bg

function setup(){
createCanvas(1200,400);



}


function draw(){
  
  bg = background(0)

  fill(102,0,51);
  circle = ellipse(mouseX,mouseY,50,50);
  if(mouseX < 450){
    bg = background(22,167,90);
  }
  
  if(mouseX > 750){
    bg = background(255,0,22);
  }
  if(mouseY < 100){
    bg = background(60,225,225);
  }
  if(mouseY > 300){
    bg = background(255,255,0);
  }

  drawSprites()
}