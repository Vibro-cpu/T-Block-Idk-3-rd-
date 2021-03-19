class Ruler{

    constructor(y,height){

        this.body = Bodies.rectangle(1250, y, 42.5,height,{isStatic: true});
        World.add(world, this.body);

        this.height = height;
    
    }

    display(){

        fill("red");
        rectMode(CENTER);
        rect(1100,this.body.position.y,42.5,this.height);

    }

}