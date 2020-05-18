import {OutputProvider} from "./OutputProvider";

export class Empty implements OutputProvider {
  output(): boolean {
    return false;
  }

  tick() {
    // do nothing
  }
}