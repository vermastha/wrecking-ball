class Box{
 constructor(x, y,){
     var options={
         'restitution':1,
     }
     this.body=Bodies.rectangle(x, y, 50, 50, options);
     this.width=width;
     this.height=height;
     World.add(world, this.body);
 }
 display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    angleMode(RADIANS);
    push ();
    translate(pos.x, pos.y)
    rotate(angle);
    fill ('red');
    rectMode(CENTER)
    rect(0, 0, 50, 50);
    pop ();
 }
}