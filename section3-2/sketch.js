// テキスト「アニメーションの基本」
let x, y, vx, vy;
const g = 1; // 重力加速度
const vyMax = 30;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 2.5;
  vy = 2.5;
}

function draw(){
  background(160, 192, 255);
  rect(x, y, 40, 20);
  x += vx;
  y += vy;

  // 重力（コメント機能でオンオフ切り替えて実行してみましょう）
  //vy = constrain(vy + g, -vyMax, vyMax);

  /* 端の処理パターン (1) 反対側から出てくる
   if(x > width){ x = 0; }
   else if(x < 0){ x = width; }
   if(y > height){ y = 0; }
   if(y < 0){ y = height; }*/

   /*x = (x + width) % width;
   y = (y + height) % height;*/

   if (x > width || x < 0) {
    vx = (-1 * vx);
   }
   if (y > height || y < 0) {
    vy = (-1 * vy);
   }
   vy += g;
   // constrain is just a limit!!! the number at which it starts, and 
   // how small and large the number can get!
   vy = constrain(vy, -vyMax, vyMax);
   x = constrain (x, 0, width);
   y = constrain (y, 0, height);

　/* 端の処理パターン (2) 跳ね返る
  if(x < 0 || x > width){ vx = -1 * vx; }
  if(y > height){ vy = -1 * vy; }
  x = constrain(x, 0, width);
  y = constrain(y, 0, height);*/
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
