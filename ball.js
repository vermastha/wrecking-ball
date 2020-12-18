class Ball{
    constructor(x, y){
        var options={
            restitution:1,
            friction:0.8
        }
        this.body=Bodies.circle(x, y, 25);
        World.add(world, this.body);
    }
    display(){
        var pos=this.body.position;
        pos.x=mouseX;
        pos.y=mouseY;
      //  ellipseMode(RADIUS)
        circle(pos.x, pos.y, 50);
    }
}