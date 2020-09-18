
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,boyImage,tree;

function preload(){
	boyImage=loadImage("Pluckingmangoes/boy.png");
}

function setup() {
	createCanvas(1200,800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
tree=new Tree(1000,200,300,300);
ground= new Ground(350,790,4000,25)
stone=new Stone(250,700,50,50)



boy=createSprite(100,720,50,50);
boy.addImage(boyImage);
boy.scale=0.1

mango1=new Mango(550,400,50,50);
mango2=new Mango(650,450,50,50);
mango3=new Mango(650,350,50,50);
mango4=new Mango(700,250,50,50);
mango5=new Mango(800,300,50,50);
mango6=new Mango(750,400,50,50);
mango7=new Mango(900,300,50,50);
mango8=new Mango(850,200,50,50);
mango9=new Mango(1000,300,50,50);
mango10=new Mango(1050,400,50,50);
mango11=new Mango(900,400,50,50);
mango12=new Mango(1000,350,50,50);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("white");
  
delectcollision(stone,mango1);
delectcollision(stone,mango3);
delectcollision(stone,mango4);
delectcollision(stone,mango5);
delectcollision(stone,mango6);
delectcollision(stone,mango7);
delectcollision(stone,mango8);
delectcollision(stone,mango9);
delectcollision(stone,mango10);
delectcollision(stone,mango11);
delectcollision(stone,mango12);

  tree.display();
boy.display();
ground.display();
stone.display();
mango1.display();
mango4.display();
mango2.display();
mango3.display();
mango5.display();
mango6.display();
mango7.display();
mango8.display();
mango9.display();
mango10.display();
mango11.display();
mango12.display();
  drawSprites();
 
}

function keypressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stoneobject.body,{x:235,y:420})
		launcherobject.attach(stoneobject.body)
	}
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    stone.fly();
}
function delectcollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
stoneBodyPosition=lmango.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r){
matter.Body.setStatic(lmango.body,false);
}
}
