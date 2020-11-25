var speed, weight, car, wall, deformation;

function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 80, 50);
  wall=createSprite(1500, 200, 60, height/2);
  speed=random(55,90)
  weight=random(400,1500);
  wall.shapeColor="white"
  car.velocityX=speed;
  car.shapeColor="blue"
}

function draw() {

  background("black");  
  if(car.x-wall.x<=wall.width/2+car.width/2 && 
        wall.x-car.x<wall.width/2+car.width/2 &&
        car.y-wall.y<wall.height/2+car.height/2 &&
        wall.y-car.y<wall.height/2+car.height/2)
      
      {
      car.velocityX=0;
      deformation=.5*weight*speed*speed / 22500
      console.log(deformation)
      if (deformation<=100){
        car.shapeColor="lime"
      }
      else if(deformation>100&&deformation<=180){
        car.shapeColor="yellow"
      }
      else {
        car.shapeColor="red"
      }

      }
    else {
      car.shapeColor="blue"
    }
  

  drawSprites();
}