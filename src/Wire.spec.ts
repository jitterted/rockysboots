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


/*

 Tick tells the wire: take state from INPUT and make available via OUTPUT

 Tick: 0
 F-----F F<-----T [P]

 Tick: 1
 F-----T T<-----T [P]

 Tick: 2
 T-----T T<-----T [P]

 Tick: 3 - apply "empty"
 T<----T T<-----F [E]

 Tick: 4
 T<-----F F<-----F [E]

 Tick: 5
 F<----F F<-----F [E]

*/
// test('2 cycle/tick propagation', () => {
//   const player = new Player();
//   const empty = new Empty();
//   const wire1 = new Wire();
//   const wire2 = new Wire();
//
//   wire2.connect(wire1);
//
//   expect(wire1.output()).toBeFalsy();
//   expect(wire2.output()).toBeFalsy();
//
//   wire1.connect(player);
//
//   tickAll(player, empty, wire1, wire2);
//
//   expect(wire1.output()).toBeTruthy();
//   expect(wire2.output()).toBeFalsy();
//
//   tickAll(player, empty, wire1, wire2);
//
//   expect(wire1.output()).toBeTruthy();
//   expect(wire2.output()).toBeTruthy();
//
//   wire1.connect(empty);
//
//   tickAll(player, empty, wire1, wire2);
//
//   expect(wire1.output()).toBeFalsy();
//   expect(wire2.output()).toBeTruthy();
//
//   tickAll(player, empty, wire1, wire2);
//
//   expect(wire1.output()).toBeFalsy();
//   expect(wire2.output()).toBeFalsy();
// });

test("wire returns new wire instance with updated state based on old world", () => {
  const wire = new Wire({id: '73'});
  const alwaysTrueOutput = new class extends Component {
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


