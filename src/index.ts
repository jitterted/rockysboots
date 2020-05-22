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
