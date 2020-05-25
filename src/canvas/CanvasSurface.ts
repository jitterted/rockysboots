import {CanvasLocation} from "./CanvasLocation";
import {Surface} from "./Surface";

export class CanvasSurface implements Surface {

  private readonly canvasContext: CanvasRenderingContext2D;

  constructor(canvasContext: CanvasRenderingContext2D) {
    this.canvasContext = canvasContext;
  }

  drawLine(locationStart: CanvasLocation, locationEnd: CanvasLocation, color: string) {
    this.canvasContext.beginPath();
    this.canvasContext.strokeStyle = color;
    this.canvasContext.moveTo(locationStart.x, locationStart.y);
    this.canvasContext.lineTo(locationEnd.x, locationEnd.y);
    this.canvasContext.stroke();
  }

}