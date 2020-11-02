const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;

var world,engine,grd,ball;

function setup() {
  createCanvas(800,400);

  engine=Engine.create();
  world=engine.world
  var options={
    isStatic:true
  }
  grd=Bodies.rectangle(400,380,800,20,options);
  World.add(world,grd)

  var option={
    restitution:1
  }
  ball=Bodies.circle(400,100,20,option)
  World.add(world,ball);
  console.log(ball)
}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER) ;
  //rect(400,200,100,100);
  rect(grd.position.x,grd.position.y,800,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}