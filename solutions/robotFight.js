function fight(robot1, robot2, tactics) {
  const fastestRobot = robot1.speed >= robot2.speed ? robot1 : robot2;
  const otherRobot = fastestRobot.name === robot1.name ? robot2 : robot1;
  const battleLength = fastestRobot.tactics.length + otherRobot.tactics.length;
  const isTie = 'The fight is a draw';
  const winner = name => `${name} has won the fight.`;

  let fighter = fastestRobot,
    opponent = otherRobot;
  i = 0;

  if (!battleLength) {
    if (robot1.health > robot2.health) {
      return winner(robot1.name);
    } else if (robot2.health > robot1.health) return winner(robot2.name);
    return isTie;
  }

  for (let round = 0; round < battleLength; ) {
    const fighterCanFight = fighter.tactics.length > round;
    const opponentCanFight = opponent.tactics.length > round;

    if (
      !fighterCanFight ||
      !opponentCanFight ||
      !(fighterCanFight && opponentCanFight)
    ) {
      if (opponent.health <= 0 || fighter.health > opponent.health) {
        return winner(fighter.name);
      } else if (fighter.health <= 0 || opponent.health > fighter.health) {
        return winner(opponent.name);
      } else return isTie;
    }
    opponent.health -= tactics[fighter.tactics[round]];
    [fighter, opponent] = [opponent, fighter];
    i++;
    if (i === 2) round++, (i = 0);
  }
}

let robot1 = {
  name: 'Rocky',
  health: 660,
  speed: 28,
  tactics: [
    'punch',
    'punch',
    'laser',
    'missile',
    'punch',
    'laser',
    'missile',
    'punch',
    'laser',
    'missile',
    'punch',
    'laser',
    'missile',
  ],
};
let robot2 = {
  name: 'Missile Bob',
  health: 745,
  speed: 66,
  tactics: [
    'punch',
    'punch',
    'laser',
    'missile',
    'punch',
    'laser',
    'missile',
    'punch',
    'laser',
    'missile',
    'punch',
    'laser',
    'missile',
  ],
};

let tactics = { punch: 20, laser: 30, missile: 35 };

console.log(fight(robot1, robot2, tactics));
