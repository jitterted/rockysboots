import {Wire} from "./Wire";
import {World} from "./World";

test('that component added to world can be found via its ID', () => {
  const world = new World();
  const component = new Wire('23');
  world.add(component);
  expect(world.find(component.id)).toBe(component);
});
