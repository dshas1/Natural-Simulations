//This cat wants to get close to your mouse, but
//it's trapped in a bubble! You're safe there.
//Clicking will scare the cat away for a bit!

var Mover = function() {
    this.position = new PVector(width/2, height/2);
    this.velocity = new PVector(0, 0);
    this.acceleration = new PVector(0, 0);
};

//All creatures will inherit from Mover
var Cat = function(){
  Mover.call(this);
};
Cat.prototype = Object.create(Mover.prototype);


Cat.prototype.update = function() {
    var mouse = new PVector(mouseX, mouseY);
    var dir = PVector.sub(mouse, this.position);
    
    
    if(dir.mag()<=70){
        dir.normalize();
        dir.mult(0.5);
        this.brake();
        
    }
    else{
        dir.normalize();
        dir.mult(0.5);
        this.stalk(dir);
    }
    this.position.add(this.velocity);
};
//This is where it bounces off of the mouse bubble
Cat.prototype.brake = function(){
    //Have to check the quadrant the cat currently inhabits
    //Simply using (-1,-1) puts it in the top left every time
    //and it passes through the bubble to do so
    //try it for yourself to see!
    if(this.position.x<mouseX){
        if(this.position.y<mouseY){
            this.acceleration.set(-1,-1);
        }
        else{
            this.acceleration.set(-1,1);
        }
    }
    else{
        if(this.position.y<mouseY){
            this.acceleration.set(1,-1);
        }
        else{
            this.acceleration.set(1,1);
        }
    }
    this.velocity.add(this.acceleration);
    if(this.velocity<0){
        this.velocity.set(0,0);
    }
};
//mouse following is standard
Cat.prototype.stalk = function(dir){
    this.acceleration = dir;
    this.velocity.add(this.acceleration);
    this.velocity.limit(5);
};
//similar to brake but with bigger magnitude to
//produce a more visible effect
//must call the rest of the update function at 
//the end to see the effect
//note: that's a bit of messy code
//so it will likely get changed
//in later iterations
Cat.prototype.spook = function(){
    if(this.position.x<mouseX){
        if(this.position.y<mouseY){
            this.acceleration.set(-5,-5);
        }
        else{
            this.acceleration.set(-5,5);
        }
    }
    else{
        if(this.position.y<mouseY){
            this.acceleration.set(5,-5);
        }
        else{
            this.acceleration.set(5,5);
        }
    }
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
};

//gotta give the cat something to show that
//it's a cat!! so it has ears.
Cat.prototype.display = function(){
    stroke(0);
    strokeWeight(1);
    fill(127);
    triangle(this.position.x-25,this.position.y,this.position.x-25,this.position.y-35,this.position.x,this.position.y);
    triangle(this.position.x+25,this.position.y,this.position.x+25,this.position.y-35,this.position.x,this.position.y);
    ellipse(this.position.x, this.position.y, 50, 50);
};

//generic display in case i add some creature
//that does not need a special display, or for
//during debug phase. changed to red to show
//which creature is under debug
Mover.prototype.display = function() {
    stroke(0);
    strokeWeight(2);
    fill(138, 0, 0);
    ellipse(this.position.x, this.position.y, 48, 48);
};

//this function will be shared between everyone
//so i will leave it as a mover function
Mover.prototype.checkEdges = function() {

  if (this.position.x > width) {
    this.position.x = 0;
  } else if (this.position.x < 0) {
    this.position.x = width;
  }

  if (this.position.y > height) {
    this.position.y = 0;
  } else if (this.position.y < 0) {
    this.position.y = height;
  }
};

//here's the kitty
var kitty = new Cat(50,50);

var draw = function() {
    background(255, 255, 255);
    
    //protect your mouse!!
    fill(255, 255, 255);
    ellipse(mouseX,mouseY,75,75);
    
    //run the kitty functions
    kitty.update();
    kitty.checkEdges();
    kitty.display(); 
};

var mouseClicked = function(){
    kitty.spook();
};
