'use strict';

function escape(carpark) {
  const maze = carpark;
  const resultArray = [];
  const xEnd = maze.length - 1;
  const yEnd = maze[xEnd].length - 1;

  if (maze[xEnd][yEnd] !== 0) return [];

  let x = maze.findIndex(arr => arr.includes(2)),
    y = maze[x].indexOf(2);

  while (x <= maze.length - 1) {
    let distance;

    if (x === maze.length - 1) {
      distance = y - yEnd;
      y = yEnd;
    } else {
      const nearestOne = maze[x].indexOf(1);
      distance = y - nearestOne;
      y = nearestOne;
    }

    if (distance < 0) {
      resultArray.push(`R${Math.abs(distance)}`);
    } else if (distance > 0) {
      resultArray.push(`L${distance}`);
    }

    x++;

    if (x > maze.length - 1) break;

    let newLast;

    const { length, [length - 1]: last } = resultArray;

    if (/D\d/.test(last)) {
      newLast = parseInt(last.replace('D', '')) + 1;
      resultArray.pop();
    }

    resultArray.push(`D${newLast || 1}`);
  }

  return resultArray;
}

