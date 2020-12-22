var fixedrect
var movingrect
function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 50);
  movingrect=createSprite(359,199,50,50);




}

function draw() {
  background(255,255,255);  
  fixedrect.shapeColor="green";
  movingrect.shapeColor="green";
 
  movingrect.x=mouseX;
movingrect.y=mouseY;
fixedrect.debug=true;
movingrect.debug=true;
if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2&&
  fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2&&
  movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2&&
  fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2){
    fixedrect.shapeColor="red";
    movingrect.shapeColor="red";
}
else{
  fixedrect.shapeColor="green";
  movingrect.shapeColor="green";
}
  drawSprites();
}