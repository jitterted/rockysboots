import {Player} from "./Player";
import {Empty} from "./Empty";
import {Wire} from "./Wire";

test('electricity from player results in electricity at output', () => {
  const wire = new Wire();
  const player = new Player();
  wire.apply(player);
  expect(wire.output()).toBeTruthy();
});

test('with no player, wire output has no electricity', () => {
  const wire = new Wire();
  const player = new Empty();
  wire.apply(player);
  expect(wire.output()).toBeFalsy();
});


