import Team from '../team';

test('test team add', () => {
    const team = new Team();
    const result = ["magic"];
    const player = "magic";
    expect(team.add(player)).toEqual(result);
  });
  test('test team add throw', () => {
    const team = new Team();
    team.add('magic');
    const player = "magic";
    expect(team.add(player)).toThrow('Игрок уже существует в команде');
  });

  
test('test addAll', () => {
    const team = new Team();
    const result = ["magic", "swords", "bowman"];
    expect(team.addAll("magic", "swords", "bowman")).toEqual(result);
  });

  test('test array', () => {
    const team = new Team();
    const result = ["magic"];
    expect(team.toArray("magic")).toEqual(result);
  });