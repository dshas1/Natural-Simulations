//global variables
angleMode = "radians";
var flySpeed = 0.03;

// Create Eagle Object
var Eagle = function(){
    
    this.amp = 60;
    this.angle=0;
    this.startAngle = 0.0;
    //this.startAngle1 = 0.0;
    //this.startAngle2 = 0.0;
};

Eagle.prototype.make = function(){
    
    //Head
    
    this.startAngle+=flySpeed;
     for(var x = width*(0.4); x < width*(0.6); x +=80){
        var y = this.amp*sin(this.angle);
        //println(this.angle);
        fill(0, 0, 255,100);
        ellipse(x+((width*0.2)/2),y,82,100);
        fill(255, 2*abs(y), 2*abs(y));
        ellipse(x+20,y-5,10,10);
        ellipse(x+60,y-5,10,10);
        fill(50, 214, 184);
        ellipse(x+41,y+20,abs(y)/2+15,20);
        this.angle+=PI/8;
    }
    //First Wing
    
    this.angle=this.startAngle;
    for(var x = 0; x < width*(0.4); x +=24){
        var y = this.amp*sin(this.angle);
       //println(this.angle);
        fill(53, 237, 12,100);
        ellipse(x,y,30,30);
        this.angle+=PI/8;
    }
    //Second Wing
    
    //this.startAngle2+=0.03;
    this.angle = this.startAngle;
     for(var x = width; x >= width*0.6; x -=24){
        var y = this.amp*sin(this.angle);
        //println(this.angle);
        fill(242, 255, 0,100);
        ellipse(x,y,30,30);
        this.angle+=PI/8;
    }
};

//Create instance of the Eagle Object.
var eagle = new Eagle();

// Invoke draw command and run simulation!
draw = function() {
    background(255, 255, 255);
    pushMatrix();
    translate(0,height/2);
    eagle.make();
    popMatrix();

    // msg for flying speed
    if(flySpeed <= 0 ){
        println("flap faster");
    }
    if(flySpeed>=0.39){
        println("that's as fast as I am going bud!");
    }
    
};

// use interactions. 
//Make eagle fly faster on mouse click!
mouseClicked = function(){
    if(flySpeed<0.4){
        flySpeed+=0.01;
    }
};

//slow down eagle with any key pressed.
keyPressed = function(){
    if (flySpeed >= 0){
        flySpeed-=0.01;    
    }
};


