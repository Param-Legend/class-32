const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine,world;

var holder,ball,ground;
var stand1,stand2;
var ball;
var slingshot;
var polygon
var score = 0
var bg;
var backgroundImg
function  preload() {


  
}

function setup() {
  engine = Engine.create()
  world = engine.world
  
  createCanvas(900,400);
  getBgImg()
  //createSprite(400, 200, 50, 50);
  ground = new Ground()
  stand1 = new Stand(380,300,270,10)
  stand2 = new Stand(720,190,150,10)
  block1 = new Block(280,275,30,40)
  block2 = new Block(310,275,30,40)
  block3 = new Block(340,275,30,40)
  block4 = new Block(370,275,30,40)
  block5 = new Block(400,275,30,40)
  block6 = new Block(430,275,30,40)
  block8 = new Block(490,275,30,40)
  block7 = new Block(460,275,30,40)
  // level 2
  block9 = new Block(310,235,30,40)
  block10 = new Block(340,235,30,40)
  block11 = new Block(370,235,30,40)
  block12 = new Block(400,235,30,40)
  block13 = new Block(430,235,30,40)
  block14 = new Block(460,235,30,40)
  // level 3
  block15 = new Block(340,195,30,40)
 block16 = new Block(370,195,30,40)
 block17 = new Block(400,195,30,40)
 block18 = new Block(430,195,30,40)
 // level 4
 block19 = new Block(370,155,30,40)
 block20 = new Block(400,155,30,40)
 //level 5
 block21 = new Block(385,115,30,40)
 // layer 2
 block22 = new Block(720,170,30,40)
 block23 = new Block(690,170,30,40)
 block24 = new Block(730,170,30,40)
 block25 = new Block(740,170,30,40)

 // layer 3

block26 = new Block(720,150,30,40)
block27 = new Block(719,120,30,40)
block28 = new Block(720,150,30,40)



ball = Bodies.circle(50,200,20)
World.add(world,ball)
sling = new Sling(this.ball,{x:200,y:200})
}

function draw() {
  if(backgroundImg){
    background(backgroundImg);


}else{ 
  background("black")


    }
  Engine.update(engine);
  ground.display()
  stroke(15)
  fill("orange")
  block1.display()
  block2.display()
  block3.display() 
  block4.display() 
  block5.display() 
  block6.display() 
  block7.display() 
  block8.display() 
  block22.display()
  block23.display()
  block24.display()
  block25.display()
  stroke(15)
  fill("blue")
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  block13.display()
  block14.display()
  
  
  
  stroke(15)
  fill("pink")
  block15.display()
  block16.display()
  block17.display()
  block18.display()
  block28.display()
  block26.display()
  stroke(15)
  fill("red")
  block19.display()
  block20.display()
  fill("violet")
  block21.display()
  block27.display()
  stroke(15)
  fill("lightgreen")
  ellipse(ball.position.x,ball.position.y,20)
  sling.display()
  stand1.display()
  stand2.display()
  
  //drawSprites();
  //fill("white")
 // text("if you want to see Sling press space",260,10)
}
function mouseDragged(){

Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})


}
function mouseReleased(){


sling.fly()

}
function keyPressed(){
if(keyCode === 32){

 sling.attach(this.ball)
}



}
async function getBgImg(){
var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
var responsejson = await response.json()

var datetime = responsejson.datetime;
var hour = datetime.slice(10,13)
console.log(hour)
if(hour >=06 && hour<-1000){

 bg = 'maxresdefault.jpeg'
}
else{
  bg = '12.jpeg'
  
}
console.log(bg)
//console.log(backgroundImg)
backgroundImg = loadImage(bg)
}
