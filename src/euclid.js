const u = euc => {  
  let img;
  euc.setup = function() {
    var canv = euc.createCanvas(300, 200);
    canv.parent("euclidCanv");
    //drawBase();
  }  
  let status;

  let aha = 0;
  let bfinsihed = false;
  let gfinsihed = false;

  euc.draw = function(){
    switch (status){
      case 0:   drawLine();  break;
      case 1:   drawCircleAni(); break;
      case 2:   drawLines();  break;
    }
  }

  drawCircleAni = function(){
    if (aha < 2*Math.PI && bfinsihed == false){
        rotateBlue();
    } else if (aha > 0){
      bfinsihed = true;
      rotateGreen();
      } else {
      aha = 0;
      bfinsihed = false;
      bfinsihed = true;
      drawBase();
    }
  }
  
  rotateBlue = function(){
    drawBase();
    aha+= 0.07;
    euc.push();
      euc.strokeWeight(3);
      euc.stroke("#e9723d");
      euc.translate(110, 100);
      euc.rotate(aha);
      euc.line(0, 0, 80, 0);
      euc.pop();   
  }

  rotateGreen = function(){
    drawBase();
    aha-= 0.07;
    euc.push();
      euc.strokeWeight(3);
      euc.stroke("#e9723d");
      euc.translate(190, 100);
      euc.rotate(aha);
      euc.line(0, 0, -80, 0);
    euc.pop();   
  }

  drawLine = function(){
    euc.background("#282828"); 
    euc.strokeWeight(3);
    euc.stroke("#e9723d");
    euc.line(110, 100, 190, 100);

  }

  drawLines = function(){
    drawBase();  
    euc.strokeWeight(3);  
    euc.stroke("#0b7fab");
    euc.line(110, 100, 150, 30.71797);
    euc.stroke("#81F781");
    euc.line(190, 100, 150, 30.71797);
    euc.strokeWeight(8);     
    euc.stroke("#f4f4f4");
    euc.point(150, 30.71797);
    euc.point(190, 100);
    euc.point(110, 100); 


  }

  drawBase = function(){
    euc.background("#282828"); 
    euc.noFill();
    euc.strokeWeight(3); 
    euc.stroke("#cccccc"); 
    euc.circle(110, 100, 160);
    euc.stroke(" #808080"); 
    euc.circle(190, 100, 160);
    euc.stroke("#e9723d");
    euc.line(110, 100, 190, 100);
    euc.strokeWeight(8);     
    euc.stroke("#f4f4f4");
    euc.point(190, 100);
    euc.point(110, 100); 
  }

  setState = function(l){
    status = l;
     if (l=1) {bfinsihed = false;}
  }  
}
new p5(u); 






