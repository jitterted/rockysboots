import {Shape} from "./Shape";
import {CanvasLocation} from "./CanvasLocation";
import {CanvasDimension} from "./CanvasDimension";

export class PlayerShape extends Shape {

  protected innerRender(canvasContext: CanvasRenderingContext2D, location: CanvasLocation, dimension: CanvasDimension) {
    canvasContext.fillStyle = this.getColor();
    canvasContext.fillRect(location.x, location.y, dimension.width, dimension.height);
  }
}