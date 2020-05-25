import {Shape} from "./Shape";
import {CanvasLocation} from "./CanvasLocation";
import {CanvasDimension} from "./CanvasDimension";

export class WireShape extends Shape {

  protected innerRender(canvasContext: CanvasRenderingContext2D,
                        location: CanvasLocation,
                        dimension: CanvasDimension,
                        surface: Surface) {

    canvasContext.lineWidth = 5;

    const midpointY = location.y + dimension.height / 2;
    const locationStart = {x: location.x, y: midpointY};
    const locationEnd = {x: location.x + dimension.width, y: midpointY};

    surface.drawLine(locationStart, locationEnd, this.getColor());
  }

}