const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, body, world;
var umbrella;
var rain;

var drops =[];

var maxDrops = 100;

var thunder, thunderbolt = 0;

function preload(){

  thunder1 = loadImage("images/thunderbolt/1.png");
  thunder2 = loadImage("images/thunderbolt/2.png");
  thunder3 = loadImage("images/thunderbolt/3.png");
  thunder4 = loadImage("images/thunderbolt/4.png");


  umbrella1 = loadImage("images/Umbrella/walking_1.png");
  umbrella2 = loadImage("images/Umbrella/walking_2.png");
  umbrella3 = loadImage("images/Umbrella/walking_3.png");
  umbrella4 = loadImage("images/Umbrella/walking_4.png");
  umbrella5 = loadImage("images/Umbrella/walking_5.png");
  umbrella6 = loadImage("images/Umbrella/walking_6.png");
  umbrella7 = loadImage("images/Umbrella/walking_7.png");
  umbrella8 = loadImage("images/Umbrella/walking_8.png");

    
}

function setup(){

    engine = Engine.create();
    world = engine.world;

    canvas = createCanvas(400, 700);

    umbrella = new Umbrella(200, 500);

    if(frameCount % 170 === 0){
      for(var i = 0; i < maxDrops; i++){
        drops.push(new Drop(random(0, 400), random(0, 400)));
      }
    }
}

function draw(){

  Engine.update(engine);

    background(1);
    
    
    //Switch Statement for Thunderbolt (Lightning)
    var rand = Math.round(random(1, 4));

    if(frameCount % 80 === 0){
      thunderbolt = frameCount
      thunder = createSprite(random(10, 370), random(10, 30), 10, 10);

        switch (rand) {
          case 1:
            thunder.addImage(thunder1);
            break;
          case 2:
            thunder.addImage(thunder2);
            break;
          case 3:
            thunder.addImage(thunder3);
            break;
          case 4:
            thunder.addImage(thunder4);
            break;
          default:
            break;
        }

        thunder.scale = random(0.4, 0.6);

    }

    //If Structure for destroying thunderbolt
    if(thunderbolt+10 === frameCount && thunder){
      thunder.destroy();
    }

/*
    //Switch Statement for Umbrella
    var rand = Math.round(random(1, 8));
    switch (rand) {
        case 1:
          umbrella.addImage(umbrella1);
          break;
        case 2:
          umbrella.addImage(umbrella2);
          break;
        case 3:
          umbrella.addImage(umbrella3);
          break;
        case 4:
          umbrella.addImage(umbrella4);
          break;
        case 5:
          umbrella.addImage(umbrella5);
          break;
        case 6:
          umbrella.addImage(umbrella6);
          break;
        case 7:
          umbrella.addImage(umbrella7);
          break;
        case 8:
          umbrella.addImage(umbrella8);
          break;
        default:
          break;
      }
*/

    umbrella.display();

    for(var i = 0; i < maxDrops; i++){
      drops[i].display();
      drops[i].updateY();
    }

    drawSprites();
}   

