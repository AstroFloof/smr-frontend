import { Vec2 } from 'vec2';

export class Entity {
  radius = 50;
  frictionFactor = 0.01;

  public x: number;
  public y: number;
  public velocity: Vec2;

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.velocity = Vec2.Zero();
  }
  applyFriction(forceOfFriction: number): void {
    this.velocity = this.velocity.Mul(forceOfFriction);
  }
}
