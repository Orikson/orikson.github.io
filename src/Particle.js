class Particle {
  constructor(x, y, c, w) {
    this.x = x; this.y = y;
    this.vx = random(5); this.vy = random(-5,5);
    this.ax = 0; this.ay = 0;
    this.c = c; this.w = w;
    
    this.lx = x; this.ly = y;
    
    this.a = 5;
  }
  
  draw() {
    this.c.setAlpha(this.a);
    stroke(this.c);
    strokeWeight(this.w);
    line(this.x, this.y, this.lx, this.ly);
    
    let mag = sqrt((this.lx-this.x)*(this.lx-this.x)+(this.ly-this.y)*(this.ly-this.y));
    let x3 = this.x + (this.lx-this.x) / mag * this.w;
    let y3 = this.y + (this.ly-this.y) / mag * this.w;
    let x4 = this.lx + (this.x-this.lx) / mag * this.w;
    let y4 = this.ly + (this.y-this.ly) / mag * this.w;
    
    line(x3, y3, x4, y4);
    
    var x5 = this.x + (this.ly-this.y) / mag * this.w/2 + (this.lx-this.x) / mag * this.w;
    var y5 = this.y - (this.lx-this.x) / mag * this.w/2 + (this.ly-this.y) / mag * this.w;
    var x6 = this.x - (this.ly-this.y) / mag * this.w/2 + (this.lx-this.x) / mag * this.w;
    var y6 = this.y + (this.lx-this.x) / mag * this.w/2 + (this.ly-this.y) / mag * this.w;
    var x7 = this.x + (this.ly-this.y) / mag * this.w/2;
    var y7 = this.y - (this.lx-this.x) / mag * this.w/2;
    var x8 = this.x - (this.ly-this.y) / mag * this.w/2;
    var y8 = this.y + (this.lx-this.x) / mag * this.w/2;
    var x9 = this.x + (this.ly-this.y) / mag * this.w/8 + (this.lx-this.x) / mag * this.w/2;
    var y9 = this.y - (this.lx-this.x) / mag * this.w/8 + (this.ly-this.y) / mag * this.w/2;
    var x10 = this.x - (this.ly-this.y) / mag * this.w/8 + (this.lx-this.x) / mag * this.w/2;
    var y10 = this.y + (this.lx-this.x) / mag * this.w/8 + (this.ly-this.y) / mag * this.w/2;
    var x11 = this.x + (this.lx-this.x) / mag * this.w/2;
    var y11 = this.y + (this.ly-this.y) / mag * this.w/2;
    
    noStroke();
    fill(this.c);
    
    beginShape();
    
    curveVertex(x5, y5);
    curveVertex(x5, y5);
    curveVertex(x7, y7);
    curveVertex(x9, y9);
    curveVertex(x11, y11);
    curveVertex(x10, y10);
    curveVertex(x8, y8);
    curveVertex(x6, y6);
    curveVertex(x10, y10);
    curveVertex(x11, y11);
    curveVertex(x9, y9);
    curveVertex(x5, y5);
    curveVertex(x5, y5);
    
    endShape();
  }
  
  // gradient g is a "force" applied to the particle
  // details as an array [ax, ay]
  update(g) {
    this.a += 0.3;
    
    this.ax = g[0];
    this.ay = g[1];
    
    this.vx += this.ax;
    this.vy += this.ay;
    
    if (abs(this.vx) > 30) {
      this.vx -= this.ax;
    }
    if (abs(this.vy) > 30) {
      this.vy -= this.ay;
    }
    
    this.lx = this.x;
    this.ly = this.y;
    
    this.x += this.vx;
    this.y += this.vy;
    
    if (this.x > width || this.x < 0 || this.y > height || this.y < 0) {
      this.draw();
      
      this.x = 0;
      this.y = height/2 + random(-100,100);
      this.lx = this.x;
      this.ly = this.y;
      this.vy = random(-5,5);
      this.a = 5;
    }
  }
}