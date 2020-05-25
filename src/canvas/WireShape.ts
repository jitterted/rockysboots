import {Shape} from "./Shape";
import {CanvasLocation} from "./CanvasLocation";
import {CanvasDimension} from "./CanvasDimension";
import {Surface} from "./Surface";

export class WireShape extends Shape {

  protected innerRender(surface: Surface,
                        location: CanvasLocation,
                        dimension: CanvasDimension) {

    const lineWidth = 5; // 5 seemed like thick enough? final value TBD
    surface.lineWidth(lineWidth);

    const midpointY = location.y + dimension.height / 2;
    const locationStart = {x: location.x, y: midpointY};
    const locationEnd = {x: location.x + dimension.width, y: midpointY};

    surface.drawLine(locationStart, locationEnd, this.getColor());
  }
}