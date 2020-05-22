import {Component} from "./Component";
import {World} from "./World";

export class Player extends Component {
  output(): boolean {
    return true;
  }

  tick(oldWorld: World): Component {
    return this;
  }

  moveLeft() {
    this.worldLocation.x--;
  }

  moveUp() {
    this.worldLocation.y--;
  }

  moveRight() {
    this.worldLocation.x++;
  }

  moveDown() {
    this.worldLocation.y++;
  }
}