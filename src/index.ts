import {World} from "./World";
import {Player} from "./Player";
import {Component} from "./Component";
import {worldDimensionToCanvasCoordinates, worldLocationToCanvasCoordinates} from "./Geometry";

const canvas = document.getElementById('world') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const world = new World();
const player = new Player({id: '1'}, {x: 4, y: 10});
world.add(player);

function renderPlayer(canvasContext: CanvasRenderingContext2D, component: Component) {
  canvasContext.fillStyle = 'orange';
  const worldDimension = {
    width: 2,
    height: 3
  };

  const loc = worldLocationToCanvasCoordinates(component.worldLocation);
  const dimension = worldDimensionToCanvasCoordinates(worldDimension);
  canvasContext.fillRect(loc.x, loc.y, dimension.width, dimension.height);
}

function render(canvasContext: CanvasRenderingContext2D, world: World) {
  let components = world.components();
  for (let component of components) {
    renderPlayer(canvasContext, component);
  }
}

if (ctx) {
  render(ctx, world);
}