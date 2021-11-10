class Path3D {
  constructor(ox, oy, oz, c) {
    this.points = [new Point3D(ox, oy, oz)];
    this.vx = 0; this.vy = 0; this.vz = 0;
    this.ax = 0; this.ay = 0; this.az = 0;
    
    this.c = c;
  }
  
  draw(pos, dir) {
    for (let i = 0; i < this.points.length-1; i ++) {
      let p1 = this.points[i].getXYD(pos, dir, this.points[i].p);
      let p2 = this.points[i+1].getXYD(pos, dir, this.points[i+1].p);
      
      this.c.setAlpha(500/p1.z);
      let p = color(red(this.c)/10, green(this.c)/10, blue(this.c)/10, 40);
      
      stroke(p);
      strokeWeight(min(10/p1.z,10));
      line(width/2 + p1.x*width/2, height/2 + p1.y*height/2, width/2 + p2.x*width/2, height/2 + p2.y*height/2);
      
      
      this.c.setAlpha(500/p1.z);
      stroke(this.c);
      strokeWeight(min(2/p1.z,2));
      line(width/2 + p1.x*width/2, height/2 + p1.y*height/2, width/2 + p2.x*width/2, height/2 + p2.y*height/2);
      
      
    }
  }
  
  // update it with acceleration a
  update(a) {
    this.vx += a.x; this.vy += a.y*10; this.vz += a.z*10;
    let p = this.points[this.points.length-1].p.plus(new vec3(this.vx, this.vy, this.vz));
    
    this.points.push(new Point3D(p.x, p.y, p.z));
    
    // cap this.points.length at some value (e.g. 200)
    if (this.points.length > 200) {
      this.points = [this.points.shift()];
      this.vx = 0; this.vy = 0; this.vz = 0;
      this.c = color(noise(frame)*256+random(-10,10), noise(frame+10)*256+random(-10,10), noise(frame+20)*256+random(-10,10));
    }
  }
}