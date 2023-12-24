//////////////////////////////////////////////////////////////////////

// Copyright Creative Commons (CC) 2023 Thomas James Walsh
// Licensed CC Attribution 4.0; reuse permitted
// Merry Christmas, Edward

//////////////////////////////////////////////////////////////////////

class FallingHeart extends Heart
{
    constructor()
    {
        let seedx = floor(random(width) * 1.5);
        let seedy = floor(random(height) * 1.5);

        let dx = cos(random(-5, 5));
        let dy = Math.random() * 5 + 0.5;

        let radius = random(1, 3);
        let pulseRadius = random(5, 10);

        super(seedx, seedy, radius, pulseRadius, true);

        this.acceleration = createVector(0, 0);
        this.velocity     = createVector(dx, dy);
        this.position     = createVector(seedx, seedy);

        super.oneCycle();
    }

    //////////////////////////////////////////////////////////////////////

    update()
    {
        this.velocity.add(this.acceleration);
        this.velocity = p5.Vector.limit(this.velocity, 5);

        this.position.add(this.velocity);

        if ( this.position.y > height ) 
        {
            this.position.y *= -1;
        }

        if ( this.position.x > width ) 
        {
            this.velocity.x *= -1;
        }
        
        if (this.position.x < -10) {
            this.position.x = width;
          }
        
        this.acceleration.mult(0);
    }

    //////////////////////////////////////////////////////////////////////

    render()
    {
        super.render(this.position.x, this.position.y);
    }
}

//////////////////////////////////////////////////////////////////////
