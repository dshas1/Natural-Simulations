var G =1.2;//the speed of the objects moving

// constructor of the property of the objects 
var Mover = function(m) {
  this.position = new PVector(width/2, height/2);
  this.velocity = new PVector(0, 0);
  this.acceleration = new PVector(-0.001, 0.01);
  this.mass = m;
};

// different mass different force to accelerate
Mover.prototype.applyForce = function(force) {
    var f = PVector.div(force, this.mass);
    this.acceleration.add(f);
};

//methode for velocity and acceleration
Mover.prototype.update = function() {
  this.acceleration = PVector.random2D();
  this.acceleration.mult(random(3));
  this.velocity.add(this.acceleration);
  this.velocity.limit(9);
  this.position.add(this.velocity);
};

//draw creature and the position
Mover.prototype.display = function() {
  stroke(0);
  strokeWeight(2);
  fill(127);
  image (getImage("avatars/aqualine-sapling"), this.position.x,mouseY,this.mass*16,this.mass*16);
    image (getImage("avatars/duskpin-ultimate"), this.position.x*2,mouseY+5,this.mass*16,this.mass*16); 
        image (getImage("avatars/piceratops-tree"),this.position.x*4,mouseY,this.mass*16,this.mass*16); 
};

//method the reaction of creature with borders of the screen
Mover.prototype.calculateAttraction = function(m, i) {
    // Calculate direction of force
    var force = PVector.sub(this.position, m.position);
    // Distance between objects
    var distance = force.mag();
    // Limiting the distance to eliminate "extreme" results for very close or very far objects
    distance = constrain(distance, 5.0, 25.0);
    // Normalize vector (distance doesn't matter here, we just want this vector for direction                            
    force.normalize();
    // Calculate gravitional force magnitude
    var strength = (G * this.mass * m.mass) / (distance * distance);
    // Get force vector --> magnitude * direction
    force.mult(strength);
    return force;
};

// what happens if the creatures touch the borders
Mover.prototype.checkEdges = function() {

  if (this.position.x > width) {
    this.position.x = 0;
  } 
  else if (this.position.x < 0) {
    this.position.x = width;
  }

  if (this.position.y > height) {
    this.position.y = 0;
  } 
  else if (this.position.y < 0) {
    this.position.y = height;
  }
};

//more than one shadow of the objects/5 picts per creature
var movers = [];
for (var i = 0; i < 5; i++) {
    movers[i] = new Mover(random(0.1, 5), random(width), random(height));
}

//main program
var draw = function() {
  background(0,0,0);
  for (var i = 0; i < movers.length; i++) {
        for (var j = 0; j < movers.length; j++) {
            if (i !== j) {
                var force = movers[j].calculateAttraction(movers[i]);
                movers[i].applyForce(force);
            }
        }

  movers[i].update();
  movers[i].checkEdges();
  movers[i].display();
  }
};

