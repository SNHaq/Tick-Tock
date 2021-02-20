function setup() {
  createCanvas(400,400);
}

function draw() {
  background(0);  

  //Translation and rotation
  translate(200,200);
  rotate(-90);

  //Calculating time using predefined functions. 
  h = hour();
  m = minute();
  s = second(); 

  //The following code is to create an ab iterative rotation. 
  sAngle = map(s, 0, 60, 0, 360);
  mAngle = map(m, 0, 60, 0, 360);
  hAngle = map(h % 12, 0, 60, 0, 360);
  angleMode(DEGREES);

  //Rotate the hand based on the seconds angle. 

  push();
  //This is the hour hand. 
  rotate(hAngle);
  stroke("lightblue");
  strokeWeight(8);
  line(0,0,50,25);
  pop();

  //This is the minutes hand. 
  push();
  rotate(mAngle);
  stroke("pink");
  strokeWeight(10);
  line(0,0,75,0);
  pop();

  //This is the seconds hand. 
  push();
  rotate(sAngle);
  stroke(155,0,155);
  strokeWeight(6);
  line(0,0,100,0);
  pop();

  stroke("pink");
  point(0,0);

  strokeWeight(10)
  noFill();
  //seconds fill
  stroke(155,0,155);
  arc(0,0,300,300,0,sAngle);
  //minute fill
  stroke("pink");
  arc(0,0,280,280,0,mAngle);
  //hour fill
  stroke("lightblue");
  arc(0,0,260,260,0,hAngle);

  drawSprites();
}