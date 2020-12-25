class Paper {
    constructor(x, y, width, height) {
      var options = {
        'density':1.5,
        'friction': 1.0,
        'restitution':0.5
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      World.add(world, this.body);
    }
    display(){
  
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      circleMode(CENTER)
      circle(this.width, this.height);
      pop();
    }
  }