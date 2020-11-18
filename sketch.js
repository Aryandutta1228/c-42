
function setup() {
  createCanvas(1000,600);
  angleMode(DEGREES);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);

  stroke(150,150,255);
  noFill();
  arc(500,360,110,110,180,0);
  arc(500,240,110,110,0,180);
  arc(500,300,50,50,0,360);
  

  stroke(225,220,255);
  strokeWeight(3);
  noFill();
  arc(500,300,120,120,0,360);
  
  noStroke();
  fill("red");
  let h = hour();
  text('Hour:\n' + h, 5, 50);
  
  fill("green");
  let m = minute();
  text('Minute: \n' + m, 5, 100);
  
  fill("blue");
  let s = second();
  text('Second: \n' + s, 5, 150);

  fill("yellow");
  let d = day();
  text('Date: \n' + d,5,200,);

  fill("yellow");
  let mm = month();
  text('Month: \n' + mm,50,200,);
  

  fill("yellow");
  let y = year();
  text('Year: \n' + y,100,200,);

  
  fill("cyan");
  text("12",492,235);
  text("6",497,375);
  text("9",425,305);
  text("3",565,305);
  text("8",435,340);
  text("4",555,340);
  text("7",462.5,365);
  text("5",532.5,365);
  text("10",432.5,270);
  text("2",555,270);
  text("11",457.5,242.5);
  text("1",530,242.5);

  noFill();
  stroke(100,10,255);
  arc(568,300,20,20,0,360);

  noFill();
  stroke(100,10,255);
  arc(430,300,20,20,0,360);

  noFill();
  stroke(100,10,255);
  arc(500,231,25,25,0,360);

  noFill();
  stroke(100,10,255);
  arc(500,369,20,20,0,360);

  translate(500,300);
  rotate(270);


  let hr = hour();
  let mn = minute();
  let sc = second();


  
  strokeWeight(4);
  stroke("blue");
  noFill();
  let scAngle = map(sc, 0, 60, 0, 360);
  arc(0,0,200,200,0,scAngle);
  
  stroke("green");
  let mnAngle = map(mn, 0, 60, 0, 360);
  arc(0,0,180,180,0,mnAngle);

  stroke("red");
  let hrAngle = map(hr%12 , 0, 12, 0, 360);
  arc(0,0,160,160,0,hrAngle);
  
  

  stroke("yellow");
  arc(0,0,220,220,1,30);

  stroke("green");
  arc(0,0,230,230,31,59);
  
  stroke(255,100,0);
  arc(0,0,220,220,61,89);

  stroke("purple");
  arc(0,0,230,230,91,119);

  stroke("cyan");
  arc(0,0,220,220,121,149);

  stroke("maroon");
  arc(0,0,230,230,151,179);

  stroke("orange");
  arc(0,0,220,220,181,209);

  stroke("grey");
  arc(0,0,230,230,211,239);

  stroke("red");
  arc(0,0,220,220,241,269);

  stroke("blue");
  arc(0,0,230,230,271,299);

  stroke("orchid");
  arc(0,0,220,220,301,329);

  stroke("brown");
  arc(0,0,230,230,331,359);


  //stroke("brown");
  //arc(0,0,220,220,361,359);


  
  

  push();
  rotate(scAngle);
  stroke("blue");
  line(0,0,60,0);
  pop();

  push();
  rotate(mnAngle);
  stroke("green");
  line(0,0,45,0);
  pop();


  push();
  rotate(hrAngle);
  stroke("red");
  line(0,0,30,0);
  pop();

  stroke("yellow");
  point(0,0);


  
  
 

}


