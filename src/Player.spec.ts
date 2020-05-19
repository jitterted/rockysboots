import {Player} from "./Player";

test('player always has electricity at output = true', () => {
  const player = new Player({id: 'ignore'});
  expect(player.output()).toBeTruthy();
});
