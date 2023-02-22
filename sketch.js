
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var fazendeiroImg
var fazendaImg
var monstro1Img, monstro2Img, monstro3Img;
var boss1Img, boss2Img;
var nivel = 0;

var fazendeiro;
var fazenda;
var monstro1, monstro2, monstro3;
var boss1, boss2;

function preload(){
  fazendaImg = loadImage("fazenda.jpg");
 // fazendeiroImg = loadImage("fazendeiro.jpg");
  //monstro1Img = loadImage("monstro sbaj.jpg");
  //monstro2Img = loadImage("monstro fgh.gif");
  //monstro3Img = loadImage("selvagem-do-monstro-da-arte-pixel-vetor-102309958.jpg");
  //boss1Img = loadImage("boss 2.jpg");
  //boss2Img = loadImage("boss.png");
}

function setup() {
  createCanvas(400,400);

  fazenda = createSprite(0,400,200,200);
  fazenda.addImage(fazendaImg);
  

}

function draw() 
{
  background(51);
  Engine.update(engine);
  
  if(nivel = 0){
  background(fazenda);
  }
  drawSprites();
}


