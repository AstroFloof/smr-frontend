import type { Entity } from '$lib/golf/entity';
import { Vec2 } from 'vec2';

export class Obstacle {
  // an "obstacle" is any freeform static object with collision
  // x and y are real in this case
  x: number;
  y: number;
  radius?: number;

  constructor(x: number, y: number, radius?: number) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  public collide_circular(other: Entity): void {
    const delta_x = other.x - this.x;
    const delta_y = other.y - this.y;
    const distance2 = delta_x ** 2 + delta_y ** 2;
    if (distance2 < (this.radius + other.radius) ** 2) {
      // bonk
      // https://flatredball.com/documentation/tutorials/math/circle-collision/ but in TS
      const tangentVector: Vec2 = new Vec2(this.y - other.y, other.x - this.x).Normalized();
      const length: number = other.velocity.Dot(tangentVector);
      const tangentVelocity: Vec2 = tangentVector.Mul(length);
      const tangentPerpendicularVelocity: Vec2 = other.velocity.Sub(tangentVelocity);

      other.velocity = other.velocity.Sub(tangentPerpendicularVelocity.Mul(2));
    }
  }
}
