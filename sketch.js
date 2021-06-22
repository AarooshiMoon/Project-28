const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var paper, ground;
var dustbin1, dustbin2, dustbin3;
var launcher;

function setup() {
	createCanvas(1500, 600);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100,80,20);
    ground = new Ground(750,580,1500,20);
	dustbin1 = new Dustbin(1118,560,225,20);
	dustbin2 = new Dustbin(1015,440,20,220);
	dustbin3 = new Dustbin(1220,440,20,220);
	launcher = new Launcher(paper.body, {x:250, y:160});

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
  launcher.display();

  drawSprites();
}

function mouseDragged(){
   Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  launcher.fly();
}