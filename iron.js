class Iron {
    constructor(x, y) {
      var options = {
        'density':0.9,
        'friction': 3,
        'restitution':0.1
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 40;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      pos.x = this.body.position.x;
      pos.y = this.body.position.y;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('white')
      fill('silver')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };