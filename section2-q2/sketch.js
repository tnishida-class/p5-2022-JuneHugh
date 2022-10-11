// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();

  for(let i = 0; i < 8; i++) {
      
    for(let j = 0; j < 8; j++) {
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      fill('gray');
      if (i % 2 == 1 && j % 2 == 0) {
        rect(size * i, size * j, size, size);
      } else if(i % 2 == 0 && j % 2 == 1) {
        rect(size * i, size * j, size, size);
      } /* if the remainder of i / 2 is 1, AND the remainder of j / 2 = 0,
       OR if the remainder of j / 2 is 0, AND the remainder of j / 2 = 1,
      THEN create a gray rectangle with equal length & height of size 'size' (width / 8)
      */
     if (j < 3 && i % 2 == 1 && j % 2 == 0) {
      fill('red');
      circle(size * i + (size / 2), size * j + (size / 2), size - 5);
     } else if (j < 3 && i % 2 == 0 && j % 2 == 1) {
      fill('red');
      circle(size * i + (size / 2), size * j + (size / 2), size - 5);
     }// creates 3 rows of red checker pieces
     if (j > 4 && i % 2 == 0 && j % 2 == 1) {
      fill('black');
      circle(size * i + (size / 2), size * j + (size / 2), size - 5);
     } else if (j > 4 && i % 2 == 1 && j % 2 == 0) {
      fill('black');
      circle(size * i + (size / 2), size * j + (size / 2), size - 5);
    }}
  }
}
