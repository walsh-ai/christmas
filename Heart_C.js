//////////////////////////////////////////////////////////////////////

// Copyright Creative Commons (CC) 2023 Thomas James Walsh
// Licensed CC Attribution 4.0; reuse permitted
// Merry Christmas, Edward
// I <3 you

//////////////////////////////////////////////////////////////////////

class CHeartC extends CHeartRender
{
    constructor(
        seedx,
        seedy,
        radius,
        pulseRadius,
        falling)
    {
        super(seedx, seedy, radius, pulseRadius, falling);

        this.beat = true;
        this.radius = this.radius * 70;
        this.angle = -1;
    }

    //////////////////////////////////////////////////////////////////////

    computeVertex(angle = this.angle)
    {
        const a = this.radius * sin(angle) * cos(angle) * Math.log(Math.abs(angle));
        const b = this.radius * Math.pow(Math.pow(angle, 2), (3 / 20)) * Math.sqrt(cos(angle));

        return createVector(
            ((a * cos(PI)) - (b * sin(PI))),
            ((a * sin(PI)) + (b * cos(PI)))
        );
    }

    //////////////////////////////////////////////////////////////////////

    computeFullOutline()
    {
        this.radius += 0.005;

        for ( let a = -1; a < 1; a += 0.01 )
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
        let xy = this.computeVertex();

        this.angle += 0.02;
        this.radius += 0.005;

        if ( this.beat )
        {
            this.pulse = map((3 * cos(this.angle)), 0, this.pulseRadius, 1, -2);
        } 

        if ( this.angle > 1 )
        {
            this.angle = -1;
        }

        if ( this.outline.length < 500 )
        {
            this.outline.push(xy);
        }
    }
}

//////////////////////////////////////////////////////////////////////
