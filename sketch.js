var canvas;
var music;
var s1,s2,s3,s4,box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    s1=createSprite(100,550,150,30);
    s1.shapeColor="darkblue";

    s2=createSprite(300,550,150,30);
    s2.shapeColor="yellow";

    s3=createSprite(500,550,150,30);
    s3.shapeColor="green";

    s4=createSprite(700,550,150,30);
    s4.shapeColor="purple";

    //create box sprite and give velocity
    box=createSprite(400,100,30,30);
    box.shapeColor="white";
    box.x=Math.round(random(50,750));
    box.velocityY= 6;
}

function draw() {
    background("black");
    //create edgeSprite
     edges=createEdgeSprites();
     box.bounceOff(edges);
     //music.loop();

    
    //add condition to check if box touching surface and make it box
    if(s1.isTouching(box) && box.bounceOff(s1)){
        box.shapeColor=s1.shapeColor;
        music.play();
     }

    if(s2.isTouching(box) && box.bounceOff(s2)){
        box.shapeColor=s2.shapeColor;
        music.play();
    }

    if(s3.isTouching(box) && box.bounceOff(s3)){
        box.shapeColor=s3.shapeColor;
        music.play();
    }

    if(s4.isTouching(box) && box.bounceOff(s4)){
        box.shapeColor=s4.shapeColor;
        music.play();
    }

    

    drawSprites();
}
