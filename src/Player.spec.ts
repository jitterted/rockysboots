import {Player} from "./Player";

test('player always has electricity at output = true', () => {
  const player = new Player();
  expect(player.output()).toBeTruthy();
});
