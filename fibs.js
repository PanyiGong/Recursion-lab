let fibs = [0, 1]; // Initialize memoization array
let n = 1;

function setup() {
  createCanvas(400, 400);
  noLoop();
  textAlign(CENTER, CENTER);
}

function draw() {
  background(220);
  text(`${n}th Fibonacci number: ${fib(n)}`, width / 2, height / 2);
}

function keyPressed() {
  if (key === " ") {
    n += 1;
    redraw();
  }
}

function fib(n) {
  if (n < 0) { // Handle invalid input
    return 0;
  }
  
  if (fibs[n] !== undefined) {
    //i==  means not strictly equal
    return fibs[n]; // Return cached value if available
  }
  
  // Compute and store the value in the memoization array
  fibs[n] = fib(n - 1) + fib(n - 2);
  return fibs[n];
}

