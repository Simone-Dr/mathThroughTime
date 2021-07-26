var slider = document.getElementById("theoSlider");
var output = document.getElementById("outTheo");
output.innerHTML = slider.value; 



const s = irNumb => {  
  irNumb.setup = function() {
    var canv = irNumb.createCanvas(400, 300);
    canv.parent("TheodorusOfCyrene");
    irNumb.background("#282828");
    irNumb.translate(200, 150);
    irNumb.scale(25);
    irNumb.stroke(255);
    irNumb.textSize(0.7);
    irNumb.spiral(slider.value);
    
    
  }  

  irNumb.spiral = function(l) {
    irNumb.background("#282828");
    irNumb.stroke(255);
    let angle=0;
    let saveAngle = 0;
    let x, y, s;
    let lx = 1;
    let ly = 0;
    
    irNumb.strokeWeight(0.03);
    irNumb.line(0, 0, 1, 0);
    irNumb.line(1, 0, 1, -1);
    
    irNumb.push();
      irNumb.noFill();
      irNumb.square(1, 0, -0.25);
    irNumb.pop();
   
      
    for(let i = 1; i <= l;i++){
      saveAngle += atan(1/sqrt(i));
      x = sqrt(i+1) * cos(saveAngle);
      y = sqrt(i+1) * sin(saveAngle);
      irNumb.line(0, 0, x, -y);
      irNumb.line(0, 0, x, -y);
      irNumb.line(lx, -ly, x, -y); 
      
      if (i !=l){
        lx = x;
        ly = y;
      }
    }

    if (l == 1){
      irNumb.strokeWeight(0.1);
      irNumb.stroke('#0b7fab');
      irNumb.line(0, 0, 1, 0);
    }
    irNumb.strokeWeight(0.1);
    irNumb.stroke('#0b7fab');
    irNumb.strokeWeight(0);
    irNumb.fill('#0b7fab'); 
    irNumb.text(" 1", lx, -ly);
    irNumb.strokeWeight(0.1);
    irNumb.line(lx, -ly, x, -y);
    irNumb.stroke('#e9723d');
    irNumb.line(0, 0, x, -y); 
    l++;
    s = ("√") + (l);
    irNumb.strokeWeight(0);
    irNumb.fill('#e9723d'); 
    irNumb.text(s, x, -y);
  }

  slider.oninput = function() {
    output.innerHTML = this.value;
    irNumb.spiral(this.value);
  }  
}
new p5(s); 






