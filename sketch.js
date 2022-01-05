const canvasCont = document.getElementById('canvas-cont');
var canvasWidth = canvasCont.clientWidth;
var canvasHeight = canvasCont.clientHeight;
console.log(canvasWidth + " " + canvasHeight);

function setup() {
  createCanvas(canvasWidth, canvasHeight).parent("#canvas-cont");
  background(255, 255, 255, 0);
}

function windowResized() {
  canvasWidth = canvasCont.style.width;
  canvasHeight = canvasCont.style.height;
  resizeCanvas(canvasWidth, canvasHeight);
}

function draw() {
  strokeWeight(2);
  stroke("#F3DE20");
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
