//////////////////////////////////////////////////////////////////////

// Copyright Creative Commons (CC) 2023 Thomas James Walsh
// Licensed CC Attribution 4.0; reuse permitted
// Merry Christmas, Edward
// I <3 you

//////////////////////////////////////////////////////////////////////

class CHeartA extends CHeartRender
{
    constructor(
        seedx,
        seedy,
        radius,
        pulseRadius,
        falling)
    {
        super(seedx, seedy, radius, pulseRadius, falling);

        this.radius = this.radius * 17;
    }

    //////////////////////////////////////////////////////////////////////

    computeVertex(angle = this.angle)
    {
        const x = (this.radius * (1 - cos(angle)) * cos(angle));
        const y = -(this.radius  * sin(angle) * (1 - cos(angle)));

        const theta = - PI / 2;
        const u = ((x * cos(theta)) - (y * sin(theta)));
        const v = ((x * sin(theta)) + (y * cos(theta)));

        return createVector(u, v);
    }

    //////////////////////////////////////////////////////////////////////

    computeFullOutline()
    {
        this.radius += 0.005;

        for ( let a = 0; a < TWO_PI; a += 0.1 ) 
        {
            if ( this.beat )
            {
                this.pulse = map(cos(a), 0, this.pulseRadius, 0.5, -1);
            }

            if ( this.outline.length < 500 ) 
            {
                this.outline.push(this.computeVertex(a));
            }
        }   
    }

    //////////////////////////////////////////////////////////////////////

    computeOutlineUpdateStep()
    {
        const xy = this.computeVertex();

        this.angle += 0.1;
        this.radius += 0.005;

        if ( this.beat )
        {
            this.pulse = map(cos(this.angle), 0, this.pulseRadius, 0.5, -1);
        }

        if ( this.outline.length < 500 )
        {
            this.outline.push(xy);
        }
    }
}

//////////////////////////////////////////////////////////////////////
