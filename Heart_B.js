//////////////////////////////////////////////////////////////////////

// Copyright Creative Commons (CC) 2023 Thomas James Walsh
// Licensed CC Attribution 4.0; reuse permitted
// Merry Christmas, Edward
// I <3 you

//////////////////////////////////////////////////////////////////////

class CHeartB extends CHeartRender
{
    constructor(
        seedx,
        seedy,
        radius,
        pulseRadius,
        falling)
    {
        super(seedx, seedy, radius, pulseRadius, falling);
        this.radius = this.radius * 2;
    }

    //////////////////////////////////////////////////////////////////////

    computeVertex(angle = this.angle)
    {
        return createVector(
            (this.radius * 16 * pow(sin(angle), 3)),
            (-this.radius * (13 * cos(angle) - 5 * cos(2 * angle) - 2 * cos(3 * angle) - cos(4 * angle)))
        );
    }

    //////////////////////////////////////////////////////////////////////

    computeFullOutline()
    {
        this.radius += 0.005;

        for ( let a = 0.0; a < TWO_PI; a += 0.1 )
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
            this.pulse = map(cos(this.angle), 0, this.pulseRadius, 0.5, -1);
        }

        if ( this.outline.length < 500 )
        {
            // this.outline.pop()
            this.outline.push(xy);
        }
    }
}

//////////////////////////////////////////////////////////////////////
