var space, spaceImg;
var rocket, rocketImg;
var asteroide, asteroideImg, asteroidesGroup;
var star, starImg, starsGroup;
var gameState = "play";
var stars = 0;
var score = 0;



function preload(){
    spaceImg = loadImage("Space.png");
    asteroideImg = loadImage("asteroid-clipart-space-rock-2.png");
    starImg = loadImage("estrela.png");
    rocketImg = loadAnimation("rocket.png");
}

function setup() {
    createCanvas(600, 600);

    space = createSprite(300,300);
    space.addImage("Space",spaceImg);
    space.scale = 0.5;
    space.velocityY = 2;

    rocket = createSprite(300,350);
    rocket.addAnimation("rocket", rocketImg);
    rocket.scale = 0.2;
    rocket.rotation = 45;

    asteroidGroup = new Group();
    starsGroup = new Group();
}

function draw() {
    background(0);
    textSize(20);
    text("stars: " + stars,10,20);
    text("score: "+ score,10,40);


if(gameState === "play"){
    if(space.y > 550 ){
        space.y = height/2;
      }  

    rocket.x = World.mouseX;

    score = score + Math.round(getFrameRate()/60);

    spawnAsteroides();
    spawnStars();


    if(starsGroup.isTouching(rocket)){
        starsGroup.destroyEach();
        stars = stars +1;
    }


    else if(asteroidGroup.isTouching(rocket)){
        rocket.destroy();
        asteroidGroup.destroyEach();
        gameState = "end";
    }
}

console.log(gameState);
if(gameState === "end"){
    space.velocityY = 0;
    starsGroup.setVelocityYEach(0);
    if(keyDown("space")){
        reset();     
    }
}






    drawSprites();
}

function spawnAsteroides(){
    if(frameCount%240 === 0){
        asteroid = createSprite(300,0);
        asteroid.x = Math.round(random(0,600));
        asteroid.scale = 0.2,
        asteroid.addImage("asteroide",asteroideImg);
        asteroid.depth = space.depth +1;
        asteroid.velocityY = 3;
        asteroid.lifeTime = 300;
        asteroidGroup.add(asteroid);
    }
}
function spawnStars(){
    if (frameCount%160 === 0){
        star = createSprite(300,0);
        star.x = Math.round(random(0,600));
        star.scale = 0.2;
        star.addImage("star",starImg);
        star.depth = space.depth +1;
        star.velocityY = 3;
        star.lifeTime = 300;
        starsGroup.add(star);
    }
}

function reset() {
    gameState = "play";
    asteroidGroup.destroyEach();
    starsGroup.destroyEach();
    stars = 0;
    score = 0;
    rocket.depth = star.depth +1;
}