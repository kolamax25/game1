var p1, p2;

var uzi, bullets, bat;
var uzii, bati;

var blaster, ray, acid;
var blasteri, acidi;

var plate1, plate2, plate3, plate4, plate5 

var hp1, hp2;

function preload(){

  uzii = loadImage("Sprites/UZI.png");
  bati = loadImage("Sprites/Metal Bat.png");
  blasteri = loadImage("Sprites/Blaster.png");
  acidi = loadImage("Sprites/acid.png");
}

function setup() {
  createCanvas(1600,950);
  p1 = createSprite(400, 200, 50, 100);
  p2 = createSprite(800, 200, 50, 100);

  plate1 = createSprite(400, 900, 500, 40);
  plate2 = createSprite(1200, 900, 500, 40);

  plate1 = createSprite(400, 300, 500, 40);
  plate2 = createSprite(1200, 300, 500, 40);
}

function draw() {
  background(60);  
  drawSprites();

  p1.velocityY = 3
  p2.velocityY = 3

  p1Movement();
  p2Movement();
}

function p1Movement(){

  if(keyWentDown("w")){
    p1.y = p1.y - 100
  }
  if(keyDown("s")){
    
    p1.rotation = 90
  }
  else{

  p1.rotation = 0
  }
  if(keyDown("a")){
    p1.x = p1.x - 50
  }
  if(keyDown("d")){
    p1.x = p1.x + 50
  }

}

function p2Movement(){

  if(keyWentDown("up")){
    p2.y = p2.y - 100
  }
  if(keyDown("down")){
    
    p2.rotation = 90
  }
  else{

  p2.rotation = 0
  }
  if(keyDown("left")){
    p2.x = p2.x - 50
  }
  if(keyDown("right")){
    p2.x = p2.x + 50
  }
}