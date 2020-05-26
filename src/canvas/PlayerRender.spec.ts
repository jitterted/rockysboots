import {Surface} from "./Surface";
import {CanvasLocation} from "./CanvasLocation";
import {CanvasDimension} from "./CanvasDimension";
import {World} from "../World";
import {Player} from "../Player";
import {WorldView} from "./WorldView";

test('draw player on surface results in surface having filled orange rectangle at a specific location', () => {
  const surface = new SurfaceSpy();

  const world = new World();
  const player = new Player({id: '1'}, {x: 4, y: 10});
  world.add(player);

  const view = new WorldView(surface);

  view.render(world);

  surface.didFillRectangle({x: 4 * 10, y: 10 * 10}, {width: 2 * 10, height: 3 * 10}, 'orange');
});

test('fillRectangle on surface spy returns true for didFillRectangle', () => {
  const surfaceSpy = new SurfaceSpy();

  let location = {x: 10, y: 10};
  let dimension = {width: 20, height: 30};
  surfaceSpy.fillRectangle(location, dimension, 'blue');

  surfaceSpy.didFillRectangle({x: 10, y: 10}, {width: 20, height: 30}, 'blue');

});

class SurfaceSpy implements Surface {
  private lastLocation: CanvasLocation;
  private lastDimension: CanvasDimension;
  private lastColor: string;

  drawLine(locationStart: CanvasLocation, locationEnd: CanvasLocation, color: string): void {
  }

  fillRectangle(location: CanvasLocation, dimension: CanvasDimension, color: string): void {
    this.lastLocation = location;
    this.lastDimension = dimension;
    this.lastColor = color;
  }

  lineWidth(lineWidth: number): void {
  }

  didFillRectangle(location: { x: number; y: number }, dimension: { width: number; height: number }, color: string) {
    expect(this.lastLocation).toEqual(location);
    expect(this.lastDimension).toEqual(dimension);
    expect(this.lastColor).toEqual(color);
  }

  clear(): void {
  }
}