var car, wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = color(80,80,80);

  speed = random(10,80);
  weight = random(10,1500);

  car.velocityX = speed;
}

function draw() {
  background(0);

  if(wall.x - car.x < wall.width/2 + car.width/2){
      car.velocityX = 0;
      deformation = (0.5 * weight * speed * speed)/2250;

     if(deformation <= 100){
       car.shapeColor = "green";
     }
     if(deformation >= 100 && deformation < 180 ){
       car.shapeColor = "yellow";
     }
     if(deformation >= 180){
       car.shapeColor = "red";
     }
  }

  drawSprites();
}