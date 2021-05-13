//Create variables here
var dog , happyDog
var database
var foodS , foodStock
var dogImg , happyDogImg

function preload()
{
	//load images here
  dogImg = loadImage("images/dogImg.png")
  happyDogImg  = loadImage("images/dogImg1.png")
}

function setup() {
  database = firebase.database()
	createCanvas(800, 700);
  dog = createSprite(400,450,30,30)
  dog.addImage(dogImg)
  dog.scale = 0.45
  foodStock = database.ref('Food')
  foodStock.on("value",readStock)
  
}


function draw() {  
 background(46,139,87)
  //image( dogImg , dog.x , dog.y , 20,30)
  

if (keyDown(UP_ARROW)){
  //foodStock = foodStock-1
  writeStock(foodS)
  dog.addImage(happyDogImg)
}

textSize(20)
fill("black")
text("Food Stock:"+foodS , 20,30)

text(18)
fill("black")
text("Press 'SpaceKey' to feed the dog")
  drawSprites();
  //add styles here

}

//function to read_values from DB
function readStock(data){

  foodS = data.val();
}
//function to write values in DB
function writeStock(x){
  database.ref('/').update({
    Food:x})
}

//function to write values in DB
function writeStock(x){

if (x<=0){
  x = 0;
}else{
  x = x-1;
}

database.ref('/').update({

  Food:x
})
}

