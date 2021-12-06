const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
  archerimage = loadImage("./assets/playerArcher.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  //crear el cuerpo base del jugador
  var playerBase_options ={
		isStatic: true
	  };

  var playerArcher_options ={
      isStatic: true
      };

  var player_options ={
        isStatic: true
  };
  

  //crear el cuerpo del jugador

  playerBase = Bodies.rectangle(400,500,800,20,playerBase_options);
  World.add(world,playerBase);

  playerArcher = Bodies.rectangle(450,380,800,20,playerArcher_options);
  World.add(world,playerBase);

  player = Bodies.rectangle(440,350,800,20,player_options);
  World.add(world,playerBase);

}

function draw() {
  background(backgroundImg);

  //mostrar la imagen del jugador utilizando la función image()
image(baseimage,playerBase.position.x,playerBase.position.y,180,150)

  //mostrar la imagen de la base del jugador utilizando la función image()
  image(playerimage,player.position.x,player.position.y,80,180)

  image(archerimage,playerArcher.position.x,playerArcher.position.y,80,180)



  Engine.update(engine);

  // Título
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("TIRO CON ARCO ÉPICO", width / 2, 100);
}
