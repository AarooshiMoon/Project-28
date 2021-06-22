class Paper{
    constructor(x,y,RADIUS){
        var options={
            isStatic : false,
            restitution : 0.2,
            friction : 0.5,
            density : 2.2
        }
        this.body=Matter.Bodies.circle(x,y,RADIUS,options);
        this.RADIUS=RADIUS;
        World.add(world,this.body);
        this.image=loadImage("images/paper.png");
    }

    display(){
        var pos = this.body.position;
        fill(255);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,20,20);
        image(this.image,pos.x -30,pos.y - 30,60,60);
    }
}