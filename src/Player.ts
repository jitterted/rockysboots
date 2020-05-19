import {Component} from "./Component";
import {World} from "./World";

export class Player extends Component {
  output(): boolean {
    return true;
  }

  tick(oldWorld: World): Component {
    return this;
  }
}