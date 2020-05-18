import {OutputProvider} from "./OutputProvider";

export class Player implements OutputProvider {
  output(): boolean {
    return true;
  }

  tick() {

  }
}