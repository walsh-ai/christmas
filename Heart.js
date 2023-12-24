//////////////////////////////////////////////////////////////////////

// Copyright Creative Commons (CC) 2023 Thomas James Walsh
// Licensed CC Attribution 4.0; reuse permitted
// Merry Christmas, Edward
// I <3 you

//////////////////////////////////////////////////////////////////////

class Heart 
{
    constructor(
        seedx = 0, 
        seedy = 0, 
        radius = 10,
        pulseRadius = 5, 
        falling = false) 
    {
        this.radius = radius;
        this.falling = falling;
        this.pulseRadius = pulseRadius;

        this.position = createVector(seedx, seedy);

        this.angle = 0;
        this.pulse = 1;
        this.beat = true;

        this.outline = [];
    }

    //////////////////////////////////////////////////////////////////////
  
    oneCycle() 
    {
      this.radius += 0.005;

      for ( let a = 0; a < TWO_PI; a += 0.1 ) 
      {
        let x = this.radius * 16 * pow(sin(a), 3);
        let y = -this.radius * (13 * cos(a) - 6 * cos(2 * a) - 2 * cos(3 * a) - cos(4 * a));

        if (this.beat)
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
  
    update()
    {
        let x = this.radius * 16 * pow(sin(this.angle), 3);
        let y = -this.radius * (13 * cos(this.angle) - 6 * cos(2 * this.angle) - 2 * cos(3 * this.angle) - cos(4 * this.angle));

        this.angle += 0.05;
        this.radius += 0.005;

        if (this.beat)
        {
            this.pulse = map(cos(this.angle), 0, this.pulseRadius, 0.5, -1);
        }
  
        if (this.outline.length < 500) 
        {
            this.outline.push(createVector(x, y));
        }
    }
  
    //////////////////////////////////////////////////////////////////////

    render(x, y) 
    {
        stroke('white');
        strokeWeight(2);
        strokeJoin(ROUND);

        let opacity = 1;
        if ( this.falling )  
        {
            this.position.x = x;
            this.position.y = y;
            opacity = 0.6;

            noStroke();
        }

        push();
        translate(this.position.x, this.position.y);
        fill(255, 101, 186, opacity * 255);

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

Heart.prototype.ComputeHeartOutline_a = function()
{
    let heart = [];
    let a = 0.0;

    for ( let a = 0.0; a < TWO_PI; a += 0.01 )
    {
        const r = height / 20;
        const x = (r * (1 - cos(a)) * cos(a));
        const y = -(r * sin(a) * (1 - cos(a)));

        // Rotate counter-clockwise by 90 degrees (it took me ages to figure this out)
        const theta = - PI / 2;
        const u = ((x * cos(theta)) - (y * sin(theta)));
        const v = ((x * sin(theta)) + (y * cos(theta)));

        heart.push(createVector(u, v));
    }

    return heart;  
}

//////////////////////////////////////////////////////////////////////

Heart.prototype.ComputeHeartOutline_b = function()
{
    let heart = [];
    let a = 0.0;

    for ( let a = 0.0; a < TWO_PI; a += 0.01 )
    {
        const r = height / 40;
        const x = r * 16 * pow(sin(a), 3);
        const y = -r * (13 * cos(a) - 5 * cos(2 * a) - 2 * cos(3 * a) - cos(4 * a));

        heart.push(createVector(x, y));
    }
    
    return heart;
}

//////////////////////////////////////////////////////////////////////

Heart.prototype.ComputeHeartOutline_c = function()
{
    let heart = [];

    for ( let a = -1; a < 1; a += 0.01 )
    {
        const r = 100;
        const x = r * sin(a) * cos(a) * Math.log(Math.abs(a));
        const y = r * Math.pow(Math.pow(a, 2), (3 / 20)) * Math.sqrt(cos(a));

        const theta = PI;
        const u = ((x * cos(theta)) - (y * sin(theta)));
        const v = ((x * sin(theta)) + (y * cos(theta)));

        heart.push(createVector(u, v));
    }

    return heart;
}

//////////////////////////////////////////////////////////////////////

Heart.prototype.ComputeHeartOutline_d = function()
{
    let heart = [];

    for ( let a = 0; a < TWO_PI; a += 0.01 )
    {
        const r = 50;
        const x = r * cos(a) * (sin(a) * Math.sqrt(Math.abs(cos(a)))) / (sin(a) + (7/5)) - 2 * sin(a) + 2;
        const y = r * sin(a) * (sin(a) * Math.sqrt(Math.abs(cos(a)))) / (sin(a) + (7/5)) - 2 * sin(a) + 2;

        const theta = PI;
        const u = ((x * cos(theta)) - (y * sin(theta)));
        const v = ((x * sin(theta)) + (y * cos(theta)));

        heart.push(createVector(u, v));
    }

    return heart;
}

//////////////////////////////////////////////////////////////////////

Heart.prototype.ComputeHeartOutline_e = function()
{
    let heart = [];

    for ( let a = 0.0; a < TWO_PI; a += 0.01 )
    {
        const r = 50;
        const x = -  Math.sqrt(2) * r * Math.pow(sin(a), 3);
        const y = r * (-Math.pow(cos(a), 3) - Math.pow(cos(a), 2) + (2 * cos(a)));

        const theta = PI;
        const u = ((x * cos(theta)) - (y * sin(theta)));
        const v = ((x * sin(theta)) + (y * cos(theta)));

        heart.push(createVector(u, v));
    }

    return heart;
}

//////////////////////////////////////////////////////////////////////
