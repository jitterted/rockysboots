import {Wire} from "./Wire";
import {worldDimensionToCanvasCoordinates, worldLocationToCanvasCoordinates} from "./Geometry";

export class WireShape {
  render(canvasContext: CanvasRenderingContext2D, component: Wire) {
    const worldDimension = {
      width: 2,
      height: 2
    };

    const loc = worldLocationToCanvasCoordinates(component.worldLocation);
    const dimension = worldDimensionToCanvasCoordinates(worldDimension);

    canvasContext.beginPath();
    canvasContext.strokeStyle = 'white';
    canvasContext.lineWidth = 2;
    canvasContext.moveTo(loc.x, loc.y + dimension.height / 2)
    canvasContext.lineTo(loc.x + dimension.width, loc.y + dimension.height / 2)
    canvasContext.stroke();
  }
}