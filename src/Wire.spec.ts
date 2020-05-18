import {Player} from "./Player";
import {Empty} from "./Empty";
import {Wire} from "./Wire";

test('electricity from input after no cycles is not yet at output', () => {
  const wire = new Wire();
  const player = new Player();
  wire.apply(player);
  expect(wire.output()).toBeFalsy();
});

test('electricity from input after 1 cycle is available at output', () => {
  const wire = new Wire();
  const player = new Player();
  wire.apply(player);
  wire.tick();
  expect(wire.output()).toBeTruthy();
});

test('with no player, wire output has no electricity', () => {
  const wire = new Wire();
  const player = new Empty();
  wire.apply(player);
  expect(wire.output()).toBeFalsy();
});


