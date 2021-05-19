class polygon {
    constructor(x,y,width,height)
    {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
          }
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.body = Bodies.circle(50,200,20,options);
        World.add(world, this.body);
        this.image=loadImage ("polygon.png")

    }
    display()
    {
       // super.display();
       var angle = this.body.angle;
       var pos= this.body.position;
       push();
     
       rotate(angle);
       imageMode(CENTER);
       image(this.image, this.body.position.x,this.body.position.y,this.width,this.height);
       pop();

        
        
    }
}   