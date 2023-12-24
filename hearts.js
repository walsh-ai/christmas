//////////////////////////////////////////////////////////////////////

// Copyright Creative Commons (CC) 2023 Thomas James Walsh
// Licensed CC Attribution 4.0; reuse permitted
// Merry Christmas, Edward
// I <3 you

//////////////////////////////////////////////////////////////////////

class heart
{
    constructor(x, y, size)
    {
        this.xPos = x;
        this.yPos = y;
        this.size = size;

        this.r = random(0, 255);
        this.g = random(0, 255);
        this.b = random(0, 255);

        this.outline = [];
        this.computeVertices();
    }

    computeVertices()
    {
        let a = 0;

        while ( a < TWO_PI )
        {
            const r = this.ize / 40;
            const x = r * 16 * pow(sin(a), 3);
            const y = -r*(13 * cos(a) - 5*cos(2*a) - 2*cos(3*a)- cos(4*a));

            this.outline.push(createVector(x, y));
            
            a += 0.01;
        }
    }

    show()
    {
        translate(this.xPos, this.yPos);

        stroke(255);
        strokeWeight(2);
        fill(this.r, this.g, this.b);

        beginShape();

        for ( let vtx of this.outline )
        {
            vertex(vtx.x, vtx.y);
        }

        endShape();

        translate(0, 0);
    }

    move()
    {
        this.xPos += random(-5, 5);
        this.yPos += random(-5, 5);
    }

    update()
    {
        this.move();
        this.show();
    }
}

//////////////////////////////////////////////////////////////////////
