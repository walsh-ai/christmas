//////////////////////////////////////////////////////////////////////

// Copyright Creative Commons (CC) 2023 Thomas James Walsh
// Licensed CC Attribution 4.0; reuse permitted
// Merry Christmas, Edward

//////////////////////////////////////////////////////////////////////

var canvas;
var bubbles = [];
var numberOfBubbles = 5;
var backgroundColour = 175;

//////////////////////////////////////////////////////////////////////

function setup()
{
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');

    background(backgroundColour);
    createBubbles(numberOfBubbles);
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
    if ( mouseIsPressed )
    {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }

    bubbles.forEach(bubble => bubble.update());
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
