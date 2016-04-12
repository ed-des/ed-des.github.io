var emojiIndex = []

function setup() {

    createCanvas(windowWidth,windowHeight);
  background(255,255,255,0); 
    strokeWeight(0);
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    blendMode(difference);
     
   
}



function draw() {
    frameRate(500); 
    for (counter = 0; counter < x;counter++) {
ellipse(x,x+1, inputX(), inputY());
    fill(0,0,0,90);
        strokeWeight(0);
    }

}

function mouseDragged() {
ellipse(inputX(),inputY(),20,20);
fill(200,140,50);
strokeWeight(0);

}





function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));


function inputX() {
    var output = 0;

    if (isTouch) {
        output = touchX;
    } else {
        output = mouseX;
    }

    return output;
}

function inputY() {
    var output = 0;

    if (isTouch) {
        output = touchY;
    } else {
        output = mouseY;
    }

    return output;
}


function inputPreviousX() {
    var output = 0;

    if (isTouch) {
        output = ptouchX;
    } else {
        output = pmouseX;
    }

    return output;
}


function inputPreviousY() {
    var output = 0;

    if (isTouch) {
        output = ptouchY;
    } else {
        output = pmouseY;
    }

    return output;
}