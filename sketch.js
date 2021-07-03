var iss,spacecraft,bg,issImg,scImg,hasDocked=false;
function preload(){
bg=loadImage("spacebg.jpg")
issImg=loadImage("iss.png")
scImg=loadImage("spacecraft2.png")
}

function setup() {

  createCanvas(800,400);
 spacecraft= createSprite(400, 200, 50, 50);
 spacecraft.addImage(scImg)
 spacecraft.scale=0.6;
iss=createSprite(300,100,50,50);
iss.addImage(issImg)
iss.scale=0.55;

}

function draw() {
  background(bg);
  if(!hasDocked){
spacecraft.x=spacecraft.x+random(-1,1)
if(spacecraft.x<0||spacecraft.x>800){
spacecraft.x=400;
}
  }
  if(keyDown("UP_ARROW")){
    iss.y=iss.y-2
  }
  if(keyDown("DOWN_ARROW")){
    iss.y=iss.y+2
  }
  if(keyDown("LEFT_ARROW")){
    iss.x=iss.x-2
  }
  if(keyDown("RIGHT_ARROW")){
    iss.x=iss.x+2
  }
  drawSprites();
}