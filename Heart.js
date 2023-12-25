//////////////////////////////////////////////////////////////////////

// Copyright Creative Commons (CC) 2023 Thomas James Walsh
// Licensed CC Attribution 4.0; reuse permitted
// Merry Christmas, Edward
// I <3 you

//////////////////////////////////////////////////////////////////////

class CHeartRender
{
    constructor(
        seedx = 0, 
        seedy = 0, 
        radius = 10,
        pulseRadius = 5, 
        falling = false,
        heartType = EHeartType.HeartType_A) 
    {
        this.radius = radius;
        this.falling = falling;
        this.heartType = heartType;
        this.pulseRadius = pulseRadius;
        
        this.position = createVector(seedx, seedy);

        this.angle = 0;
        this.pulse = 1;
        this.beat = true;

        if ( this.falling )
        {
            this.opacity = Math.random() * (0.7 - 0.4) + 0.4;
        } 
        else 
        {
            this.opacity = 1;
        }

        this.outline = [];
    }

    //////////////////////////////////////////////////////////////////////

    render(
        x = this.position.x, 
        y = this.position.y) 
    {
        stroke('black');
        strokeWeight(2);
        strokeJoin(ROUND);

        if ( this.falling )  
        {
            this.position.x = x;
            this.position.y = y;

            noStroke();
        }

        push();
        translate(this.position.x, this.position.y);
        fill(255, 101, 186, this.opacity * 255);

        beginShape();

        for ( let v of this.outline ) 
        {
            vertex(this.pulse * v.x, this.pulse * v.y);
        }

        endShape();

        pop();
    }
}

//////////////////////////////////////////////////////////////////////
