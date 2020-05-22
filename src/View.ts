import {World} from "./World";

export interface View {
  render(world: World);
}