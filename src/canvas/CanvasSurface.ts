import {CanvasLocation} from "./CanvasLocation";
import {Surface} from "./Surface";
import {CanvasDimension} from "./CanvasDimension";

export class CanvasSurface implements Surface {
  private readonly canvasContext: CanvasRenderingContext2D;
  private readonly canvasDimension: CanvasDimension;

  constructor(canvas: HTMLCanvasElement) {
    this.canvasContext = canvas.getContext("2d");
    if (!this.canvasContext) {
      throw new Error("Could not get Context2D.");
    }
    this.canvasDimension = {width: canvas.width, height: canvas.height};
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

  public fillRectangle(location: CanvasLocation, dimension: CanvasDimension, color: string): void {
    this.canvasContext.fillStyle = color;
    this.canvasContext.fillRect(location.x, location.y, dimension.width, dimension.height);
  }

  public clear() {
    this.canvasContext.clearRect(0, 0, this.canvasDimension.width, this.canvasDimension.height);
  }

}