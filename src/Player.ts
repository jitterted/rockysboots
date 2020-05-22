import {Component} from "./Component";
import {World} from "./World";
import {ComponentId} from "./ComponentId";
import {WorldLocation} from "./WorldLocation";

export class Player extends Component {

  constructor(id: ComponentId, worldLocation: WorldLocation) {
    super(id, worldLocation);
    super.worldDimension = {
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
    if (this.worldLocation.x == 0)
      return;
    this.worldLocation.x--;
  }

  moveUp() {
    if (this.worldLocation.y == 0)
      return;
    this.worldLocation.y--;
  }

  moveRight() {
    // TODO: check boundary condition
    this.worldLocation.x++;
  }

  moveDown() {
    // TODO: check boundary condition
    this.worldLocation.y++;
  }
}