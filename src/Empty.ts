import {Component} from "./Component";
import {World} from "./World";

export class Empty extends Component {
  output(): boolean {
    return false;
  }

  tick(oldWorld: World): Component {
    return this;
  }
}