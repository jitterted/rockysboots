import {Component} from "./Component";

export class World {

  private componentMap: Map<string, Component> = new Map();

  add(component: Component) {
    this.componentMap.set(component.id, component);
  }

  find(id: string) {
    return this.componentMap.get(id);
  }

//   nextWorld() {
  // newWorld = new World()
  // loop for all components in oldworld
  //   newComponent = component.nextCycle(oldWorld)
  ///           return new Wire(oldWorld.find(input.id).output())
  //   newWorld.add(newComponent)

}