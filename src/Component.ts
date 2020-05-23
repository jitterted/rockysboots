import {ComponentId} from "./ComponentId";
import {World} from "./World";
import {WorldLocation} from "./WorldLocation";
import {WorldDimension} from "./WorldDimension";

export abstract class Component {
  id: ComponentId;
  protected myWorldLocation: WorldLocation;
  protected myWorldDimension: WorldDimension;

  constructor(id: ComponentId, worldLocation?: WorldLocation) {
    this.id = id;
    this.myWorldLocation = worldLocation || {x: 0, y: 0};
  }

  abstract output(): boolean;

  abstract tick(oldWorld: World): Component;

  connect(component: Component) {
    // do nothing
  }

  worldLocation(): WorldLocation {
    return this.myWorldLocation;
  }

  moveTo(worldLocation: WorldLocation) {
    this.myWorldLocation = worldLocation;
  }

  worldDimension() {
    return this.myWorldDimension;
  }
}