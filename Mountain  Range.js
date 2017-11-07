var rgen=new Random(millis());



var monteC = function() {
    
    var ret=0;
    while (true) {
        // Pick a random value.
        var r1 = random(1); ret=max(ret,r1);
        // Assign a probability.
        var probability = r1;
        // Pick a second random value.
        var r2 = random(1);ret=max(ret,r2);
        // Does it qualify? If so, we’re done!
        if (r2 < probability) {
            return ret;
        }
    }
};


var birdI = getImage("avatars/aqualine-ultimate");
var drawBird = function(x,y) {
    var sz=12+25*monteC();
    image(birdI,x,y,sz,sz);
};
var drawFlock = function(x,y) {
    var i,j;
    var birds=random(1.2,5.5);
    for (i=0;i<birds;i++) {
        drawBird(x+88*rgen.nextGaussian(),
            y+24*rgen.nextGaussian());
    }
    
};

var drawCloud=function() {
    var i,j;
    var x,y,w,h;
    x=320+38*rgen.nextGaussian();
    y=50+8*rgen.nextGaussian();
    h=35+5*rgen.nextGaussian();
    w=80+9*rgen.nextGaussian();
    noStroke();
    fill(247, 242, 242);
    ellipse(x,y,w,h);
};

var gaussColor = function() {
    // fill(204, 150, 34);
    var r=204+3*rgen.nextGaussian();
    var g=150+5*rgen.nextGaussian();
    var b=34+7*rgen.nextGaussian();
    return color(r,g,b);
};

var drawBackRange = function() {
    var incAmount = 0.01;
    fill(1, 1, 1);
    for (var t = 0; t < incAmount*width; t += incAmount) {
        var n = noise(t);
        var y = map(n, 0, 1, 0, height*1.2)+50;
        rect(t*100, height-y, 1, y);
    }
};

var drawFrontRange = function() {
    var incAmount = 0.01;
    //fill(204, 150, 34);
    noStroke();
    var r=random(0.2,3);
    for (var t = 0; t < incAmount*width; t += incAmount) {
        var n = noise(t+r);
        var y = map(n, 0, 1, 0, height*0.4)+20;
        fill(gaussColor());
        rect(t*100, height-y, 1, y);
    }
};

background(0, 153, 255);
drawCloud();
drawBackRange();
drawFrontRange();
