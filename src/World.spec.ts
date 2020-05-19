import {Wire} from "./Wire";
import {World} from "./World";

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
