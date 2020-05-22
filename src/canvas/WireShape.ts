import {WorldDimension} from "../WorldDimension";
import {worldDimensionToCanvasCoordinates, worldLocationToCanvasCoordinates} from "./Geometry";
import {Shape} from "./Shape";

export class WireShape extends Shape {

  private worldDimension: WorldDimension = {
    width: 3,
    height: 2
  };

  render(canvasContext: CanvasRenderingContext2D) {
    const location = worldLocationToCanvasCoordinates(this.component.worldLocation);
    const dimension = worldDimensionToCanvasCoordinates(this.worldDimension);

    canvasContext.beginPath();

    canvasContext.strokeStyle = this.getColor();
    canvasContext.lineWidth = 5;

    const midpointY = location.y + dimension.height / 2;
    canvasContext.moveTo(location.x, midpointY);
    canvasContext.lineTo(location.x + dimension.width, midpointY);

    canvasContext.stroke();
  }
}