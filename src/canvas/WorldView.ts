import {World} from "../World";
import {Player} from "../Player";
import {PlayerShape} from "./PlayerShape";
import {Wire} from "../Wire";
import {WireShape} from "./WireShape";
import {View} from "../View";

export class WorldView implements View {
  private readonly canvas: HTMLCanvasElement;
  private readonly ctx: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');

    if (!this.ctx) {
      throw new Error("Could not get Context2D");
    }
  }

  public render(world: World) {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    let components = world.components();
    for (let component of components) {
      if (component instanceof Player) {
        new PlayerShape(component).render(this.ctx);
      } else if (component instanceof Wire) {
        new WireShape(component).render(this.ctx);
      }
    }
  }
}