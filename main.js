// Triangle Heart Asgn Solution

// Canvas Setup
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

// Call draw function once all page resources have loaded
window.addEventListener("load", draw);

function draw() {
  // Draw all GREY Triangles
  ctx.fillStyle = "grey";

  fillTriangle(0, 100, 100, 0, 100, 100);
  fillTriangle(200, 100, 300, 0, 300, 100);
  fillTriangle(100, 100, 100, 200, 200, 100);
  fillTriangle(300, 100, 300, 200, 400, 200);
  fillTriangle(100, 200, 100, 300, 200, 200);
  fillTriangle(200, 300, 200, 400, 300, 300);

  
  // Draw all PINK Triangles
  ctx.fillStyle = "pink";

  fillTriangle(100, 0, 100, 100, 200, 100);
  fillTriangle(0, 100, 0, 200, 100, 200);
  fillTriangle(300, 100, 400, 100, 400, 200);
  fillTriangle(200, 200, 300, 200, 300, 300);
  fillTriangle(100, 300, 200, 300, 200, 400);

  // Draw all RED Triangles
  ctx.fillStyle = "red";

  fillTriangle(300, 0, 300, 100, 400, 100);
  fillTriangle(0, 100, 100, 100, 100, 200);
  fillTriangle(200, 100, 300, 100, 200, 200,);
  fillTriangle(200, 200, 100, 300, 200, 300);
  fillTriangle(300, 200, 400, 200, 300, 300);

  // Draw all YELLOW Triangles
  ctx.fillStyle = "yellow";
  
  fillTriangle(100, 200, 200, 100, 200, 200);
  fillTriangle(300, 100, 200, 200, 300, 200);
  fillTriangle(0, 200, 100, 200, 100, 300);
  fillTriangle(200, 200, 200, 300, 300, 300);
}

function fillTriangle(x1, y1, x2, y2, x3, y3) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  ctx.fill();
}