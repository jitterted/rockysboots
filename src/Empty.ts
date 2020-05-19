import {Component} from "./Component";

export class Empty extends Component {
  output(): boolean {
    return false;
  }

  tick() {
    // do nothing
  }
}