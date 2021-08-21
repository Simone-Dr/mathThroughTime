const uC = agy => {  

  let textSize = 25;
  agy.setup = function() {
    var canv = agy.createCanvas(300, 260);
    canv.parent("egyptianMultiplic");
    agy.background("#282828"); 
    agy.fill(255);
    agy.textFont('Abel');
    agy.textSize(textSize);
    Table(12, 7);  
  }

  clickEgypt = function(factA, factB){
    factA = parseInt(factA);
    factB = parseInt(factB);

    if (factA >= factB){
      console.log("hi"); 
      Table(factA, factB); 
    } else if (factA < factB){
      Table(factB, factA);
      console.log("ho"); 
      document.getElementById('multiTwo').value = factA;
      document.getElementById('multiOne').value = factB;
    }
  }

  Table = function(factorOne, factorTwo){ //find largest power of two less or equal to fN    
    let fo = factorOne;
    let reached = false;
    let reachedZero = false;
    let values = [];   

    for (let i = 0; reachedZero == false; i++) { 
      reached = false;  
      for (let pow = 0; reached == false; pow++) {
        if ((2**pow) > factorOne){
          reached = true;
          values[pow - 1] = true;
          factorOne = factorOne - 2**(pow-1);
          if (factorOne == 0){ reachedZero = true;}
        }
      }  
    }

    for (var i = 0; i < values.length; i++) {
      if (values[i] != true){values[i] = false;}
    }
   
    drawCanvas(values, factorTwo, fo);
  }  

  drawCanvas = function(v, ft, fo){
    agy.background("#282828"); 
    textSize = 25;
    textSize -= v.length; 
    agy.strokeWeight(0);


    let distance = 200 / v.length-1; 
    let y = 50;
    let s1;
    let sa = 0;   
    let s2f = ft;
    let s2fg = 0;

    for (var i = 0; i < v.length; i++) {   
      agy.fill("#e9723d");
      s1 = 2 ** i;
      if (v[i]){ 
        agy.fill("#81f781")
        sa += s1;
        s2fg += parseInt(s2f);
      }
      agy.push();
        agy.fill("#696969");
        agy.textSize(textSize);
        agy.text( "2   = ", 35, y);
        agy.textSize(textSize-5);
        agy.text( i , 47, y-15);
      agy.pop();
      agy.textSize(textSize);
      agy.text(2** i, 82, y);
      agy.text( s2f , 185, y);
      s2f *= 2;

      if (i != v.length - 1){
        let yy = y -5;
        agy.fill(255);
        agy.push();
          agy.stroke(255);
          agy.strokeWeight(1);
          agy.line(230, yy+5, 230, yy + distance -10);
        agy.pop();
        agy.triangle(230, yy+distance-10, 225, yy+distance-18, 235, yy+distance -18);
        agy.textSize(textSize-5); 
        agy.text( "*2" , 235, yy+ distance/2 +5);

        agy.fill(255);
        agy.push();
          agy.stroke(255);
          agy.strokeWeight(1);
          agy.line(105, yy+5, 105, yy + distance -10);
        agy.pop();
        agy.triangle(105, yy+distance-10, 100, yy+distance-18, 110, yy+distance -18);
        agy.textSize(textSize-5); 
        agy.text( "*2" , 110, yy+ distance/2 +5);
      }
      y += distance;
    }

    agy.fill(255);
    agy.stroke(255);
    agy.strokeWeight(2);
    agy.line(75, y -25, 110, y-25);
    agy.line(150, 20, 150, 230);
    agy.textSize(textSize);
    agy.strokeWeight(0);
    agy.text( sa , 82, 250);

    agy.fill(255);
    agy.stroke(255);
    agy.strokeWeight(2);
    agy.line(185, y -25, 220, y-25);
    agy.textSize(textSize);
    agy.strokeWeight(0);
    agy.text( s2fg , 185, 250);
    document.getElementById("outEgy").innerHTML = fo + " * " + ft + " = " + s2fg;
  }
}
new p5(uC); 






