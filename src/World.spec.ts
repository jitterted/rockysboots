import {Wire} from "./Wire";
import {World} from "./World";
import {Player} from "./Player";
import {Empty} from "./Empty";

test('that component added to world can be found via its ID', () => {
  const world = new World();
  const component = new Wire({id: '23'});
  world.add(component);
  expect(world.find(component.id)).toBe(component);
});

test("two instances of componentId with the same string value should only be stored once in the world", () => {
  const world = new World();
  const component1 = new Wire({id: '34'});
  const component2 = new Wire({id: '34'});

  world.add(component1);
  world.add(component2);

  expect(world.find({id: '34'})).toBe(component2);
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
test('2 cycle/tick propagation', () => {
  let world = new World();

  const player = new Player({id: '1'});
  const empty = new Empty({id: '2'});

  const wire1 = new Wire({id: '3'});
  const wire2 = new Wire({id: '4'});

  world.add(player);
  world.add(empty);
  world.add(wire1);
  world.add(wire2);

  wire2.connect(wire1);

  expect(wire1.output()).toBeFalsy();
  expect(wire2.output()).toBeFalsy();

  wire1.connect(player);

  world = world.nextCycle();

  expect(world.find(wire1.id).output()).toBeTruthy();
  expect(world.find(wire2.id).output()).toBeFalsy();

  world = world.nextCycle();

  expect(world.find(wire1.id).output()).toBeTruthy();
  expect(world.find(wire2.id).output()).toBeTruthy();

  world.find(wire1.id).connect(empty);

  world = world.nextCycle();

  expect(world.find(wire1.id).output()).toBeFalsy();
  expect(world.find(wire2.id).output()).toBeTruthy();

  world = world.nextCycle();

  expect(world.find(wire1.id).output()).toBeFalsy();
  expect(world.find(wire2.id).output()).toBeFalsy();
});