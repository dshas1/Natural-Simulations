background(142, 237, 221);
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
        fill(105, 78, 78);
        rect(t*100, height-y, 1, y);
    }
};
drawRange2();
drawRange();
fill(252, 252, 15);
ellipse(200,58,100,100);
