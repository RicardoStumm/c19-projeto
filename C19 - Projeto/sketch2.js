var space, spaceImg;
var rocket, rocketImg;
var asteroide, asteroideImg, asteroidesGroup;
var star, starImg, starsGroup;
var gameState = "play";
var stars = 0;
var score = 0;



function preload(){
    spaceImg = loadImage("space2.jpg");
    asteroideImg = loadImage("asteroid-clipart-space-rock-2.png");
    starImg = loadImage("estrela.png");
    rocketImg = loadImage("rocket.png");
}

function setup() {
    createCanvas(600, 600);




}


function draw() {
    background(0);
    textSize(20);
    text("Stars: " + stars,10,20);
    text("Score: "+ score,10,40);

}