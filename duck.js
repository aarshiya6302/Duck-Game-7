class Duck {
    constructor(x,y) {
      var options = {
          isStatic: true
          //'restitution':0.8,
          //'friction':1.0,
          //'density':1.0
      }

      this.body = Bodies.rectangle(x,y,30,30,options);
      this.width = 100;
      this.height = 100;
      this.image = loadImage("pictures/duck.png");
      World.add(world, this.body);
    }
    display(){
      push();
      translate(this.body.position.x, this.body.position.y);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  };


