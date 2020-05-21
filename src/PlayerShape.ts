import {Component} from "./Component";
import {worldDimensionToCanvasCoordinates, worldLocationToCanvasCoordinates} from "./Geometry";
import {WorldDimension} from "./WorldDimension";

export class PlayerShape {
  private color = 'orange';

  private worldDimension: WorldDimension = {
    width: 2,
    height: 3
  };

  render(canvasContext: CanvasRenderingContext2D, component: Component) {
    const location = worldLocationToCanvasCoordinates(component.worldLocation);
    const dimension = worldDimensionToCanvasCoordinates(this.worldDimension);

    canvasContext.fillStyle = this.color;
    canvasContext.fillRect(location.x, location.y, dimension.width, dimension.height);
  }
}