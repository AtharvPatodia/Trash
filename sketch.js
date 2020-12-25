
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground=new Ground(400, 690, 800, 20);
	paper = new Paper(200, 680);
}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background(0);
  
	ground.display();

  drawSprites();
 
}



