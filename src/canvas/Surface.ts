import {CanvasLocation} from "./CanvasLocation";
import {CanvasDimension} from "./CanvasDimension";

export interface Surface {
  drawLine(locationStart: CanvasLocation, locationEnd: CanvasLocation, color: string): void;

  lineWidth(lineWidth: number): void;

  fillRectangle(location: CanvasLocation, dimension: CanvasDimension, color: string): void;
}