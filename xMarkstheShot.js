
const finalPosition = function (moves) {
  const Position = [0, 0]
  for (let move of moves) {
    switch (move) {
      case "north":
        Position[1] += 1;
        break;
      case "south":
        Position[1] -= 1;
        break;
      case "west":
        Position[0] -= 1;
        break;
      case "east":
        Position[0] += 1
        break;
    }
  }
  return Position
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']

console.log(finalPosition(moves))

