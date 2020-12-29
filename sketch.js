var paper,dustbin,ground;
var wood1,wood2,wood3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
  
	engine = Engine.create();
	world = engine.world;
    paper=new Paper(100,450,20);
	 
    ground=new Ground(width/2,670,width,20); 
    wood1=new Dustbin(500,height-50,200,20);
    wood2=new Dustbin(400,height-90,20,100);
      wood3=new Dustbin(600,height-90,20,100);
  
	Engine.run(engine);
  
}


function draw() {
 
  background(0)

  
Engine.update(engine);
 
  
  paper.display();
 // dustbin.display();
  ground.display();
wood1.display()
wood2.display()
wood3.display()

  drawSprites();
 
}

function keyPressed(){
 if (keyCode===UP_ARROW){
   Matter.Body.applyForce(paper.body,paper.body.position,{x:17,y:-40});

  }
  }