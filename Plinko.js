class Plinko {
    constructor(x,y){
        var options ={
            isStatic:true,
        }

        
        this.body = Bodies.circle(x,y,10,options);
        World.add(world,this.body);   

    }

    Display(){

        push();
        noStroke();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,10,10);
        pop();
    }




}