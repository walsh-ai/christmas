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

    render(x = this.position.x, y = this.position.y) 
    {
        stroke('white');
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

/** 
*       EQUATIONS ARE REPEATED BETWEEN COORDINATE AND OUTLINE METHODS FOR RENDERING SPEED
**/

//////////////////////////////////////////////////////////////////////

CHeartRender.prototype.ComputeHeartCoordinate_a = function(angle)
{
    const magnitude = this.radius / 20;

    const a = (magnitude * (1 - cos(angle)) * cos(angle));
    const b = -(magnitude * sin(angle) * (1 - cos(angle)));

    // Rotate counter-clockwise by 90 degrees (it took me ages to find this)
    const theta = - PI / 2;
    const c = ((a * cos(theta)) - (b * sin(theta)));
    const d = ((a * sin(theta)) + (b * cos(theta)));

    return [ c, d ];
}

//////////////////////////////////////////////////////////////////////

CHeartRender.prototype.ComputeHeartOutline_a = function()
{
    for ( let a = 0.0; a < TWO_PI; a += 0.1 )
    {
        const [ x, y ] = this.ComputeHeartCoordinate_a(a);

        if ( this.beat ) 
        {
            this.pulse = map(cos(a), 0, this.pulseRadius, 0.5, -1);
        }

        if (this.outline.length < 500) 
        {
            this.outline.push(createVector(x, y));
        }
    } 
}

//////////////////////////////////////////////////////////////////////

CHeartRender.prototype.ComputeHeartCoordinate_b = function(angle)
{
    return [this.radius * 16 * pow(sin(angle), 3),
            -this.radius * (13 * cos(angle) - 6 * cos(2 * angle) - 2 * cos(3 * angle) - cos(4 * angle))];
}

//////////////////////////////////////////////////////////////////////

CHeartRender.prototype.ComputeHeartOutline_b = function()
{
    for ( let a = 0.0; a < TWO_PI; a += 0.1 )
    {
        const [ x, y ] = this.ComputeHeartCoordinate_b(a);

        if ( this.beat ) 
        {
            this.pulse = map(cos(a), 0, this.pulseRadius, 0.5, -1);
        }

        if ( this.outline.length < 500 )
        {
            this.outline.push(createVector(x, y));
        }
    }
}

//////////////////////////////////////////////////////////////////////

CHeartRender.prototype.ComputeHeartCoordinate_c = function(angle)
{
    r = 100;
    const a = r * sin(angle) * cos(angle) * Math.log(Math.abs(angle));
    const b = r * Math.pow(Math.pow(angle, 2), (3 / 20)) * Math.sqrt(cos(angle));

    const x = r * sin(a) * cos(a) * Math.log(Math.abs(a));
    const y = r * Math.pow(Math.pow(a, 2), (3 / 20)) * Math.sqrt(cos(a));

    const theta = PI;
    const c = ((a * cos(theta)) - (b * sin(theta)));
    const d = ((a * sin(theta)) + (b * cos(theta)));
    
    return [ c, d ];
}

//////////////////////////////////////////////////////////////////////

CHeartRender.prototype.ComputeHeartOutline_c = function()
{
    for ( let a = -1; a < 1; a += 0.01 )
    {
        const [ x, y ] = this.ComputeHeartCoordinate_c(a);

        if ( this.beat ) 
        {
            this.pulse = map(cos(a), 0, this.pulseRadius, 0.5, -1);
        }

        this.outline.push(createVector(x, y));    
    }
}

//////////////////////////////////////////////////////////////////////

CHeartRender.prototype.ComputeHeartCoordinate_d = function(angle)
{
    const magnitude = this.radius * 20;
    const a = magnitude * cos(angle) * (sin(angle) * Math.sqrt(Math.abs(cos(angle)))) / (sin(angle) + (7/5)) - 2 * sin(angle) + 2;
    const b = magnitude * sin(angle) * (sin(angle) * Math.sqrt(Math.abs(cos(angle)))) / (sin(angle) + (7/5)) - 2 * sin(angle) + 2;

    const theta = PI;
    const c = ((a * cos(theta)) - (b * sin(theta)));
    const d = ((a * sin(theta)) + (b * cos(theta)));

    return [ c, d ];
}

//////////////////////////////////////////////////////////////////////

CHeartRender.prototype.ComputeHeartOutline_d = function()
{
    for ( let a = 0; a < TWO_PI; a += 0.1 )
    {
        const [ x, y ] = this.ComputeHeartCoordinate_d(a);

        if ( this.beat ) 
        {
            this.pulse = map(cos(a), 0, this.pulseRadius, 0.5, -1);
        }

        this.outline.push(createVector(x, y));
    }
}

//////////////////////////////////////////////////////////////////////

CHeartRender.prototype.ComputeHeartCoordinate_e = function(angle)
{
    const magnitude = this.radius * 10;
    const a = -  Math.sqrt(2) * magnitude * Math.pow(sin(angle), 3);
    const b = magnitude * (-Math.pow(cos(angle), 3) - Math.pow(cos(angle), 2) + (2 * cos(angle)));

    const theta = PI;
    const c = ((a * cos(theta)) - (b * sin(theta)));
    const d = ((a * sin(theta)) + (b * cos(theta)));

    return [ c, d ];
}

//////////////////////////////////////////////////////////////////////

CHeartRender.prototype.ComputeHeartOutline_e = function()
{
    for ( let a = 0.0; a < TWO_PI; a += 0.1 )
    {
        const [ x, y ] = this.ComputeHeartCoordinate_e(a);

        if ( this.beat ) 
        {
            this.pulse = map(cos(a), 0, this.pulseRadius, 0.5, -1);
        }

        this.outline.push(createVector(x, y));
    }
}

//////////////////////////////////////////////////////////////////////

CHeartRender.prototype.ComputeHeartOutline_f = function()
{
    let a = 0.0;

    for ( let a = 0.0; a < TWO_PI; a += 0.1 )
    {
        const { x, y } = this.ComputeHeartCoordinate_b(a);

        if ( this.beat ) 
        {
            this.pulse = map(cos(a), 0, this.pulseRadius, 0.5, -1);
        }

        if ( this.outline.length < 500 )
        {
            this.outline.push(createVector(x, y));
        }
    } 
}

//////////////////////////////////////////////////////////////////////

CHeartRender.prototype.ComputeHeartOutline_g = function()
{
    let a = 0.0;

    for ( let a = 0.0; a < TWO_PI; a += 0.01 )
    {
        const { x, y } = this.ComputeHeartCoordinate_b(a);

        if ( this.beat ) 
        {
            this.pulse = map(cos(a), 0, this.pulseRadius, 0.5, -1);
        }

        if ( this.outline.length < 500 )
        {
            this.outline.push(createVector(x, y));
        }
    } 
}

//////////////////////////////////////////////////////////////////////
