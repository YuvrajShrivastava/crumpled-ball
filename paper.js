class Paper{
    constructor(x, y,r) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x, this.y, this.r/2, options)
        //this.width = width;
       // this.radius = radius;
        World.add(world, this.body);
        
      }
      
      display(){
        var pos =this.body.position;
        //rectMode(CENTER);
        fill("brown");
        ellipse(pos.x, pos.y, pos.radius);
      }

}

