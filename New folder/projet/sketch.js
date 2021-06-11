var militaryman;
var militarymanimage;
var militarymanwithgun;
var militarymanwithunimage;
var bomb;
var bombimage;
var heliopter;
var helicopterimage;
var prize;
var prizeimage;
var groundimage,ground,invisibleground;
var bombGroup;
var gameoverimage;

function preload(){
  militarymanimage=loadImage("military man.png");
  militarymanwithgunimage=loadImage("military-man-with-gun-.jpg" ) ;
  prizeimage=loadImage("download (1).png");
  helicoterimage=loadImage("download.png");
  bombimage=loadImage("bomb.jpg");
  groundimage=loadImage("backgroundimage.jpg");
  gameoverimage=loadImage("gameoverimage.jpg");
}

function setup(){
  createCanvas(800,600);
  ground=createSprite(600,300);
  ground.addImage(groundimage);
  ground.scale=1.4;
  ground.velocityX = -2.5;
  ground.x=ground.width/2;
  bombGroup = new Group();


  

  
  // creating trex
 // trex = createSprite(50,160,20,50);
 // trex.addAnimation("running", trex_running);
  //edges = createEdgeSprites();
  militaryman=createSprite(50,450);
  militaryman.addImage(militarymanimage);
  militaryman.scale=0.8;
  
  //adding scale and position to trex
  //trex.scale = 0.5;
  //trex.x = 50
}


function draw(){
  //set background color 
  background("lightgreen");
  militaryman.y = World.mouseY;
  militaryman.x = World.mouseX;
  //logging the y position of the trex
  //console.log(trex.y)
 // if(ground.x< 1000){
   // ground.x = 600
   if(ground.x<200){
ground.x=ground.width/2;
   }
  spawnBomb();
  if (bombGroup.isTouching(militaryman)){
    
     bombGroup.destroyEach();
     bombGroup.setVelocityXEach(0);
     ground.velocityX=0;
     militaryman.addImage(gameoverimage);
     militaryman.x=300;
     militaryman.y=200;
     militaryman.scale=1;
  }
  //jump when space key is pressed
 // if(keyDown("space")){
    //trex.velocityY = -10;
    drawSprites();}
   
 // trex.velocityY = trex.velocityY + 0.5;
  
  //stop trex from falling down
  //trex.collide(edges[3])
 
//}
function spawnBomb(){
  
    //write code here to spawn the clouds
    if (frameCount % 100 === 0) {
      var bomb = createSprite(600,600,40,10);
      bomb.y = Math.round(random(200,600));
      bomb.addImage(bombimage);
      bomb.scale = 0.1;
      bomb.velocityX = -3;
      bomb.lifetime = 800;
      bombGroup.add(bomb);
    }     
}