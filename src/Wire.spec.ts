import {Empty} from "./Empty";
import {Wire} from "./Wire";
import {World} from "./World";
import {Component} from "./Component";
import {Player} from "./Player";
import {ComponentId} from "./ComponentId";

test('electricity from input after no cycles is not yet at output', () => {
  const wire = new Wire({id: '21'});
  const player = new Player({id: '32'});
  wire.connect(player);
  expect(wire.output()).toBeFalsy();
});

test('electricity from input after 1 cycle is available at output', () => {
  const wire = new Wire({id: '21'});
  const player = new Player({id: '32'});
  wire.connect(player);

  const oldWorld = new World();
  oldWorld.add(player);
  const newWire = wire.tick(oldWorld);
  expect(newWire.output()).toBeTruthy();
});

test("wire returns new wire instance with updated state based on old world", () => {
  const wire = new Wire({id: '73'});
  const alwaysTrueOutput = new class extends Component {
    tick(oldWorld: World): Component {
      return undefined;
    }

    output() {
      return true;
    }
  }({id: 'ignore'});

  const oldWorld = new class extends World {
    find(id: ComponentId) {
      return alwaysTrueOutput;
    }
  }();
  const nextCycleWire: Component = wire.tick(oldWorld);
  expect(nextCycleWire.output()).toBeTruthy();
})

test('with no player, wire output has no electricity', () => {
  const wire = new Wire({id: 'ignore'});
  const empty = new Empty({id: 'ignore'});
  wire.connect(empty);
  expect(wire.output()).toBeFalsy();
});


