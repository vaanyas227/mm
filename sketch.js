var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var rectangle1,rectangle2,rectangle3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	rectangle1=createSprite(400,655,130,10);
	rectangle1.shapeColor="red";
	rectangle2=createSprite(460,620,10,80);
	rectangle2.shapeColor="red";
	rectangle3=createSprite(330,620,10,80);
	rectangle3.shapeColor="red";
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/12, 650 , 5 , {restitution:0.3, isStatic:true,friction:0.5,density:1.2});
	World.add(world, packageBody);
	
 
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



