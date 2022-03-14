/*
Recreate the image found in assets/randomness.png
Use variables for x and y position, fill color, rect size and diameter and make all of them random 
*/

let width = 800, height = 800; 
//let width = 800;
//let height = 800;

let xPos;
let yPos;
let randomColor;
let randomColor2;
var squareSize;
var circleDia;


var xPosSquare;
var yPosSquare;

function setup() {
  createCanvas(width, height);
  background(255);
  frameRate(10);
  noStroke();
}

function draw() { 

  xPos = random(0, width); 
  yPos = random(0, height); 

  xPosSquare = random(0, width); 
  yPosSquare = random(0, height); 

  squareSize = random(20, 100);
  circleDia = random(30, 90);

  randomColor = color(random(255), random(255), random(255), random(255));
  randomColor2 = color(random(255), random(255), random(255), random(255));
  
  fill(randomColor);
  square(xPosSquare, yPosSquare, squareSize); 

  fill(randomColor2)
  circle(xPos, yPos, circleDia);
}
