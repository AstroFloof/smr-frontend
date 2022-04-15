import { browser } from '$app/env';
import { assets } from '$app/paths';
import { Tile } from './tile';
import { Wall } from './wall';

export const TILE_SIZE = 100;

function golf_asset_path(name: string): string {
  return assets + '/images/golf/' + name + '.png';
}

function sprite(name: string): HTMLImageElement {
  const img = browser ? new Image() : { src: '' };
  img.src = golf_asset_path(name);
  return <HTMLImageElement>img;
}

export function image_matrix_to_tiles(matrix: HTMLImageElement[][]): Tile[] {
  const height = matrix.length;
  const width = matrix[0].length;
  const tiles = new Array<Tile>(height * width);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const img = matrix[y][x];
      if (img !== null) tiles[y * width + x] = new Tile(x, y, img);
    }
  }
  return tiles;
}

export function image_matrix_to_walls(matrix: [HTMLImageElement, number][][]): Wall[] {
  const height = matrix.length;
  const width = matrix[0].length;
  const walls = new Array<Wall>(height * width);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const item = matrix[y][x];
      if (item[0] !== null) walls[y * width + x] = new Wall(x, y, item[0], item[1]);
    }
  }
  return walls;
}

// all Tile sprites
export const Grass = sprite('Grass');
export const FrictionGrass = sprite('Unmown grass');
export const Foundation1 = sprite('Foundation');
export const Foundation2 = sprite('Concrete Foundation');
export const Sand = sprite('Sand');

// all Wall sprites
export const CWall = sprite('1 wall concrete');
export const CWallCorner = sprite('2 wall concrete');
export const CWallPocket = sprite('3 wall concrete');
export const CWallSquare = sprite('4 wall concrete');
export const CWallCurve = sprite('Curve wall concrete');
export const CWallDiag = sprite('Diagonal wall concrete');

export const MWall = sprite('1 wall');
export const MWallCorner = sprite('2 wall');
export const MWallPocket = sprite('3 wall');
export const MWallSquare = sprite('4 wall');
export const MWallCurve = sprite('Curve wall');
export const MWallDiag = sprite('Diagonal wall');
export const Pillar = sprite('Pillar');

// all Entity sprites
export const GolfBall = sprite('Ball');
export const Bean = sprite('Bean');
