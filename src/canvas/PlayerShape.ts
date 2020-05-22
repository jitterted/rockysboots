import {WorldDimension} from "../WorldDimension";
import {worldDimensionToCanvasCoordinates, worldLocationToCanvasCoordinates} from "./Geometry";
import {Shape} from "./Shape";

export class PlayerShape extends Shape {
  private worldDimension: WorldDimension = {
    width: 2,
    height: 3
  };

  render(canvasContext: CanvasRenderingContext2D) {
    const location = worldLocationToCanvasCoordinates(this.component.worldLocation);
    const dimension = worldDimensionToCanvasCoordinates(this.worldDimension);

    canvasContext.fillStyle = this.getColor();
    canvasContext.fillRect(location.x, location.y, dimension.width, dimension.height);
  }
}