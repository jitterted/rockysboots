import {World} from "../World";
import {Player} from "../Player";
import {PlayerShape} from "./PlayerShape";
import {Wire} from "../Wire";
import {WireShape} from "./WireShape";
import {View} from "../View";
import {Surface} from "./Surface";

export class WorldView implements View {
  private readonly surface: Surface;

  constructor(surface: Surface) {
    this.surface = surface;
  }

  public render(world: World) {
    this.surface.clear();

    let components = world.components();
    for (let component of components) {
      if (component instanceof Player) {
        new PlayerShape(component).render(this.surface);
      } else if (component instanceof Wire) {
        new WireShape(component).render(this.surface);
      }
    }
  }
}