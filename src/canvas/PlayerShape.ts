import {Shape} from "./Shape";
import {CanvasLocation} from "./CanvasLocation";
import {CanvasDimension} from "./CanvasDimension";
import {Surface} from "./Surface";

export class PlayerShape extends Shape {

  protected innerRender(surface: Surface, location: CanvasLocation, dimension: CanvasDimension) {
    surface.fillRectangle(location, dimension, this.getColor());
  }
}