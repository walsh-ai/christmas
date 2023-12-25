//////////////////////////////////////////////////////////////////////

// Copyright Creative Commons (CC) 2023 Thomas James Walsh
// Licensed CC Attribution 4.0; reuse permitted
// Merry Christmas, Edward
// I <3 you

//////////////////////////////////////////////////////////////////////

class CFallingHeart
{
    constructor(heartType)
    {
        let seedx = floor(random(width) * 1.25);
        let seedy = floor(random(height) * 1.25);

        let radius = random(0.5, 4);
        let pulseRadius = random(5, 10);

        this.setRandomVelocity();
        this.acceleration = createVector(0, 0.001);
        this.position     = createVector(seedx, seedy);


        switch (heartType)
        {
            case EHeartType.HeartType_A:
                this.heart = new CHeartA(seedx, seedy, radius, pulseRadius, true);
                break;
            case EHeartType.HeartType_B:
                this.heart = new CHeartB(seedx, seedy, radius, pulseRadius, true);
                break;
            case EHeartType.HeartType_C:
                this.heart = new CHeartC(seedx, seedy, radius, pulseRadius, true);
                break;
            case EHeartType.HeartType_D:
                this.heart = new CHeartD(seedx, seedy, radius, pulseRadius, true);
                break;
            case EHeartType.HeartType_E:
                this.heart = new CHeartE(seedx, seedy, radius, pulseRadius, true);
                break;
            default:
                this.heart = new CHeartA(seedx, seedy, radius, pulseRadius, true);
                break;
        }

        this.heart.computeFullOutline();
    }

    //////////////////////////////////////////////////////////////////////

    initialiseHeart(heartType)
    {
        switch (heartType)
        {
            case EHeartType.HeartType_A:
                this.heart = new CHeartA(seed)
        }
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

    //////////////////////////////////////////////////////////////////////

    render()
    {
        this.heart.render(this.position.x, this.position.y);
    }
}

//////////////////////////////////////////////////////////////////////
