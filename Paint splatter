scale(4);
translate(-150, -150);

var generator = new Random(5);
var std = 2;
var avg = 0;

var paint = function() {
    this.x = 200;
    this.y = 200;
};
paint.prototype.draw = function() {
    this.rad = random(1, 3);
    noStroke();
    fill(random(255), random(255), random(255), 100);
    ellipse(this.x, this.y, this.rad, this.rad);
};
paint.prototype.painting = function() {
    var xStepSize = (std*generator.nextGaussian()+avg)*2;
    var yStepSize = (std*generator.nextGaussian()+avg)*2;
  
    this.x += xStepSize;
    this.y += yStepSize;
};

var painter = new paint();

draw = function() {
    painter.draw();
    painter.painting();
};
