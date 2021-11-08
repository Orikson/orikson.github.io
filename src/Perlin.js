// ---- Perlin Noise ----
// Smoothstep (accepts and returns vec2)
function fade(t) {
  // equivalent to t*t*t*(t*(t*6.0-15.0)+10.0)
  return t.times(t).times(t).times(t.times(t.times(6.0).minus(15.0)).plus(10.0));
}

// Random gradient (accepts and returns vec2)
function grad(p) {
  var rng = new Math.seedrandom(p.x.toString() + p.y.toString());
  // Scale rotation between 0 and 2 pi (given a random value between 0 and 1)
  let a = rng()*2.0*PI;
  return new vec2(sin(a),cos(a));
}

// Perlin noise (accepts vec2, returns float)
function perlinNoise(uv) {
  p0 = new vec2(floor(uv.x), floor(uv.y));
  p1 = p0.plus(new vec2(1, 0));
  p2 = p0.plus(new vec2(0, 1));
  p3 = p0.plus(1);
  
  t = fade(uv.minus(p0));
    
  g0 = grad(p0);
  g1 = grad(p1);
  g2 = grad(p2);
  g3 = grad(p3);
    
  p0p1 = (1 - t.x) * dot(g0, uv.minus(p0)) + t.x * dot(g1, uv.minus(p1)); 
  p2p3 = (1 - t.x) * dot(g2, uv.minus(p2)) + t.x * dot(g3, uv.minus(p3)); 
  	  
  return (1 - t.y) * p0p1 + t.y * p2p3;
}