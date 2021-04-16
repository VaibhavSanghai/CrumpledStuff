class Ground {
    constructor(x,y,width,height) {
      //Making the options variable
      var options = {
          isStatic: true
      }

      //Adding all this. commands
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;

      //Adding to the world
      World.add(world, this.body);
    }

    display(){
      //Adding variables
      var pos = this.body.position;
      
      //Making the rectangle
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };