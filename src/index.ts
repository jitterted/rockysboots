import {WorldView} from "./canvas/WorldView";
import {Game} from "./Game";

const canvas = document.getElementById('world') as HTMLCanvasElement;
const worldView = new WorldView(canvas);

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