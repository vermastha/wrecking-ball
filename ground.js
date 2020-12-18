class Ground{
    constructor(){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(200,390,400,20, options);
        this.width=width;
        this.height=height;
        World.add(world, this.body);
    }
    display(){
       var pos=this.body.position;
       push();
       fill('blue');
       rectMode(CENTER)
       rect(pos.x, pos.y, this.width, this.height)
       pop ();
    }