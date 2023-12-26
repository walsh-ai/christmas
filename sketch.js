//////////////////////////////////////////////////////////////////////

// Copyright Creative Commons (CC) 2023 Thomas James Walsh
// Licensed CC Attribution 4.0; reuse permitted
// Merry Christmas, Edward

//////////////////////////////////////////////////////////////////////

var canvas;
var hearts = [];
var bubbles = [];
var fallingHearts = [];

var fallingHeartType = EHeartType.HeartType_B;
var beatingHeartType = EHeartType.HeartType_B;

var a = 0.0;
var numberOfHearts = 0;
var numberOfBubbles = 0;
var backgroundColour = 0;
var numberOfFallingHearts = 100;

const snowflakes = [];
const ground = [];

const minSpeed = 1;
const maxSpeed = 5;

//////////////////////////////////////////////////////////////////////

function windowResized()
{
    console.log("EVENT on windoowResized() | resized p5 canvas.");
    resizeCanvas(windowWidth, windowHeight);
}

//////////////////////////////////////////////////////////////////////

function getNewHeartOfWindowType(xPos, yPos, radius, pulseRadius)
{
    switch ( beatingHeartType )
    {
        case EHeartType.HeartType_A:
            return new CHeartA(xPos, yPos, radius, pulseRadius);
        case EHeartType.HeartType_B:
            return new CHeartB(xPos, yPos, radius, pulseRadius);
        case EHeartType.HeartType_C:
            return new CHeartC(xPos, yPos, radius, pulseRadius);
        case EHeartType.HeartType_D:
            return new CHeartD(xPos, yPos, radius, pulseRadius);
        case EHeartType.HeartType_E:
            return new CHeartE(xPos, yPos, radius, pulseRadius);
        default:
            return new CHeartB(xPos, yPos, radius, pulseRadius);
    }
}

//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////

function setup()
{
    canvas = createCanvas(windowWidth, windowHeight);

    canvas.position(0, 0);
    canvas.style('z-index', '-1');

    stroke(255);
    strokeWeight(2);
    fill(150, 0, 100);
    background(0);

    background(backgroundColour);
    createHearts(numberOfHearts);
    createBubbles(numberOfBubbles);

    createHeartRain();

    canvas.mouseClicked(() => {
        hearts.push(getNewHeartOfWindowType(mouseX, mouseY, random(1, 3), random(10, 15)));
    });
}

//////////////////////////////////////////////////////////////////////

function draw()
{
    background(0);

    if ( mouseIsPressed )
    {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }

    bubbles.forEach(bubble => bubble.update());

    for ( let i = 0; i < fallingHearts.length; i++ ) 
    {
        fallingHearts[i].update();
        fallingHearts[i].render();
    }

    for ( let heart of hearts ) 
    {
        heart.computeOutlineUpdateStep();
        heart.render();
    }

    noStroke();
    fill(255);
}

//////////////////////////////////////////////////////////////////////

function createBubbles(num)
{
    for ( var i = 0; i < num; i++ )
    {
        let r = random(0, (((width + height) / 2) / 10));
        let x = random(0, width);
        let y = random(0, height);

        bubbles.push(new bubble(x, y, r));
    }
}

//////////////////////////////////////////////////////////////////////

function createHearts(num)
{
    for ( var i = 0; i < num; i++ )
    {
        let x = 100;
        let y = 100;
        let heartSize = 10;

        hearts.push(new heart(x, y, heartSize));
    }

    hearts.forEach(heart => heart.show());
}

//////////////////////////////////////////////////////////////////////

function createHeartRain()
{
    fallingHearts = [];
    for ( let i = 0; i < numberOfFallingHearts; i++ )
    {
        fallingHearts.push(new CFallingHeart(fallingHeartType));
    }
}

//////////////////////////////////////////////////////////////////////

function setFallingHearts(heartType)
{
    fallingHeartType = heartType;
    createHeartRain();
}

//////////////////////////////////////////////////////////////////////

function setBeatingHeart(heartType)
{
    beatingHeartType = heartType;
}

//////////////////////////////////////////////////////////////////////
