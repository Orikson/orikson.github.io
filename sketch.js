// ---- Global constants ----
var PI = 3.14159265359;

// dimension of gradients to calculate
var n = 20;

// particles
var p1;

// precalculated gradients
var gradients;

function setup() {
  createCanvas(600, 600);
  background(255);
  p1 = new Particle(200, 200, color(255, 0, 0), 3);
  
  gradients = [];
  for (let i = 0; i < n; i++) {
    gradients.push([]);
    for (let j = 0; j < n; j++) {
      gradients[gradients.length-1].push(perlinNoise((new vec2(i / n, j / n)).times(2)));
    }
  }
}

// rounds coordinate to nearest calculated gradient (accepts vec2, returns vec2)
function roundCoord(v) {
  return new vec2(floor((v.x / width) * n), floor((v.y / height) * n));
}

function draw() {
  background(255);
  p1.draw();

  let rPos = new vec2(mouseX / width, mouseY / height);
  //console.log(perlinNoise(rPos));
  //console.log(rPos.x + " " + rPos.y);
  //p1.update([0.1,0.1]);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      //stroke(0, 0, 0);//, 256*abs(perlinNoise(new vec2(i / n, j / n))));
      //strokeWeight(10 * gradients[i][j]);
      noStroke();
      fill(0, 0, 0, 256*abs(gradients[i][j]));
      rect(i * width / n, j * height / n, width / n, height / n);
      stroke(0);
      strokeWeight(2);
      let vx = 10*cos(gradients[i][j] * 2 * PI);
      let vy = 10*sin(gradients[i][j] * 2 * PI);
      line(width / n * (i + 0.5), height / n * (j + 0.5), width / n * (i + 0.5) + vx, height / n * (j + 0.5) + vy);
    }
  }
}
