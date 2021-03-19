class Barriers{

    constructor(){

        //roof

            this.body = Bodies.rectangle(500,0,displayWidth,10,{isStatic: true});
            World.add(world, this.body);

        //Left

            this.body = Bodies.rectangle(0,450,10,displayHeight,{isStatic: true});
            World.add(world, this.body);

        //Right

            this.body = Bodies.rectangle(1250,450,10,displayHeight,{isStatic: true});
            World.add(world, this.body);

    }

}