import { vec2 } from 'gl-matrix';

export class Obstacle {
  // an "obstacle" is any freeform static object with collision
  // x and y are real in this case
  x: number;
  y: number;
  sprite: HTMLImageElement;
  radius: number;

  constructor(x: number, y: number, sprite: HTMLImageElement, radius: number) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  public collide_circular(other): void {
    const delta_x = other.x - this.x;
    const delta_y = other.y - this.y;
    const distance2 = delta_x ** 2 + delta_y ** 2;

    if (distance2 < (this.radius + other.radius) ** 2) {
      // bonk
      // https://flatredball.com/documentation/tutorials/math/circle-collision/ but in TS
      const tangentVector: vec2 = vec2.fromValues(this.y - other.y, other.x - this.x);
      vec2.normalize(tangentVector, tangentVector);

      const length: number = vec2.dot(other.velocity, tangentVector);

      const tangentVelocity: vec2 = vec2.create();
      vec2.mul(tangentVelocity, tangentVector, [length, length]);

      const tangentPerpendicularVelocity: vec2 = vec2.create();
      vec2.sub(tangentPerpendicularVelocity, other.velocity, tangentVelocity);
      vec2.mul(tangentPerpendicularVelocity, tangentPerpendicularVelocity, [2, 2]);
      vec2.sub(other.velocity, other.velocity, tangentPerpendicularVelocity);
    }
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.sprite, this.x, this.y, this.radius, this.radius);
  }
}
