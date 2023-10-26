//changes in style and index
function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent('game');
  background(152,180,120);

}

function draw() {
  //neck
fill(227, 204, 184);
stroke(227, 204, 184);
rect(240, 300, 120, 150);
  
  //hair
fill(110, 77, 61);
stroke(110, 77, 61);
rect(200,160,200,200,90,90,90,90);
  
//ears
fill(227, 204, 184);
stroke(227, 204, 184);
ellipse(195, 305, 30, 50);
ellipse(405, 305, 30, 50);
  
//earring
fill(222, 222, 209);
stroke(222, 222, 209);
ellipse(194, 330, 4, 10);

//face: I was able to fix the problem by just adjusting the x y coordinates (and removing rectMode CENTER), which is weird because I used the same canvas size. But it worked, and I ended up having to use the same solution to remake the torso.
fill(237, 217, 199);
stroke(237, 217, 199);
rect(200, 200,200,200,60,60,80,80);
ellipse(300,368,150,90);


//hair on top of face
fill(110, 77, 61);
stroke(110, 77, 61);
triangle(270, 200, 290, 200, 290, 205);
triangle(290, 200, 310, 200, 310, 205);
triangle(310, 200, 330, 200, 330, 205);

//eyes
fill(110, 130, 82);
stroke(110, 130, 82);
strokeWeight(5);
ellipse(250,290,15,5);
ellipse(345,290,15,5);

//eyebags
fill(237, 217, 199);
stroke(219, 189, 162);
strokeWeight(2);
line(260, 300, 250, 310);
line(335, 300, 345, 310);

//nose
fill(237, 217, 199);
stroke(219, 189, 162);
ellipse(298, 335, 20, 10);

//eyebrows
fill(110, 77, 61);
stroke(110, 77, 61);
strokeWeight(6);
line(225, 270, 270, 269);
line(375, 270, 330, 269);

//glasses
strokeWeight(2);
stroke(0);
noFill();
ellipse(250,290,60,55);
ellipse(350,290,60,55);
  
//center line of glasses
line(280, 290, 320, 290);
  
//glasses lines to ears
line(220, 290, 200, 280);
line(380, 290, 400, 280);

//mouth
fill(214, 131, 146);
stroke(214, 131, 146);
rect(275, 360, 44, 30, 0, 0, 60, 60);

//chin hair
fill(196, 157, 137);
stroke(196, 157, 137);
strokeWeight(2);
line(290, 405, 295, 413);
line(295, 405, 300, 413);
line(300, 405, 305, 413);

//moustache
line(285, 345, 280, 350);
line(290, 345, 285, 350);
line(310, 350, 305, 345);
line(315, 350, 310, 345);

//torso
fill(74, 74, 61);
stroke(74, 74, 61);
rect(125, 450, 350, 255, 100);

fill(255);
textSize(20);
text("Mason", 270, 100);
}