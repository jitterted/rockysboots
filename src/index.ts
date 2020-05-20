import {World} from "./World";
import {Player} from "./Player";

const canvas = document.getElementById('world') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const world = new World();
const player = new Player({id: '1'});
world.add(player);

function render(canvasContext: CanvasRenderingContext2D, world: World) {
  let components = world.components();
  for (let component of components) {
    canvasContext.fillStyle = 'orange';
    const loc = component.worldLocation;
    const w = 2 * 10; // 2 logical widths
    const h = 3 * 10; // 3 logical height
    canvasContext.fillRect(loc.x, loc.y, w, h);
  }
}

if (ctx) {
  render(ctx, world);
}