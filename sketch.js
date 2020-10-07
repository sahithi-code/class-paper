
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(1600,400)


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	//Create the Bodies Here.
  land = new Ground(800,370,1600,10);
  dust = new bin(1200,320,10,90)
  dust1=new bin (1400,320,10,90)	
  dust2 = new bin (1300,360,200,10)
  crumpledpaper = new Paper(400,360,30,30)
}


function draw() {
  rectMode(CENTER);
  background(0);
  land.display();
  dust.display();
  dust1.display();
  dust2.display();
  crumpledpaper.display();

    if(keyCode === UP_ARROW){
    
    Matter.Body.applyForce(crumpledpaper.body,crumpledpaper.body.position,{x:85,y:-17.5+7})}
    
  
  

  drawSprites();
 
}




