class Particle {
  constructor(x, y, c, w) {
    this.x = x; this.y = y;
    this.vx = 0; this.vy = 0;
    this.ax = 0; this.ay = 0;
    this.c = c; this.w = w;
    
    this.lx = x; this.ly = y;
  }
  
  draw() {
    stroke(this.c);
    strokeWeight(this.w);
    line(this.x, this.y, this.lx, this.ly);
  }
  
  // gradient g is a "force" applied to the particle
  // details as an array [ax, ay]
  update(g) {
    this.ax = g[0];
    this.ay = g[1];
    
    this.vx += this.ax;
    this.vy += this.ay;
    
    if (abs(this.vx) > 10) {
      this.vx -= this.ax;
    }
    if (abs(this.vy) > 10) {
      this.vy -= this.ay;
    }
    
    this.lx = this.x;
    this.ly = this.y;
    
    this.x += this.vx;
    this.y += this.vy;
  }
}