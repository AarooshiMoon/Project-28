class Dustbin{
    constructor(x,y,width,height){
        var options={
            isStatic : true
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.image=loadImage("images/dustbingreen.png");
    }
    display(){
        var pos =this.body.position;
        fill(162, 196, 252);
        rect(pos.x, pos.y, this.width, this.height);
        image(this.image,1020,330,200,220);
      }
    
}