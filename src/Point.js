class Point3D {
  constructor(x, y, z) {
    this.p = new vec3(x, y, z);
    
  }
  
  getXYD(pos, dir, p) {
    // normalize dir
    dir = dir.dividedBy(dir.mag());
    
    // distance
    let d = pos.minus(p).mag();
    
    // direction to point
    let dV = pos.minus(p).dividedBy(d);
    
    // plane origin
    let rO = pos.plus(dir);
    
    // x coordinate basis vector
    let e1 = dir.cross(new vec3(0, 0, 1));
        
    // y coordinate basis vector
    let e2 = dir.cross(e1);
    
    // position from screen origin
    let e3 = p.minus(rO);
    
    // normalize basis vectors
    e1 = e1.dividedBy(e1.mag());
    e2 = e2.dividedBy(e2.mag());
    
    // x and y coordinates on screen
    let x = dot(e3,e1);
    let y = dot(e3,e2);
    
    return new vec3(x, y, d);
  }
  
  // draw is determined by a few things
  // pos -> camera position
  // dir -> camera direction
  // the greater the distance from camera to the point, the smaller that point is
  draw(pos, dir) {
    let p = this.getXYD(pos, dir, this.p);
    let x = p.x;
    let y = p.y;
    let d = p.z;
    
    //stroke(255);
    //strokeWeight(min(20/(d*d*d),100));
    //strokeWeight(5);
    point(width/2 + x*width/2, height/2 + y*height/2)
  }
}