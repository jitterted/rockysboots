export abstract class Component {
  id: string;

  constructor(id: string) {
    this.id = id;
  }

  abstract output(): boolean;
}