import {World} from "./World";
import {Player} from "./Player";
import {Wire} from "./Wire";
import {PlayerShape} from "./PlayerShape";
import {WireShape} from "./WireShape";

const canvas = document.getElementById('world') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const world = new World();
const player = new Player({id: '1'}, {x: 4, y: 10});
const wire = new Wire({id: '2'});
wire.moveTo({x: 6, y: 10});

world.add(player);
world.add(wire);

function render(canvasContext: CanvasRenderingContext2D, world: World) {
  let components = world.components();
  for (let component of components) {
    if (component instanceof Player) {
      new PlayerShape().render(canvasContext, component);
    } else if (component instanceof Wire) {
      new WireShape().render(canvasContext, component);
    }
  }
}

if (ctx) {
  render(ctx, world);
}