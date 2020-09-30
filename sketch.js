
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,bin,paperIMG,paper2,bin2,bin3,groundO,paperObject;

function preload()
{
	 paperIMG=loadImage("Crumbled Paper.png");
}

function setup() {
	createCanvas(800, 700);

  ellipseMode(CENTER);
	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  groundO=new ground(width/2,670,width,20);
    paper= new PAPER(40,550,60) ;  
    bin= new HOLDER(670,550,180,200);
	
	Engine.run(engine);
   
}


function draw() {
  rectMode(CENTER)
  background(255);
  bin.display();
  groundO.display();
  paper.display();
 
}

function keyPressed()
{
  if (keyCode === UP_ARROW)
  {
    Matter.Body.applyForce(paper.body,paper.body.position,{x:107,y:-107})
  }
}

