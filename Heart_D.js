//////////////////////////////////////////////////////////////////////

// Copyright Creative Commons (CC) 2023 Thomas James Walsh
// Licensed CC Attribution 4.0; reuse permitted
// Merry Christmas, Edward
// I <3 you

//////////////////////////////////////////////////////////////////////

class CHeartD extends CHeartRender
{
    constructor(
        seedx,
        seedy,
        radius,
        pulseRadius,
        falling)
    {
        super(seedx, seedy, radius, pulseRadius, falling);
        this.radius = this.radius * 100;
    }

    //////////////////////////////////////////////////////////////////////

    computeVertex(angle = this.angle)
    {
        const a = this.radius * cos(angle) * (sin(angle) * Math.sqrt(Math.abs(cos(angle)))) / (sin(angle) + (7/2)) - 2 * sin(angle);
        const b = this.radius * sin(angle) * (sin(angle) * Math.sqrt(Math.abs(cos(angle)))) / (sin(angle) + (7/2)) - 2 * sin(angle);

        return createVector(
            ((a * cos(PI)) - (b * sin(PI))),
            ((a * sin(PI)) + (b * cos(PI)))
        );
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

        this.angle += 0.05;
        this.radius += 0.005;

        if ( this.beat )
        {
            this.pulse = map(sin(2 * this.angle), 0, this.pulseRadius, 1, -5);
        }

        if ( this.outline.length < (TWO_PI / 0.05 / 2) )
        {
            this.outline.push(xy);
        }
    }
}

//////////////////////////////////////////////////////////////////////
