class Stone {
    constructor(x, y) {
      var options = {
        'density':1.2,
        'friction': 0.4,
        'restitution':0.07
      };
      this.body = Bodies.rectangle(x, y, 100, 120, options);
      this.width = 100;
      this.height = 120;
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
      stroke('green')
      fill('gray')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };