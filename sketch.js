var bg,bgImg
var sleep
var brush
var gym
var eat
var drink
var move
var astronaut
var edges
var bath

function preload() {
  bgImg = loadImage("iss.png")
  sleep = loadAnimation("sleep.png")
  brush = loadAnimation("brush.png")
  gym = loadAnimation("gym1.png","gym2.png")
  eat = loadAnimation("eat1.png","eat2.png")
  drink = loadAnimation("drink1.png","drink2.png")
  move = loadAnimation("move.png","move1.png")
  bath = loadAnimation("bath1.png","bath2.png")
}

function setup() {
  createCanvas(800,400);
  bg = createSprite(width/2,height/2)
  bg.addImage(bgImg) 
  astronaut = createSprite(300,230)
  astronaut.addAnimation("sleeping",sleep)
  astronaut.addAnimation("moving",move)
  astronaut.scale = 0.1
  edges = createEdgeSprites()
}

function draw() {
  background(255,255,255);
  drawSprites();
  astronaut.bounceOff(edges)
  fill("white")
  textSize(20)
  text("Instrcutions:",50,50)
  textSize(15)
  text("Up Arrow = Brushing",50,70)
  text("Down Arrow = Gymming",50,90)
  text("Left Arrow = Eating",50,110)
  text("Right Arrow = Bathing",50,130)
  text("m key = Moving",50,150)

  if (keyDown("up")) {
    astronaut.addAnimation("brushing",brush)
    astronaut.changeAnimation("brushing")
    astronaut.y = 350
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }

  if (keyDown("down")) {
    astronaut.addAnimation("gymming",gym)
    astronaut.changeAnimation("gymming")
    astronaut.y = 350
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }
  if (keyDown("left")) {
    astronaut.addAnimation("eating",eat)
    astronaut.changeAnimation("eating")
    astronaut.y = 350
    astronaut.x = 150
    astronaut.velocityX = 0.5
    astronaut.velocityY = 0.5
  }
  if (keyDown("right")) {
    astronaut.addAnimation("bathing",bath)
    astronaut.changeAnimation("bathing")
    astronaut.x = 300
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }
  if (keyDown("m")) {
   //astronaut.addAnimation("moving",move)
   astronaut.changeAnimation("moving",move)
   // astronaut.velocityX = 1
   // astronaut.velocityY = 1
  }
  
}