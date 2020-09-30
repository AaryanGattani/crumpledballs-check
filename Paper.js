class PAPER{
    constructor(x, y, radius) {
        var options = {
            'isStatic' : false,
            'restitution':0.1,
            'friction':0.4,
            'density':0.2,
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
        this.image = loadImage("Crumbled Paper.png")
        
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
			 strokeWeight(3);
       fill("red");
       imageMode(CENTER);
       image(this.image, 0,0,this.radius, this.radius) ;
        pop();
      }
}