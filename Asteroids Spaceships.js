//Use the left and right arrow keys to rotate the ship accordingly. Use the "Z" key to accelerate, and the "X" key to decelerate and reverse. Just remember that there's some float!
angleMode = "radians";
var Ship = function() {
    this.acceleration = new PVector(0, 0);
    this.velocity = new PVector(0, 0);
    this.position = new PVector(width / 2, height / 2);
    this.angle = 0;
};
Ship.prototype.thrust = function() {
    var thrust = -1;
    this.acceleration = new PVector(sin(-this.angle) * thrust, cos(-this.angle) * thrust);
};
Ship.prototype.unthrust = function() {
    var unthrust = 1;
    this.acceleration = new PVector(sin(-this.angle) * unthrust, cos(-this.angle) * unthrust);
};
Ship.prototype.update = function() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(4);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
    if(this.velocity.mag() < 0) {
        this.velocity.mult(0);
    }
};
Ship.prototype.checkEdges = function() {
    if(this.position.x > width) {
        this.position.x = 0;
    } else if(this.position.x < 0) {
        this.position.x = width;
    } else if(this.position.y > height) {
        this.position.y = 0;
    } else if(this.position.y < 0) {
        this.position.y = height;
    }
};
Ship.prototype.display = function() {
    pushMatrix();
    translate(this.position.x, this.position.y);
    rotate(this.angle);
    stroke(240, 240, 240);
    fill(150, 150, 150);
    rect(-5, 3, 3, 3);
    rect(1, 3, 3, 3);
    triangle(0, -6, 6, 4, -6, 4);
    popMatrix();
};
var ship = new Ship();
draw = function() {
    background(0, 0, 0);
    ship.update();
    ship.checkEdges();
    ship.display();
    keyPressed = function() {
        if(keyCode === 37) {
            ship.angle -= 0.05;
        } else if(keyCode === 90) {
            ship.thrust();
        } else if(keyCode === 88) {
            ship.unthrust();
        } else if(keyCode === 39) {
            ship.angle += 0.05;
        }
    };
};
