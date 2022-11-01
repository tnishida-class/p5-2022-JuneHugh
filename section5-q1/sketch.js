// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46", 'red', width / 2, height / 2);
}

function balloon(t, color, positionX, positionY){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 10;
  fill(color);
  rect(positionX, positionY, w + p * 2, h + p * 2);
  fill(255);
  text(t, positionX, (positionY + h + p * 2 / 2));
}
