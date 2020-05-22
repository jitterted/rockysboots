import {Component} from "./Component";
import {World} from "./World";
import {ComponentId} from "./ComponentId";

export class Wire extends Component {
  state: boolean = false;
  inputId: ComponentId;

  constructor(id: ComponentId, inputId?: ComponentId, state?: boolean) {
    super(id);
    this.inputId = inputId;
    this.state = state || false;
  }

  connect(input: Component): void {
    this.inputId = input.id;
  }

  output(): boolean {
    return this.state;
  }

  tick(oldWorld: World): Component {
    let wire = new Wire(this.id, this.inputId, oldWorld.find(this.inputId).output());
    wire.worldLocation = this.worldLocation;
    return wire;
  }
}
