
  
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(400,390,800,20,ground_options);
    World.add(world,ground);

    box1= new Box(600, 300);
    box2= new Box(600, 100)
    box3= new Box(600, 100)
    box4= new Box(600, 100)
    box5= new Box(600, 100)
    box6= new Box(600, 100)
    box7= new Box(550, 100)
    box8= new Box(550, 100)
    box9= new Box(550, 100)
    box10= new Box(550, 100)
    box11= new Box(550, 100)
    box12= new Box(550, 100)

   ball=new Ball(200, 100)

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
  // ellipseMode(RADIUS)

    ball.display();

    rect(ground.position.x,ground.position.y,800,20);
    
   
   }

