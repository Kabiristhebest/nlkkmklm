let ground;
let lander;
var lander_img;
var bg_img;


var vx = 0;
var g = 0.05;
var vy = 0;
var invisibleGround
function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;
  invisibleGround=createSprite(100,600,100,20)
  invisibleGround.visible=false
  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  text(mouseX +","+ mouseY,mouseX,mouseY)
  image(bg_img,0,0);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();
  if(lander.collide(invisibleGround)){
    vy+=0
  }
  if(keyDown(UP_ARROW)){
    lander.y -= 50
  }
  if(keyDown(DOWN_ARROW)){
    lander.y += 50
  }
  if(keyDown(LEFT_ARROW)){
    lander.x -= 50
  }
  if(keyDown(RIGHT_ARROW)){
    lander.x += 50
  }
  //fall down
  vy +=g;
  lander.position.y+=vy;
  lander.collide(invisibleGround)
  drawSprites();
}


