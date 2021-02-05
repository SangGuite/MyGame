var horse,horseIMG,horseJump,ground,background,backgroundIMG;

function preload() {
  horseRun=loadAnimation("Horse1.png","Horse2.png","Horse3.png","Horse4.png","Horse5.png","Horse6.png","Horse7.png","Horse8.png",
  "Horse9.png","Horse10.png","Horse11.png","Horse12.png");
  horseJump=loadAnimation("Jump1.png","Jump2.png","Jump3.png","Jump4.png","Jump5.png");
  backgroundIMG=loadImage("jungle.jpg");      
}

function setup() {
  createCanvas(820, 380);

  background=createSprite(0,0,820,380);
  background.addImage(backgroundIMG);

  horse=createSprite(410,200,5,5);
  horse.addAnimation("moving",horseRun);
  horse.scale=1.2;

  ground=createSprite(400, 300, 2000, 20);
  ground.x=ground.width/2;
  ground.velocityX=-30;
  ground.visible=false;
}

function draw() {
  background.velocityX=-12;
  if(background.x < 310){
    background.x=background.width/2;
  }

  if(ground.x < 0){
    ground.x=ground.width/2;
  }

  if(keyDown("space") && horse.y > 100){
    horse.velocityY=-10;
    horse.changeAnimation("jump",horseJump);
  }

  horse.velocityY = horse.velocityY + 1;
  horse.collide(ground);

  drawSprites();

  camera.x=horse.x;
  camera.y=horse.y-50;
}