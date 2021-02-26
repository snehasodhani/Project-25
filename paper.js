class Paper{
    constructor(x,y){
var options={
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
}
this.body=Matter.Bodies.circle(x,y,20,options);
this.image=loadImage("paper.png");


World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;

       
        rectMode(CENTER);
          
        fill("white");
      
        image(this.image,pos.x,pos.y,75,75);
        imageMode(CENTER);
        rotate(this.body.angle);
    
      
        
       
    }
    }
