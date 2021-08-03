const u = euc => {  
  let img;
  euc.setup = function() {
    var canv = euc.createCanvas(300, 200);
    canv.parent("euclidCanv");
    drawBase();
  }  

  let aha = 0;
  let bfinsihed = false;
  let gfinsihed = false;

  euc.draw = function(){
    if (aha < 2*Math.PI && bfinsihed == false){
      rotateBlue();
    } else if (aha > 0){
      bfinsihed = true;
      rotateGreen();
    } else {
      gfinsihed = true;
      drawBase();
    }
  }
  
  rotateBlue = function(){
    drawBase();
    aha+= 0.07;
    console.log(aha);
    euc.push();
      euc.strokeWeight(3);
      euc.stroke("#0b7fab");
      euc.translate(110, 100);
      euc.rotate(aha);
      euc.line(0, 0, 80, 0);
    euc.pop();   
  }

  rotateGreen = function(){
    drawBase();
    aha-= 0.07;
    console.log(aha);
    euc.push();
      euc.strokeWeight(3);
      euc.stroke("#81F781");
      euc.translate(190, 100);
      euc.rotate(aha);
      euc.line(0, 0, -80, 0);
    euc.pop();   
  }

  drawBase = function(){
    euc.background("#282828"); 
    euc.noFill();
    euc.strokeWeight(3);  
    euc.circle(110, 100, 160);
    euc.circle(190, 100, 160);
    euc.stroke("#e9723d");
    euc.line(110, 100, 190, 100);
    euc.stroke("#0b7fab");
    euc.line(110, 100, 150, 30.71797);
    euc.stroke("#81F781");
    euc.line(190, 100, 150, 30.71797);
    euc.strokeWeight(8);     
    euc.stroke("#f4f4f4");
    euc.point(190, 100);
    euc.point(150, 30.71797);
    euc.point(110, 100);
  }

}
new p5(u); 






