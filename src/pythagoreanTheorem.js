let x1 = 0;
let y2 = 0;
let x3 = 0;
let y3 = 0;
function setup() {
  var myCanvas = createCanvas(300, 300);
  myCanvas.parent("pythagoreanTheoremCanvas");
  background('#282828');
}

function windowResized() {
  resizeCanvas(300, 300);
}

function draw(){
  background('#282828');  
  pythagorasProof();
}

let textTwo = false;

function animate(){
  state = 1;
  x1 = 0.00001;
  y2 = 0.00001;
  setTimeout(animateTwo, 1300);
  textTwo = false;
  setTimeout(fTextTwo, 2600);
}


function animateTwo(){
  x3 = 0.00001;
  y3 = 0.00001;
}

function fTextTwo(){
  textTwo = true;
}

function reset(){
  state = 0;
  x1 = 0;
  y2 = 0;
  x3 = 0;
  y3 = 0;
}

function pythagorasProof(){
  translate (27, 5);
  push();
    strokeWeight(0.08);  
    scale(35);
    fill('#0b7fab');
    square(0, 0, 7);
    fill('#f1e4de');
    push();
      if ((x1 <= 4) && (x1 != 0) ){ x1 = x1 + 0.05;}
      translate(x1, 0);
      triangle(0, 0, 0, 4, 3, 0);
    pop();
    push();
      if ((y2 <= 3) && (y2 != 0) ){ y2 = y2 + 0.037;}
      translate(0, -1 * y2);
      triangle(7, 3, 7, 7, 4, 7);
    pop();
    fill('#7c7b89');
    triangle(0, 4, 0, 7, 4, 7);
    push();
      if ((x3 <= 3) && (x3 != 0) ){ x3 = x3 + 0.04;}
      if ((y3 <= 4) && (y3 != 0) ){ y3 = y3 + 0.053333;}
      translate(-1 * x3 ,y3);
      triangle(7, 0, 7, 3, 3, 0);
    pop();
  pop();
  
  fill(0);
  textSize(22);
  if (state == 0){
  text('c * c' , 2.9 * 35 , 3.5 * 35 );
  text('a' , 5 , 210 );
  text('c' , 40 , 200 );
  text('b' , 227 , 195 );
  text('b' , 50 , 240 );
  text('a' , 190 , 240 );
  text('c' , 195 , 200)
  } else if( textTwo){
    push();
      strokeWeight(0.08);  
      scale(35);
      fill('#e9723d');
      square(0, 0, 4);
      fill('#f4d75e');
      square(4, 4, 3);
    pop();
    fill(0);
    textSize(22);
    text('b * b' , 50, 75 );
    text('a * a' , 170, 200 );
    text('a' , 5 , 210 );
    text('b' , 50 , 240 );
    text('a' , 180 , 20 );
    text('b' , 227 , 90 );
  }
}

let state = 0;
function mouseClicked() {
    if ((mouseX >= 0) && (mouseX <= 300) && (mouseY >= 0) && (mouseY <= 300))  {
      if (state == 0){ animate();}
      else reset();
    }
}
