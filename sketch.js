const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,rubber,stone,iron


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane (600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber1 = new Rubber(700,540);
    rubber2 = new Rubber(800,540);
    rubber3 = new Rubber(750,540);
    stone = new Stone(600, 540);
    iron = new Iron(200,540);

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber1.display();
    rubber2.display();
    rubber3.display();
    stone.display();
    iron.display();

    
 
}