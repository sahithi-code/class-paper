class Paper{
constructor(x,y,r){
    var option={
isStatic:false,
restitution:0.2,
friction:10,
density:20
}
this.x= x
this.y =y 
this.r=r 
this.body = Bodies.circle(this.x,this.y,this.r/3,option);


  
World.add(world, this.body);   
}
 display(){   
var pos =this.body.position;


ellipseMode(CENTER)
fill("red")
ellipse(this.body.position.x,this.body.position.y,this.r,this.r)   
 }

}
