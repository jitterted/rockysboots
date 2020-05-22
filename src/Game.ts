import {View} from "./View";
import {World} from "./World";
import {Player} from "./Player";
import {Wire} from "./Wire";

export class Game {
  private readonly view: View;
  private world: World;

  constructor(view: View) {
    this.view = view;
  }

  init() {
    this.world = new World();
    const player = new Player({id: '1'}, {x: 4, y: 10});
    const wire = new Wire({id: '2'}, player.id);
    wire.moveTo({x: 6, y: 10});

    this.world.add(player);
    this.world.add(wire);

    this.view.render(this.world);
  }


  public nextGameLoop() {
    this.world = this.world.nextCycle();
    this.view.render(this.world);
  }

}