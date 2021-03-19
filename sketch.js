var min,randomTime
var timerValue;
var startButton;
var start;
var gameState;
var START = 0;
var PLAY = 1;
var block = []

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;

var engine,world;

function preload(){

  FC = loadImage("FC.png");
  StartButton = loadImage("T-Block Start.png");

}

function setup(){

  createCanvas(1650,900);

  engine = Engine.create();
  world = engine.world;

  let canvasmouse = Mouse.create(canvas.elt); 
  canvasmouse.pixelRatio = pixelDensity(); 
  let options = { mouse: canvasmouse };
  mConstraint = MouseConstraint.create(engine, options); World.add(world, mConstraint);

  randomTime=Math.round(random(40,70));
  min=randomTime;
  timerValue=min;
  setInterval(timeIt,500);

  spawnCubes();

  start = createSprite(250,510);
  start.addImage(StartButton);
  start.scale = 0.1;

  barriers = new Barriers();

  ground = new Ground();

  ruler = new Ruler(0,random(400,800));

  ruler.body.position.y = ground.body.position.y - ruler.height/2;

  gameState = START;
  
}

function draw(){

  Engine.update(engine);

//Background Coloring

  background(FC); 

  drawSprites();

//Start State

  if(gameState === START){

  }

  if(gameState === PLAY){
    
    start.x = 10000;
    start.y = 10000;

    background("grey");

    for(r = 0; r < block.length; r++){

      block[r].display();
  
    }

    ruler.display();

    if(timerValue>0){

      textSize(25);
      text(timerValue + " SECONDS", 100,100);

     }
    
    if(timerValue===0){

      textSize(25);
      text("time up",width/2,height/2);

    }

  }

  if(mousePressedOver(start)){

    gameState = PLAY;

  }

}

function spawnCubes(){

  var r = (Math.round(random(10,20)));

  for(i = 0; i < r; i++){

    block.push(new Block(random(100,450),100));

  }

}

function timeIt() {
  if (timerValue > 0) {
    timerValue--;
  }
  
}