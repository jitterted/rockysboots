import {OutputProvider} from "./OutputProvider";

export class Wire implements OutputProvider {
  state: boolean = false;

  apply(input: OutputProvider): void {
    this.state = input.output();
  }

  output(): boolean {
    return this.state;
  }
}