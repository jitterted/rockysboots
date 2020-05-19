import {ComponentId} from "./ComponentId";

export abstract class Component {
  id: ComponentId;

  constructor(id: ComponentId) {
    this.id = id;
  }

  abstract output(): boolean;
}