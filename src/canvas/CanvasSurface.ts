import {CanvasLocation} from "./CanvasLocation";
import {Surface} from "./Surface";
import {CanvasDimension} from "./CanvasDimension";

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

  public lineWidth(lineWidth: number) {
    this.canvasContext.lineWidth = lineWidth;
  }

  fillRectangle(location: CanvasLocation, dimension: CanvasDimension, color: string): void {
    this.canvasContext.fillStyle = color;
    this.canvasContext.fillRect(location.x, location.y, dimension.width, dimension.height);
  }

}