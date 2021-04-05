class Rubber{
	constructor(x,y,radius)
	{
		var options = {
			'restitution': 0.8,
			'friction': 1,
			'density': 1

		}
		//this.x=this.body.position.x;
		//this.y=this.body.position,y;
		this.r= 40
		this.body=Bodies.circle(x,y,40,options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;
			rubberpos.x = this.body.position.x;
			rubberpos.y = this.body.position.y;		
			var angle=this.body.angle;
			push()
			translate(rubberpos.x, rubberpos.y);
			rotate(angle)
			ellipseMode(RADIUS)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
            ellipse(0,0,40);
			pop()
	}

}