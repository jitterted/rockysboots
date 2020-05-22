import {ComponentId} from "./ComponentId";
import {World} from "./World";
import {WorldLocation} from "./WorldLocation";
import {WorldDimension} from "./WorldDimension";

export abstract class Component {
  id: ComponentId;
  worldLocation: WorldLocation;
  worldDimension: WorldDimension;

  constructor(id: ComponentId, worldLocation?: WorldLocation) {
    this.id = id;
    this.worldLocation = worldLocation || {x: 0, y: 0};
  }

  abstract output(): boolean;

  abstract tick(oldWorld: World): Component;

  connect(component: Component) {
    // do nothing
  }

  getWorldLocation(): WorldLocation {
    return this.worldLocation;
  }

  moveTo(worldLocation: WorldLocation) {
    this.worldLocation = worldLocation;
  }
}