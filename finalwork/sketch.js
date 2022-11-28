// 最終課題を制作しよう
let border = 100;
let gameStart = false;
let changedScenes = false;
let sceneNumber = 0;
let squareX, squareY, vx, vy;
const g = 1; // 重力加速度
const vyMax = 30;
let cirleX, circleY;
let img;
let c;
let scene1 = true;
let scene2 = false;
let scene3 = false;
let scene4 = false;
let scene5 = false;



function setup() {
  createCanvas(windowWidth, windowHeight);
  squareX = width / 2;
  squareY = height / 2;
  vx = 5;
  vy = 2.5;

 
}



function draw() {
  if (scene1 == true) {
    let title = "Hello World!";
    let startPrompt = "Click ANY Corner to Start!";
    background('black');
    fill('red');
    stroke('red');
    line(0, height / 2, width, height / 2);
    line(width / 2, 0, width / 2, height);
    noStroke();
    textSize(50);
    text(title, width / 2, height / 8);
    textAlign(CENTER);
    text(startPrompt, width / 2, height - border);
    text("Animation", width / 4, height / 4);
    text("Arrays", width / 4 * 3, height / 4);
    text("If-Else & Loops", width / 4, height / 4 * 3);
    text("Animation", width / 4 * 3, height / 4 * 3);




    textAlign(CENTER);
  } else if(scene2 == true) {
    startGame();
  } else if(scene3 == true) {
    changeScene3();
  } else if(scene4 == true) {
    changeScene4();
  } else if(scene5 == true) {
    changeScene5();
  }


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  if (scene1 == true) {
    if(mouseX < width / 2 && mouseY < height / 2) {
      // do something
      scene2 = true;
    } else if (mouseX > width / 2 && mouseY < height / 2) {
      //do something else
      scene3 = true;
    } else if (mouseX < width / 2 && mouseY > height / 2) {
      // do something else
      scene4 = true;
    } else if (mouseX > width / 2 && mouseY > height / 2) {
      // do something EVEN MORE (else)
      scene5 = true;
    }
    // turn scene 1 off
    scene1 = false;
  } else if (scene1 == false) {
    scene1 = true;
    scene2 = false;
    scene3 = false;
    scene4 = false;
    scene5 = false;
  }
}


/*
* This function was originally called gameStart, but I was too
* lazy to change the name to Scene 1. In this Scene,
* 
*/
function startGame() {
  c = color('hsl(160, 100%, 50%)');

  background(c);

  
  
  fill(0, 102, 153);
  textSize(25);
  text('In this class, I learned to Animate by constantly updating the "draw" function.', width / 2, height / 8 + 25);
  text('By doing this, you can constantly update the coordinate values of certain objects to', width / 2, height / 8 + 50);
  fill('gray');
  text('make it look like they are moving fluidly!', width / 2, height / 8 + 75);
  textSize(50);
  textAlign(CENTER, CENTER);
  fill('black');
  text('Use WASD to move!', width / 2, height / 2);
  
  fill('red');
  square(squareX, squareY, 20, 5);

  
  fill('black');
 
  gameStart = true;


  /*
  * if WASD is pressed, move in the corresponding direction
  */
  if (keyIsPressed && keyCode == 65) {
    squareX -= 3;
  } else if (keyIsPressed && keyCode == 68) {
    squareX += 3;
  } else if (keyIsPressed && keyCode == 83) {
    squareY += 3;
  } else if (keyIsPressed && keyCode == 87) {
    squareY -= 3;
  }

      squareX += vx;
      squareY += vy;
       if (squareX > width || squareX < 0) {
        vx = (-1 * vx);
       }
       if (squareY > height || squareY < 0) {
        vy = (-1 * vy);
       }

      vy += g;
       
      vy = constrain(vy, -vyMax, vyMax);
      squareX = constrain (squareX, 0, width);
      squareY = constrain (squareY, 0, height);
 
}

function changeScene3() {
  c = color(255, 204, 0);
  background('yellow');
  fill('red');
  text("You can access every point in the array by using arrayName[i]" +
  " in this case, i is an indice value.", width / 2 , height / 8 + 50);
  fill('black');
  text("In this class, I learned about arrays and how they can store data! Every array has indices to facilitate access to the data stored.", width / 2, height / 8);
  text("With arrays, the indices start from 0 and work their way up to however long the array is!", width / 2, height / 8 + 25);
  text("arrayName", width / 2, height / 2 - 25)

  
  let string = "This represents an Array!";
  let characterArray = ['T', 'h', 'i', 's', ' ', 'r', 'e', 'p', 'r', 'e', 's', 'e', 'n', 't', 's', ' ', 'a', 'n', ' ', 'a', 'r', 'r', 'a', 'y', '!'];
  let i = 1;
  textAlign(CENTER, CENTER);
  characterArray.forEach(element => {
    text(element, border - 25 + (i * 50), height / 2 + 25);
    textSize(20);
    text(i - 1, border - 25 + (i * 50), height / 2 + 75);
    i++;

  });
  noFill();
  stroke('black');
  rect(0 + border, height / 2, width - 2 * border, 50);
  for(let i = 1; i <= 24; i++) {
    line(border + i * 50, height / 2, border + i * 50, height / 2 + 50);
  }

  fill('green');
  noStroke();
  text("arraryName[0] would return 'T' and arrayName[16] would return 'a'.", width / 2, height / 2 + 200);
}

function changeScene4() {
  let c = color('#0f0');
  background(c);
  fill('yellow');
  stroke('black');

  line(250, height / 3 + 150, 250, height / 3, + 200);
  fill('white');
  triangle(237.5, height / 3 + 150, 262.5, height / 3 + 150, 250, height / 3 + 175);

  rect(150, height / 3, 200, 75);

  

  ellipse(250, height / 3 + 225, 100, 50);
  fill('black');
  text("loop condition", 250, height / 3 + 230);
  textSize(25);
  line(250, height / 3 + 260, 250, height / 3 + 350);
  line(250, height / 3 + 350, 500, height / 3 + 350);
  line(500, height / 3 + 350, 500, height / 3 + 225);
  fill('white');
  textAlign(CENTER, CENTER);
  
  
  stroke('black');
  rect(425, height / 3 + 250, 100, 75);
  line(500, height / 3 + 225, 400, height / 3 + 225);
  triangle(400, height / 3 + 212.5, 400, height / 3 + 242.5, 388.5, height / 3 + 225);
  line(200, height / 3 + 225, 100, height / 3 + 225);
  line(100, height / 3 + 350, 100, height / 3 + 225);
  triangle(87.2, height / 3 + 350, 112.5, height / 3 + 350, 100, height / 3 + 362.5);
  rect(75, height / 3 + 400, 100, 75);
  noStroke();
  fill('black');
  text("stop", 100, height / 3 + 450);
  text("updates counter", 450, height / 3 + 275);
  text("Initialization", 250, height / 3 + 25);
  text("of Loop Counter", 255, height / 3 + 50);

  text("Loops are controlled by conditional statements.", width / 2 + 300, height / 3);
  text("Conditional Statements are expressions that return true or false.", width / 2 + 300, height / 3 + 25);
  text("Every iteration of the loop, a coutner updates and", width / 2 + 300, height / 3 + 50);
  text(" when the condition is broken, The Loop stops!", width / 2 + 300, height / 3 + 75);


}


function changeScene5() {
  background('red');
  fill('orange');
  textSize(60);
  text("SURPRISE IT WAS ME, DIO!!", width / 2, height / 2);
  textSize(10);
  text("Actually, theres nothing here, I ran out of time! :(", width / 2, height / 2 + 100);
}