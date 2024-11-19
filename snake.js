function createMessage(playerPosition, dice) {
  const position = playerPosition + dice;
  const initialMsgPartOne = '👦 position :' + playerPosition + '\n';
  const initialMsgPartTwo = '🐍 position :' + 5 + '\n';
  const initialMsgPartThree = '🏆 position :' + 6 + '\n';

  console.log(initialMsgPartOne + initialMsgPartTwo + initialMsgPartThree);

  if (position > 6) {
    return 'You got ' + dice + ' and you exceeded game boundary! TRY AGAIN!\n';
  }

  if (position === 5) {
    return 'Oops! You got bitten by a snake! Back to 0!\n';
  }

  return 'You got ' + dice + ' ,now your current pos is ' + position + '\n'
}

function gotSnake(playerPosition, dice) {
  if (playerPosition === 5) {
    playerPosition = 0;
    createMessage(playerPosition, 0);
    return playerPosition;
  }

  return playerPosition;
}

function mainGame() {
  let playerPosition = 0;
  let total = playerPosition;

  while (total !== 6 && confirm('Roll the dice 🎲?')) {
    const dice = (Math.round(Math.random() * 100) % 6) + 1;
    const message = createMessage(playerPosition, dice);
    console.log(message);
    playerPosition += dice + playerPosition <= 6 ? dice : 0;
    playerPosition = gotSnake(playerPosition, dice);
    total = playerPosition;
  }

  return playerPosition === 6 ? '🎉Congrats! You won!' : 'Scared? OK Bye then.';
}

console.log(mainGame());