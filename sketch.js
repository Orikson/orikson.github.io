// ---- Global constants ----
var PI = 3.14159265359;

// dimension of gradients to calculate
var n = 80;

// number of particles
var nP = 50;

// particles list
var particles;

// precalculated gradients
var gradients;

// random seed (any string)
var SEED = "Eron Ristich!";

function setup() {
  createCanvas(2000, 800);
  background(0);

  particles = [];
  for (let i = 0; i < nP; i++) {
    let rng = random();
    
    particles.push(
      new Particle(
        0,
        height/2 + random(-100,100),
        color(0, 255*(rng+random(-0.1,0.1)), 255*rng,10), //random(255), random(255), random(255), 10),
        2
      )
    );
  }

  gradients = [];
  for (let i = 0; i < n; i++) {
    gradients.push([]);
    for (let j = 0; j < n; j++) {
      gradients[gradients.length - 1].push(
        perlinNoise(new vec2(i / n, j / n).times(8))
      );
    }
  }
}

// rounds coordinate to nearest calculated gradient (accepts vec2, returns vec2)
function roundCoord(v) {
  return new vec2(floor((v.x / width) * n), floor((v.y / height) * n));
}

function draw() {
  //background(255);

  for (let i = 0; i < nP; i++) {
    particles[i].draw();

    let rPos = roundCoord(new vec2(particles[i].x, particles[i].y));
    let r = gradients[rPos.x][rPos.y];

    particles[i].update([cos(2 * PI * r), sin(2 * PI * r)]);
  }
  
  /*
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      //stroke(0, 0, 0);//, 256*abs(perlinNoise(new vec2(i / n, j / n))));
      //strokeWeight(10 * gradients[i][j]);
      noStroke();
      fill(0, 0, 0, 256*abs(gradients[i][j]));
      rect(i * width / n, j * height / n, width / n, height / n);
      stroke(0);
      strokeWeight(2);
      let vx = 10*cos(gradients[i][j] * 4 * PI);
      let vy = 10*sin(gradients[i][j] * 4 * PI);
      line(width / n * (i + 0.5), height / n * (j + 0.5), width / n * (i + 0.5) + vx, height / n * (j + 0.5) + vy);
    }
  }
  */
}
