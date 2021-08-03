const t = sie => {  
  let numbers = [];
  let size = 30;
  let h = 30;
  let y = 0;
  let x = 0;
  sie.setup = function() {
    var canv = sie.createCanvas(300, 300);
    canv.parent("eraSieve");
    sie.background("#282828");   
    sieve();   
  }  

  sieve = function() {
    for (let i = 1; i < 101; i++) {
      let b = new erNumb(i, x, y);
      numbers[i] = b;
      numbers[i].show();
      x += size;
      if (i % 10 == 0){
        y += h;
        x = 0;
      }
    }
   numbers[1].change("#0b7fab", 0);
  }

  sie.mousePressed = function(){
    for (let i = 1; i < 101; i++) {
      numbers[i].clicked(sie.mouseX, sie.mouseY);
    }
  }

  class erNumb{
    constructor(num, posX, posY){
      this.num = num;
      this.posX = posX;
      this.posY = posY;
      this.prime = true;
      this.col = "#81F781";
    }

    clicked(px, py){      
      let xx = px - this.posX;
      let yy = py - this.posY; 
      if ((xx < 31)&&(yy < 31)&&(xx > 0)&&(yy >0)) {       
        let c = this.num;
        if (this.prime){   
          this.change("#e9723d", 1);   
          for (let j = c * 2; j < 101; j += c) {
            numbers[j].change("#0b7fab", 0);          
          }        
        }
      }
    }

    change(s, b){
      this.prime = b;
      this.col = s;
      this.show();
    }

    show(){
      sie.fill(this.col);
      sie.rect(this.posX, this.posY, 30, 30);
      sie.fill("#282828");
      sie.text(this.num, this.posX+30/5, this.posY+30/2);
    }
  }  
}
new p5(t); 






