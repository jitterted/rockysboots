import {World} from "./World";
import {Player} from "./Player";
import {Wire} from "./Wire";
import {PlayerShape} from "./canvas/PlayerShape";
import {WireShape} from "./canvas/WireShape";

const canvas = document.getElementById('world') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

var world = new World();
const player = new Player({id: '1'}, {x: 4, y: 10});
const wire = new Wire({id: '2'}, player.id);
wire.moveTo({x: 6, y: 10});

world.add(player);
world.add(wire);

const nextTickButton = document.getElementById('nextTick') as HTMLButtonElement;
nextTickButton.addEventListener('click', () => {
  world = world.nextCycle();
  render(ctx, world);
});

function render(canvasContext: CanvasRenderingContext2D, world: World) {
  canvasContext.clearRect(0, 0, 600, 400);
  let components = world.components();
  for (let component of components) {
    if (component instanceof Player) {
      new PlayerShape(component).render(canvasContext);
    } else if (component instanceof Wire) {
      new WireShape(component).render(canvasContext);
    }
  }
}

if (ctx) {
  render(ctx, world);
}