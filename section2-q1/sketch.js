// 小手調べ
function setup(){
  createCanvas(100, 100);
  let center = width / 2;
  for(let i = 0; i < 10; i++){
    // BLANK[1]
    if (i < 5) {
      //red
    stroke(255, 0, 0);
    } else{
      //blue
    stroke(0, 0, 255);
    }
    noFill();
    ellipse(center, center, 100 - (i * 10));
    
  }
}
