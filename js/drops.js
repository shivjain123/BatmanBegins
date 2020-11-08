class Drop {
    constructor(x, y) {
      var options = {
          'restitution': 0.1,
          'friction': 0.001
      }
      
      this.radius = 5
      this.rain = Bodies.circle(x, y, 5, options);
      //this.Matter.body = Matter.bodies.circle(this.x, this.y, this.r*2, options)
      World.add(world, this.rain);
    }

    display() {
      
     fill("blue");
     ellipseMode(CENTER); 
     ellipse(this.rain.position.x, this.rain.position.y, this.radius, this.radius);
    }
    
    updateY(){

      if(this.rain.position.y > height){
        Matter.Body.setPosition(this.rain, {x : random(0, 400), y : random(0, 400)});
      }

    }


}

  