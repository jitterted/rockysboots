import {Component} from "./Component";
import {ComponentId} from "./ComponentId";
import {WorldDimension} from "./WorldDimension";

export class World {

  private componentMap: Map<string, Component> = new Map();
  private dimension: {
    width: 60,
    height: 40
  };

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

  components(): IterableIterator<Component> {
    return this.componentMap.values();
  }

  getDimension(): WorldDimension {
    return this.dimension;
  }
}