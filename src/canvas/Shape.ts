import {Component} from "../Component";

export class Shape {
  private static readonly colorWithElectricity = 'orange';
  private static readonly colorWithoutElectricity = 'white';

  protected component: Component;

  constructor(component: Component) {
    this.component = component;
  }

  protected getColor(): string {
    return this.component.output()
      ? Shape.colorWithElectricity
      : Shape.colorWithoutElectricity;
  }
}