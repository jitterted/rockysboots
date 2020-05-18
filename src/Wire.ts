import {OutputProvider} from "./OutputProvider";

export class Wire implements OutputProvider {
  state: boolean = false;
  input: OutputProvider;

  connect(input: OutputProvider): void {
    this.input = input;
  }

  output(): boolean {
    return this.state;
  }

  tick(): void {
    this.state = this.input.output();
  }
}