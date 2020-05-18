class Player implements OutputProvider {
  output(): boolean {
    return true;
  }
}

class Wire implements OutputProvider {
  state: boolean = false;

  apply(input: OutputProvider): void {
    this.state = input.output();
  }

  output(): boolean {
    return this.state;
  }
}

class Empty implements OutputProvider {
  output(): boolean {
    return false;
  }
}

interface OutputProvider {
  output(): boolean;
}

test('player always has electricity at output = true', () => {
  const player = new Player();
  expect(player.output()).toBeTruthy();
});

test('electricity from player results in electricity at output', () => {
  const wire = new Wire();
  const player = new Player();
  wire.apply(player)
  expect(wire.output()).toBeTruthy();
});

test('with no player, wire output has no electricity', () => {
  const wire = new Wire();
  const player = new Empty();
  wire.apply(player);
  expect(wire.output()).toBeFalsy();
});


