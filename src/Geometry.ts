import {WorldLocation} from "./WorldLocation";
import {WorldDimension} from "./WorldDimension";
import {CanvasLocation} from "./CanvasLocation";
import {CanvasDimension} from "./CanvasDimension";

const worldToCanvasScale = 10;

export function worldLocationToCanvasCoordinates(world: WorldLocation): CanvasLocation {
  return {
    x: world.x * worldToCanvasScale,
    y: world.y * worldToCanvasScale
  };
}

export function worldDimensionToCanvasCoordinates(world: WorldDimension): CanvasDimension {
  return {
    width: world.width * worldToCanvasScale,
    height: world.height * worldToCanvasScale
  };
}