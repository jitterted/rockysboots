import {Shape} from "./Shape";
import {CanvasLocation} from "./CanvasLocation";
import {CanvasDimension} from "./CanvasDimension";

export class WireShape extends Shape {

  protected innerRender(canvasContext: CanvasRenderingContext2D, location: CanvasLocation, dimension: CanvasDimension) {
    canvasContext.beginPath();

    canvasContext.strokeStyle = this.getColor();
    canvasContext.lineWidth = 5;

    const midpointY = location.y + dimension.height / 2;
    canvasContext.moveTo(location.x, midpointY);
    canvasContext.lineTo(location.x + dimension.width, midpointY);

    canvasContext.stroke();
  }
}