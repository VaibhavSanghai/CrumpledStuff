class Paper {
    constructor(x,y,radius) {

        var options = {
            'restitution' : 0.2,
            'friction' : 0.3,
            'density' : 1.0
        }
        this.radius = radius; 
        this.body = Bodies.circle(x, y, radius, options);

        //Adding this.body to the world
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position; 

        push(); 
        fill("yellow"); 
        ellipseMode(RADIUS); 
        ellipse(pos.x, pos.y, this.radius, this.radius);
        pop();
    }
}