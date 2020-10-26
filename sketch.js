var fixedRect, movingRect,Gameobject1,Gameobject2,Gameobject3,Gameobject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  Gameobject1=createSprite(100,100,50,50);
  Gameobject1.shapeColor="green";
  Gameobject2=createSprite(200,100,50,50);
  Gameobject2.shapeColor="green";
  Gameobject3=createSprite(300,100,50,50);
  Gameobject3.shapeColor="green";
  Gameobject4=createSprite(400,100,50,50);
  Gameobject4.shapeColor="green";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if(istouching(movingRect,Gameobject3)){
  movingRect.shapeColor = "red";
  Gameobject3.shapeColor = "red";
  
}
else{
  movingRect.shapeColor = "green";
  Gameobject3.shapeColor = "green";
}
  drawSprites();
}
function istouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x <object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
 return true;   
}
else {
  return false;
}
}