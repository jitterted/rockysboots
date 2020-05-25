import {CanvasLocation} from "./CanvasLocation";

export interface Surface {
  drawLine(locationStart: CanvasLocation, locationEnd: CanvasLocation, color: string): void;
}