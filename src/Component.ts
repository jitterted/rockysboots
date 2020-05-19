import {ComponentId} from "./ComponentId";
import {World} from "./World";

export abstract class Component {
  id: ComponentId;

  constructor(id: ComponentId) {
    this.id = id;
  }

  abstract output(): boolean;

  abstract tick(oldWorld: World): Component;

  connect(component: Component) {
    // do nothing
  }
}