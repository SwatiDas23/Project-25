const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function preload()
{
	dustbinimage = loadImage('dustbin.png');
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100, 600,10);

  ground = new Ground(400, 680, 800, 20);

  bottom = new Dustbin(550,660,150,15);
  rightSide = new Dustbin(620,580,15,170);
  leftSide = new Dustbin(480,580,15,170);

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);

  background('pink');

  Engine.update(engine);

  paper.display();

  ground.display();

  leftSide.display();
  bottom.display();
  rightSide.display();

  image(dustbinimage,450,470,200,200);

  drawSprites();

}

function keyPressed(){
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {x:15, y: -15})
  }
}