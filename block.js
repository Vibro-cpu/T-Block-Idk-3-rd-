class Block{

    constructor(x,y){

        this.body = Bodies.rectangle(x, y, 75,75,{isStatic: false});
        World.add(world, this.body);

    }

    display(){

        push ();
        fill("white");
        rect(this.body.position.x,this.body.position.y,75,75)
        rectMode(CENTER);
        pop ();

    }

}