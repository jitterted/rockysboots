import {World} from "./World";
import {Player} from "./Player";
import {Wire} from "./Wire";
import {WorldView} from "./canvas/WorldView";

const canvas = document.getElementById('world') as HTMLCanvasElement;

function createWorld() {
  const world = new World();
  const player = new Player({id: '1'}, {x: 4, y: 10});
  const wire = new Wire({id: '2'}, player.id);
  wire.moveTo({x: 6, y: 10});

  world.add(player);
  world.add(wire);
  return world;
}

var world = createWorld();

const nextTickButton = document.getElementById('nextTick') as HTMLButtonElement;
nextTickButton.addEventListener('click', () => {
  world = world.nextCycle();
  worldView.render(world);
});

const worldView = new WorldView(canvas);
worldView.render(world);