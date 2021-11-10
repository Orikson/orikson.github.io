// webgl similar vector classes
class vec2 {
  constructor(x, y) {
    this.x = x; this.y = y;
  }
  
  // operators can be applied to both scalars and other vectors
  times(v) {
    if (typeof(v.x) == 'undefined') {
      return new vec2(this.x*v, this.y*v);
    } else {
      return new vec2(this.x*v.x, this.y*v.y);
    }
  }
  
  plus(v) {
    if (typeof(v.x) == 'undefined') {
      return new vec2(this.x+v, this.y+v);
    } else {
      return new vec2(this.x+v.x, this.y+v.y);
    }
  }
  
  minus(v) {
    if (typeof(v.x) == 'undefined') {
      return new vec2(this.x-v, this.y-v);
    } else {
      return new vec2(this.x-v.x, this.y-v.y);
    }
  }
  
  dividedBy(v) {
    if (typeof(v.x) == 'undefined') {
      return new vec2(this.x/v, this.y/v);
    } else {
      return new vec2(this.x/v.x, this.y/v.y);
    }
  }
  
  
}

class vec3 {
  constructor(x, y, z) {
    this.x = x; this.y = y; this.z = z;
  }
  
  times(v) {
    if (typeof(v.x) == 'undefined') {
      return new vec3(this.x*v, this.y*v, this.z*v);
    } else {
      return new vec3(this.x*v.x, this.y*v.y, this.z*v.z);
    }
  }
  
  plus(v) {
    if (typeof(v.x) == 'undefined') {
      return new vec3(this.x+v, this.y+v, this.z+v);
    } else {
      return new vec3(this.x+v.x, this.y+v.y, this.z+v.z);
    }
  }
  
  minus(v) {
    if (typeof(v.x) == 'undefined') {
      return new vec3(this.x-v, this.y-v, this.z-v);
    } else {
      return new vec3(this.x-v.x, this.y-v.y, this.z-v.z);
    }
  }
  
  dividedBy(v) {
    if (typeof(v.x) == 'undefined') {
      return new vec3(this.x/v, this.y/v, this.z/v);
    } else {
      return new vec3(this.x/v.x, this.y/v.y, this.z/v.z);
    }
  }
  
  mag() {
    return sqrt(this.x*this.x + this.y*this.y + this.z*this.z);
  }
  
  cross(v) {
    return new vec3(
      this.y*v.z-this.z*v.y,
      this.z*v.x-this.x*v.z,
      this.x*v.y-this.y*v.x
    )
  }
}


// dot product of two equally sized vectors
function dot(v1, v2) {
  if (typeof(v1.z) == 'undefined') {
    return v1.x*v2.x + v1.y*v2.y;
  } else {
    return v1.x*v2.x + v1.y*v2.y + v1.z*v2.z;
  }
}