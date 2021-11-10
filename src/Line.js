class Line3D {
  constructor(x1, y1, z1, x2, y2, z2) {
    this.p1 = new Point3D(x1, y1, z1);
    this.p2 = new Point3D(x2, y2, z2);
  }
  
  draw(pos, dir) {
    let p1 = this.p1.getXYD(pos, dir, this.p1.p);
    let p2 = this.p2.getXYD(pos, dir, this.p2.p);
    
    stroke(255);
    strokeWeight(2);
    line(width/2 + p1.x*width/2, height/2 + p1.y*height/2, width/2 + p2.x*width/2, height/2 + p2.y*height/2);
  }
}