function setup() {
  createCanvas(400, 400)
  noFill()
  noLoop()
}

function draw() {
  background(220)
  rSquare(width/2)
  rSquares(width/4, 3*width/4)
}

function rSquare(side) {
  if (side > 3) { // base case: stop recursion if the square's side smaller than 3
    
    rectMode(CENTER)// Draw square centered at width/2, height/2
    rect(width / 2, height / 2, side, side)
    
    // Recursively call with half the side length
    rSquare(side / 2)
  }
}

function rSquares(x1, x2) {
  const d = abs(x1 - x2)
  if (d > 10) { // base case: stop recursion if distance is too small
    const side = d / 2
    const hside = side / 2

    // Draw squares at x1 and x2 positions
    rectMode(CENTER)
    rect(x1, height / 2, side, side)
    rSquares(x1 - hside, x1 + hside)
    
    rect(x2, height / 2, side, side)
    rSquares(x2 - hside, x2 + hside)
  }
}
