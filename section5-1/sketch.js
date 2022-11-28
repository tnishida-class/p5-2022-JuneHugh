// テキスト「関数を使う」
// 練習問題：このプログラムを改造してEUの旗を描いてみよう
function setup(){
  createCanvas(255, 170);
  // to look like the EU flag
  background('blue');
  // adds 12 stars in a pefect circle
  for(let i = 0; i < 12; i++){
    let theta = TWO_PI * i / 12;
    let x = 127.5 + cos(theta) * 50;
    let y = 85 + sin(theta) * 50;
    // calls the function stars
    star(x, y, 10);
  }
}

// ヒント：section5-2 にある star 関数をここにコピーして、 draw 内で ellipse の代わりに使おう
// creates the stars using 3 arguments
function star(cx, cy, r){
  // formats the star in desired way
  noStroke();
  fill('yellow');
  beginShape();    // 点つなぎを始める
  for(let i = 0; i < 5; i++){
    const theta = TWO_PI * i * 2 / 5 - HALF_PI;
    const x = cx + cos(theta) * r;
    const y = cy + sin(theta) * r;
    vertex(x, y);  // 次につなぐ点を１つ増やす
  }
  endShape(CLOSE); // 点つなぎを終わる
}

