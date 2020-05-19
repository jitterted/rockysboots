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

//   nextWorld() {
  // newWorld = new World()
  // loop for all components in oldworld
  //   newComponent = component.nextCycle(oldWorld)
  ///           return new Wire(oldWorld.find(input.id).output())
  //   newWorld.add(newComponent)

}