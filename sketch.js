//////////////////////////////////////////////////////////////////////

// Copyright Creative Commons (CC) 2023 Thomas James Walsh
// Licensed CC Attribution 4.0; reuse permitted
// Merry Christmas, Edward

//////////////////////////////////////////////////////////////////////

var canvas;
var hearts = [];
var bubbles = [];
var fallingHearts = [];

var a = 0.0;
var numberOfHearts = 0;
var numberOfBubbles = 0;
var backgroundColour = 0;
var numberOfFallingHearts = 100;

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
}

//////////////////////////////////////////////////////////////////////

function windowResized()
{
    console.log("EVENT on windoowResized() | resized p5 canvas.");
    resizeCanvas(windowWidth, windowHeight);
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
    for ( let i = 0; i < numberOfFallingHearts; i++ )
    {
        fallingHearts.push(new CFallingHeart(EHeartType.HeartType_E));
    }
}

//////////////////////////////////////////////////////////////////////
