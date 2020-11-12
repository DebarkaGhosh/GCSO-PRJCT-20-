var car , wall ;
var speed , weight;


function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  car.shapeColor= color("white");
   
  wall = createSprite(1007,200,40,height/2);
   wall.shapeColor=color("blue");
}

function draw() {
  background("black"); 
  
  if (wall.x-car.x<(car.width+wall.width)/2){
   
     car.velocityX=0;
     var deformation=0.5 * weight * speed * speed/22500;

     if(deformation>180) {
       car.shapeColor=color("red");
     }
     if(deformation<180 && deformation>100){
       car.shapeColor=color("yellow");
     }

     if(deformation<100){
       car.shapeColor=color("green")
     }
  }

 drawSprites();
}