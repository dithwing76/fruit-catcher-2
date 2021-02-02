//var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var player1score =0;
var player2score =0;
var edges
var num=0
var num2=0
var num3 =0

function preload(){
  back_img = loadImage("images/jungle.jpg");
  player_img = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");
  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  edges=createEdgeSprites();
  //database = firebase.database();
  //game = new Game();
  //game.getState();
  //game.start();
  
  fruit = createSprite(-100,0)
  

  player1= createSprite(500,550)
  player1.addImage(player_img)
  player1.setCollider("rectangle",0,0,player1.width,1)
  //player1.debug=true

  player2= createSprite(500,550)
  player2.addImage(player_img)
  player2.setCollider("rectangle",0,0,player1.width,1)
  //player2.debug=true
}

function draw() {
  player1.velocityX=0
  background(back_img);
  if(keyDown("left")){
    player1.velocityX=-10
  }
  if(keyDown("right")){
    player1.velocityX=10
  }
  player1.collide(edges)
  if(player1.isTouching(fruitGroup)&&num3==0){
    player1score +=1
    
    num3=1
  }else if(!player1.isTouching(fruitGroup)&&num3==1){
    num3=0
  }
//--------------------------------------------------------------------------------------------------
  player2.velocityX=0
  if(keyDown("a")){
    player2.velocityX=-10
  }
  if(keyDown("d")){
    player2.velocityX=10
  }
  player2.collide(edges)
  if(player2.isTouching(fruitGroup)&&num2==0){
    player2score +=1
    
    num2=1
  }else if(!player2.isTouching(fruitGroup)&&num2==1){
    num2=0
  }
  // Add conditions for gameStates and playerCount
  createFruit()
  drawSprites()
  fill("white")
  textSize(15)
  text("player1 score: "+player1score,15,15)
  text("player2 score: "+player2score,15,30)

  textSize(25)
  fill("black")
  text("Player1",player1.x-45,player1.y+10)
  text("Player2",player2.x-45,player2.y+10)
}
function createFruit(){
  if(frameCount%20===0){
    num = Math.round(random(1,5))
    
    var fruit=createSprite(random(50,950),0)
    fruit.velocityY=10
    //fruit.setCollider("rectangle",0,0,40,1)
    //fruit.debug=true
    if(num==1){
      fruit.addImage(fruit1_img);
    }else if(num==2){
      fruit.addImage(fruit2_img);
    }else if(num==3){
      fruit.addImage(fruit3_img);
    }else if(num==4){
      fruit.addImage(fruit4_img);
    }else if(num==5){
      fruit.addImage(fruit5_img);
    }
    fruitGroup.add(fruit)
    fruitGroup.setLifetimeEach (21)
  }
}
