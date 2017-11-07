background(114, 242, 221);
var drawRange = function() {
    var incAmount = 0.01;
    for (var t = 0; t < incAmount*width; t += incAmount) {
        noStroke();
        var n = noise(t*0.5);
        var y = map(n, 0, 1, 0, height/2);
        fill(19, 94, 0);
        rect(t*100, height-y, 1, y);
    }
};
var drawRange2 = function() {
    var incAmount = 0.01;
    for (var t = 0; t < incAmount*width; t += incAmount) {
        noStroke();
        var n = noise(t*0.6);
        var y = map(n, 0, 1,50, height);
        fill(79, 107, 80);
        rect(t*100, height-y, 1, y);
    }
};
var drawRange3 = function() {
    var incAmount = 0.01;
    for (var t = 0; t < incAmount*width; t += incAmount) {
        noStroke();
        var n = noise(t*0.7);
        var y = map(n, 0, 1,50, height/1.5);
        fill(24, 71, 26);
        rect(t*100, height-y, 1, y);
    }
};
drawRange2();
drawRange3();
drawRange();
fill(252, 252, 15);
ellipse(30,30,100,100);
fill(255, 255, 255);
var x = 114;
ellipse(x+141,41,40,30);
ellipse(x+168,41,60,48);
ellipse(x+196,41,80,49);
ellipse(x+235,41,60,35);

