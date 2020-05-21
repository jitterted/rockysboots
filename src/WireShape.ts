import {Wire} from "./Wire";
import {worldDimensionToCanvasCoordinates, worldLocationToCanvasCoordinates} from "./Geometry";
import {WorldDimension} from "./WorldDimension";

export class WireShape {
  private color = 'white';

  private worldDimension: WorldDimension = {
    width: 2,
    height: 2
  };

  render(canvasContext: CanvasRenderingContext2D, component: Wire) {
    const location = worldLocationToCanvasCoordinates(component.worldLocation);
    const dimension = worldDimensionToCanvasCoordinates(this.worldDimension);

    canvasContext.beginPath();
    canvasContext.strokeStyle = this.color;
    canvasContext.lineWidth = 2;

    const midpointY = location.y + dimension.height / 2;
    canvasContext.moveTo(location.x, midpointY)
    canvasContext.lineTo(location.x + dimension.width, midpointY)

    canvasContext.stroke();
  }
}