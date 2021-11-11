// list holding particles
var points;

// number of particles
var nP = 20;

// camera position/direction declarations
var cPos;
var cDir;

// number of cells in each direction
var gradN = 25;

// size of gradient field
var dim = new vec3(2, 2, 2);
dim = dim.dividedBy(gradN);

// list holding gradient information
var gradients = [];

// pi
var PI = 3.14159265359;

// any string
var SEED = "Eron Ristich!";

// function to convert seed string into a unique integer hash (for purposes of noiseSeed)
String.prototype.hashCode = function() {
  var hash = 0, chr;
  if (this.length === 0) return hash;
  for (let i = 0; i < this.length; i++) {
    chr   = this.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

// non negative modulus operator
Number.prototype.mod = function(n) {
  return ((this % n) + n) % n;
};

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');

  cnv.parent('backgroundCanvas');

  background(0);
  
  noiseSeed(SEED.hashCode());
  
  points = [];
  
  for (let i = 0; i < gradN; i ++) {
    gradients.push([]);
    for (let j = 0; j < gradN; j ++) {
      gradients[i].push([]);
      for (let k = 0; k < gradN; k ++) {
        // gradient is sum of direction to nearby cells * noise value at cell
        // for marginal monodirectionality, nearby cells aligned in the x direction will have the absolute value taken
        let vxup   = (new vec3(1,0,0)).times(dim);
        let vxdown = (new vec3(-1,0,0)).times(dim);
        let vyup   = (new vec3(0,1,0)).times(dim);
        let vydown = (new vec3(0,-1,0)).times(dim);
        let vzup   = (new vec3(0,0,1)).times(dim);
        let vzdown = (new vec3(0,0,-1)).times(dim);
        
        let xup   = vxup.plus(new vec3(i+2, j+2, k+2));
        let xdown = vxdown.plus(new vec3(i+2, j+2, k+2));
        let yup   = vyup.plus(new vec3(i+2, j+2, k+2));
        let ydown = vydown.plus(new vec3(i+2, j+2, k+2));
        let zup   = vzup.plus(new vec3(i+2, j+2, k+2));
        let zdown = vzdown.plus(new vec3(i+2, j+2, k+2));
        
        let nxup   = abs(noise(xup.x, xup.y, xup.z)*2-1);
        let nxdown = abs(noise(xdown.x, xdown.y, xdown.z)*2-1);
        let nyup   = noise(yup.x, yup.y, yup.z)*2-1;
        let nydown = noise(ydown.x, ydown.y, ydown.z)*2-1;
        let nzup   = noise(zup.x, zup.y, zup.z)*2-1;
        let nzdown = noise(zdown.x, zdown.y, zdown.z)*2-1;
        
        let xu = vxup.times(nxup/10);
        let xd = vxdown.times(nxdown*10);
        let yu = vyup.times(nyup*10);
        let yd = vydown.times(nydown*1);
        let zu = vzup.times(nzup*10);
        let zd = vzdown.times(nzdown*10);
        gradients[i][j].push(xu.plus(xd).plus(yu).plus(yd).plus(zu).plus(zd));
      }
    }
  }
  
  for (let i = 0; i < nP; i ++) {
    let c = color(0, 100+random(-10,10), 100+random(-10,10));
    
    points.push(new Path3D(random(0.01), random(0.01), random(0.01), c));
  }
  
  cPos = new vec3(1, 1, 1);
  cDir = cPos.times(-1);
}

function windowResized() {
    frameCount = 0;
    
    resizeCanvas(windowWidth, windowHeight);
    
    background(0);
    generate();
}

var frame = 0;

// mouse functions/global variables
var mouseDown = false;
var first = true;
var lmX; var lmY;

function mousePressed() {
  mouseDown = true;
}

function mouseReleased() {
  mouseDown = false;
}

// camera global variables
// camera rotation (x, y)
var cxr = 0; var lcxr = 0;
var cyr = 1.687; var lcyr = 1.687;

// distance from origin
var cD = 5;

// accepts vec3 position
// rounds coordinates to the corresponding index in gradient
function roundCoordinate(p) {
  let x = Math.floor(p.x/dim.x).mod(gradN);
  let y = Math.floor(p.y/dim.y).mod(gradN);
  let z = Math.floor(p.z/dim.z).mod(gradN);
  
  return new vec3(x,y,z);
}


function draw() {
  frame += 1;
  
  background(0, 0, 0);
  
  // mouse drag to move camera
  if (mouseDown && 1==0) {
    if (first) {
      lmX = mouseX; lmY = mouseY;
      first = false;
    }
    
    if (mouseX != lmX) {
      cxr = lcxr - (mouseX-lmX)/width*PI;
    }
    if (mouseY != lmY) {
      cyr = lcyr - (mouseY-lmY)/height*PI/2;
    }
  } else {
    if (!first) {
      first = true;
      lcxr = cxr;
      lcyr = cyr;
    }
    
    cxr = sin(frame/300)/8-2;
    cyr = 1.686; var lcyr = 1.686;
  }

  //cPos = new vec3(cos(frame), sin(frame), 1);
  cPos = new vec3(cos(cxr)*sin(cyr), sin(cxr)*sin(cyr), cos(cyr));
  cPos = cPos.times(cD);
  cDir = cPos.times(-1);
  
  for (let i = 0; i < points.length; i ++) {
    stroke(255);
    points[i].draw(cPos, cDir);
    let ci = roundCoordinate(points[i].points[points[i].points.length-1].p);
    
    let gradF = gradients[ci.x][ci.y][ci.z].dividedBy(1000);
    
    points[i].update(gradF);
  }
  
  //for (let i = 0; i < 10; i ++) {
  //  for (let j = 0; j < 10; j ++) {
  //    fill(256*noise(i/3,j/3, frame/100));
  //    rect(i*width/10, j*height/10, width/10, height/10);
  //  }
  //}
  
}