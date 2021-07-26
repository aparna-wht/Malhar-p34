
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy,boyImg;
var backgroundImg;
var fruit;

function preload()
{
  boyImg = loadImage("Boy.png");
  backgroundImg = loadImage("Background.png");
}

function setup() {

  createCanvas(1000,400);

  engine = Engine.create();
	world = engine.world;

  boy_options={
    isStatic:false
  };

  boy = Bodies.rectangle(200,200,100,20,boy_options);
  World.add(world,boy);

  boy = createSprite(200,200);
  boy.addImage(boyImg);
  boy.scale = 0.25;


  

  
}


function draw() 
{
  background(backgroundImg);
  Engine.update(engine);

  drawSprites();
  
  
}

