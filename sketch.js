//Making all Matter. codes
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world; 
var scrambledPaper, dustbin, ground; 

function setup () {
	createCanvas(800, 400);

	//Adding the engine and the world to the canvas
	engine = Engine.create();
	world = engine.world;

	//Creating the bodies
	scrambledPaper = new Paper(720, 390, 100, 10);
	
	dustbinLeft = new Dustbin(290, 620, 20, 100);
	dustbinBottom = new Dustbin(400, 650, 200, 20); 
	dustbinRight = new Dustbin(500, 620, 20, 10); 
	
	ground = new Ground(400, 390, 800, 10); 
}

function draw() {
  background("black"); 
  Engine.run(engine);

  scrambledPaper.display();

  dustbinLeft.display(); 
  dustbinRight.display(); 
  dustbinBottom.display(); 

  ground.display();
}

//Making the UpArrowKey function
function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.body.applyForce(scrambledPaper.body,scrambledPaper.body.position, 
		{
			x : 12, 
			y :-13
		});
	}
}