// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;
let size = 25
let beating = true;
const heartRate = .01;
const heartRateMax = 2.5;
const gravity = .025;
const maxGravity = 15;

// declares instance variables!
let x, y, vy, vSize;

function setup(){
  createCanvas(200, 200);
  // initializes the instance variables
  count = 50;
  cycle = 100;
  x = width / 2;
  y = height / 2;
  vy = 2.5;
  vSize = .5;
}

function draw(){
  background(160, 192, 255);
  noStroke();
  fill('red');
  // creates an elipse / circle
  ellipse(x, y, size);


  
  /* If a key is pressed, then the circle will gradually
  *  beat faster!
  *
  */
  if (keyIsPressed == true) {
    if (size < 80 && beating) {
      size += 30;
    } else if (size > 25) {
      beating = false;
      size -= vSize;
    }
    if (size == 25) {
      beating = true;
    }
    size = constrain(size, 25, 80)

    vSize += heartRate;
    vSize = constrain(vSize, heartRate, heartRateMax);
   
    /* If you don't press any keys,, the circle will
    *  gradually beat slower.
    */
  } else if (keyIsPressed == false) {
 
    if (size < 80 && beating) {
      size += 30;
    } else if (size > 25) {
      beating = false;
      size -= vSize;
    }
    if (size == 25) {
      beating = true;
    }
    size = constrain(size, 25, 80)

    /* If the rate of change of circle is greater
    *  than the heartRate, than decrement the rate of change
    *  by .01. This makes the circle gradually
    *  slow down if you don't press any buttons / keys.
    */
    if (vSize <= heartRate) {
      vSize = heartRate;
    } else if (vSize > heartRate) {
      vSize -= heartRate;
    }
    
    // constrains the vSize so it never reaches too fast or too slow
    vSize = constrain(vSize, 1, heartRateMax);

  }

  /*if (keyCode == LEFT_ARROW) {
    x -= 1;
  } else if (keyCode == RIGHT_ARROW) {
    x += 1;
  } else if (keyCode == SPACE) {
    y -= vy;
    vy += gravity;
    vy = constrain(vy, gravity, maxGravity);
  } else if (keyCode == DOWN_ARROW) {
    y += 1;
  } */

  if (keyIsPressed && keyCode == LEFT_ARROW) {
    x -= 1;
  } else if (keyIsPressed && keyCode == RIGHT_ARROW) {
    x += 1;
  } else if (keyIsPressed && keyCode == DOWN_ARROW) {
    y += 1;
  } else if (keyIsPressed && keyCode == UP_ARROW) {
   /* y -= vy;
    vy -= gravity;
    if (vy <= 0) {

    }
    vy = constrain(vy, gravity, maxGravity);*/
    y -= 1;
  }
  //y += 1;


  

  // if circle goes out of bounds, or out of screen / canvas, it will reappear on the other side!
  x = (x + width) % width;
  y = (y + height) % height;

}
