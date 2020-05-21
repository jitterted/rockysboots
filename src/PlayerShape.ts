import {Component} from "./Component";
import {worldDimensionToCanvasCoordinates, worldLocationToCanvasCoordinates} from "./Geometry";

export class PlayerShape {
  render(canvasContext: CanvasRenderingContext2D, component: Component) {
    canvasContext.fillStyle = 'orange';
    const worldDimension = {
      width: 2,
      height: 3
    };

    const loc = worldLocationToCanvasCoordinates(component.worldLocation);
    const dimension = worldDimensionToCanvasCoordinates(worldDimension);
    canvasContext.fillRect(loc.x, loc.y, dimension.width, dimension.height);
  }
}