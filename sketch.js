var ground
var side1, side2, side3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperOB


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("green")

	side1 = createSprite(500, 610, 20, 100); 
	side1.shapeColor=color("white")

	side2 = createSprite(590, 650, 200, 20);
	side2.shapeColor=color("white")

	side3 = createSprite(700, 610, 20, 100); 
	side3.shapeColor=color("white")

	paperOB = createSprite(100, 600, 20, 20);

	engine = Engine.create();
	world = engine.world;



	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	side1 = Bodies.rectangle(300, 610, 20, 100 , {isStatic:false} );
	 World.add(world, side1); 

	side2 = Bodies.rectangle(390, 650, 200, 20 , {isStatic:false} );
	 World.add(world, side2); 

	side1 = Bodies.rectangle(500, 610, 20, 100 , {isStatic:false} );
	 World.add(world, side3); 

	 paperOB = Bodies.circle(100 ,700 , 5 , {restitution:0.5, density:1.2, friction:0.5, isStatic:true});
	 World.add(world, paperOB);

	 Engine.run(engine);
  
}


function draw() {
  background(0);
  paperOB.x= paperOB.position.x 
  paperOB.y= paperOB.position.y 
  keyPressed();
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW) {

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});

	}
}

