var monkey, monkey_running;
var banana, bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score = 0;
var survivalTime = 0;

function preload(){  
  monkey_running =
  loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png", "sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");   
   
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png"); 
}

function setup() {  
  //create monkey
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  //create ground
  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;
  console.log(ground.x);
  
  foodGroup = createGroup();
  obstacleGroup = createGroup();
}

function draw() {
  createCanvas(400, 400);
  background("lightblue");
  ground.x = ground.width/2;
  spawnObstacles();
  spawnBananas();
  drawSprites();
  
  if (keyDown("space")) {
    monkey.velocityY = -6;       
  }
  monkey.velocityY = monkey.velocityY + 0.5;
  monkey.collide(ground);

  stroke("white");
  fill("white");
  textSize(20);
  text("Score : " + score, 300, 50);
  
  stroke("black");
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time : " + survivalTime, 100, 50);
}

function spawnBananas() {
  //write code here to spawn the bananas
  if (frameCount % 60 === 0) {
    banana = createSprite(400,340,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 200;
    foodGroup.add(banana);
  }
}

function spawnObstacles() {
  //write code here to spawn the obstacles
  if (frameCount % 300 === 0) {
    obstacle = createSprite(400,330,40,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    obstacle.lifetime = 200;
    obstacleGroup.add(obstacle);
  }
}