var ship,L_ship
var sea,ocean
var horizon80
function preload(){
  L_ship=loadAnimation("ship-4.png")
  ocean=loadImage("sea.png")
}

function setup(){
  createCanvas(500,500);
  sea=createSprite(120,150,500,500)
  horizon=createSprite(180,325,800,0.1)
  ship=createSprite(120,150,20,50)
  sea.addImage("wave",ocean)
  ship.addAnimation("sink",L_ship);
  edges=createEdgeSprites()
  ship.scale=0.2
}

function draw() {
  background("blue")
if(keyDown("space")){
  ship.velocityY=-10
}
ship.velocityY= ship.velocityY+0.5
ship.collide (horizon)
sea.velocityX=-15
if(sea.x<0){
  sea.x= sea.width/2
}
 drawSprites()
}