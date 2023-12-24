//////////////////////////////////////////////////////////////////////

// Copyright Creative Commons (CC) 2023 Thomas James Walsh
// Licensed CC Attribution 4.0; reuse permitted
// Merry Christmas, Edward

//////////////////////////////////////////////////////////////////////

class bubble
{
    constructor(x, y, radius)
    {
        this.x = x;
        this.y = y;
        this.radius = radius;

        this.r = random(0, 255);
        this.g = random(0, 255);
        this.b = random(0, 255);
    }

    //////////////////////////////////////////////////////////////////////

    move()
    {
        this.x += random(-5, 5);
        this.y += random(-5, 5);
    }

    //////////////////////////////////////////////////////////////////////

    show()
    {
        fill(this.r, this.g, this.b);
        circle(this.x, this.y, this.radius);
    }

    //////////////////////////////////////////////////////////////////////

    update()
    {
        this.move();
        this.show();
    }
}

//////////////////////////////////////////////////////////////////////
