import {Component} from "./Component";
import {World} from "./World";
import {ComponentId} from "./ComponentId";
import {WorldLocation} from "./WorldLocation";

export class Player extends Component {

  constructor(id: ComponentId, worldLocation?: WorldLocation) {
    super(id, worldLocation);
    super.myWorldDimension = {
      width: 2,
      height: 3
    };
  }

  output(): boolean {
    return true;
  }

  tick(oldWorld: World): Component {
    return this;
  }

  moveLeft() {
    if (this.myWorldLocation.x == 0)
      return;
    this.myWorldLocation.x--;
  }

  moveUp() {
    if (this.myWorldLocation.y == 0)
      return;
    this.myWorldLocation.y--;
  }

  moveRight() {
    // TODO: check boundary condition
    this.myWorldLocation.x++;
  }

  moveDown() {
    // TODO: check boundary condition
    this.myWorldLocation.y++;
  }
}