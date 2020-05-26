import {WorldView} from "./canvas/WorldView";
import {Game} from "./Game";
import {CanvasSurface} from "./canvas/CanvasSurface";

const canvas = document.getElementById('world') as HTMLCanvasElement;
if (!canvas) {
  throw new Error("Can't find canvas with ID of 'world'");
}
const surface = new CanvasSurface(canvas);
const worldView = new WorldView(surface);

const game = new Game(worldView);
game.init();

const nextTickButton = document.getElementById('nextTick') as HTMLButtonElement;
nextTickButton.addEventListener('click', () => {
  game.nextGameLoop();
});

document.addEventListener("keydown", event => {
  const code = event.keyCode;
  if (event.isComposing || code === 229) { // see https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event
    return;
  }
  switch (code) {
    case 37: //Left key
      game.moveLeft();
      break;
    case 38: //Up key
      game.moveUp();
      break;
    case 39: //Right key
      game.moveRight();
      break;
    case 40: //Down key
      game.moveDown();
      break;
  }
});