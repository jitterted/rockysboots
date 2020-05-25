import {Component} from "../Component";
import {worldDimensionToCanvasCoordinates, worldLocationToCanvasCoordinates} from "./Geometry";
import {CanvasDimension} from "./CanvasDimension";
import {CanvasLocation} from "./CanvasLocation";
import {Surface} from "./Surface";
import {CanvasSurface} from "./CanvasSurface";

export abstract class Shape {
  private static readonly colorWithElectricity = 'orange';
  private static readonly colorWithoutElectricity = 'white';

  protected component: Component;

  constructor(component: Component) {
    this.component = component;
  }

  render(canvasContext: CanvasRenderingContext2D) {
    const location = worldLocationToCanvasCoordinates(this.component.worldLocation());
    const dimension = worldDimensionToCanvasCoordinates(this.component.worldDimension());
    this.innerRender(new CanvasSurface(canvasContext), location, dimension);
  }

  protected abstract innerRender(surface: Surface,
                                 location: CanvasLocation,
                                 dimension: CanvasDimension);

  protected getColor(): string {
    return this.component.output()
      ? Shape.colorWithElectricity
      : Shape.colorWithoutElectricity;
  }
}