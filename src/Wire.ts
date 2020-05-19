import {Component} from "./Component";
import {World} from "./World";

export class Wire extends Component {
  state: boolean = false;
  inputId: string;

  constructor(id: string, inputId?: string, state?: boolean) {
    super(id);
    this.inputId = inputId;
    this.state = state || false;
  }

  connect(inputId: string): void {
    this.inputId = inputId;
  }

  output(): boolean {
    return this.state;
  }

  tick(oldWorld: World): Component {
    return new Wire(this.id, this.inputId, oldWorld.find(this.inputId).output());
  }
}
