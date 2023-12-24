//////////////////////////////////////////////////////////////////////

// Copyright Creative Commons (CC) 2023 Thomas James Walsh
// Licensed CC Attribution 4.0; reuse permitted
// Merry Christmas, Edward

//////////////////////////////////////////////////////////////////////

class FallingHeart extends Heart
{
    constructor()
    {
        let seedx = floor(random(width) * 1.25);
        let seedy = floor(random(height) * 1.25);

        let radius = random(1, 4);
        let pulseRadius = random(5, 10);

        super(seedx, seedy, radius, pulseRadius, true);
        
        this.setRandomVelocity();
        this.acceleration = createVector(0, 0.001);
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
            this.position.y = -10;
            this.setRandomVelocity();
        }

        if ( this.position.x > (width + this.radius) ) 
        {
            this.velocity.x = - this.velocity.x;
        }
        
        if ( this.position.x < (- this.radius) ) 
        {
            this.position.x = width;
        }
    }

    //////////////////////////////////////////////////////////////////////

    setRandomVelocity()
    {
        let dx = cos(random(-5, 5));
        let dy = Math.random() * 5 + 0.5;

        this.velocity = createVector(dx, dy);
    }
}

//////////////////////////////////////////////////////////////////////
