import { DT, EPSILON } from "./constants";

// Keeps the momentum of an object with some friction coefficient
export class Momentum {
  private callback: (x: number) => void;
  private v = 0;
  private x = 0;
  private friction;

  constructor(callback: (x: number) => void, friction?: number) {
    this.callback = callback;
    this.friction = friction ?? 0.99;
  }

  // To be called each animation frame
  update() {
    this.v *= this.friction;
    if (Math.abs(this.v) < EPSILON) {
      this.v = 0;
    }
    this.x += this.v * DT;

    this.callback(this.x);
  }

  // Apply impulse to velocity
  impulse(j: number) {
    this.v += j;
  }
}
