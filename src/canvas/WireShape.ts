import {WorldDimension} from "../WorldDimension";
import {Wire} from "../Wire";
import {worldDimensionToCanvasCoordinates, worldLocationToCanvasCoordinates} from "./Geometry";

export class WireShape {
  private colorWithElectricity = 'white';
  private colorWithoutElectricity = 'orange';

  private worldDimension: WorldDimension = {
    width: 3,
    height: 2
  };

  render(canvasContext: CanvasRenderingContext2D, component: Wire) {
    const location = worldLocationToCanvasCoordinates(component.worldLocation);
    const dimension = worldDimensionToCanvasCoordinates(this.worldDimension);

    canvasContext.beginPath();
    if (component.output()) {
      canvasContext.strokeStyle = this.colorWithElectricity;
    } else {
      canvasContext.strokeStyle = this.colorWithoutElectricity;
    }
    canvasContext.lineWidth = 5;

    const midpointY = location.y + dimension.height / 2;
    canvasContext.moveTo(location.x, midpointY);
    canvasContext.lineTo(location.x + dimension.width, midpointY);

    canvasContext.stroke();
  }
}