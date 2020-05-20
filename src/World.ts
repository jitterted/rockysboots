import {Component} from "./Component";
import {ComponentId} from "./ComponentId";

export class World {

  private componentMap: Map<string, Component> = new Map();

  add(component: Component) {
    this.componentMap.set(component.id.id, component);
  }

  find(id: ComponentId) {
    return this.componentMap.get(id.id);
  }

  nextCycle(): World {
    const newWorld = new World();

    this.componentMap.forEach((value: Component) => {
      newWorld.add(value.tick(this));
    })

    return newWorld;
  }

  components() {
    return this.componentMap.values();
  }
}