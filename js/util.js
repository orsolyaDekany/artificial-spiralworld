// Count population on the islands in boolean 2D matrix
const water = "~";

function getHighestPopulation (matrix) {
  const ROW = matrix[0].length;
  const COL = matrix.length;
  const rowArray = [];
  const columnArray = [];
  let countPopulation = 0;

  // Function to check if it is safe to go to position

  function isSafeToVisit (matrix, row, col, visited) {
    return (row >= 0) && (row < ROW) && (col >= 0) && (col < COL) && (matrix[row][col] !== water && !visited[row][col]);
  }

  // A utility function to do DFS for a 2D
  //  boolean matrix. It only considers
  // the 8 neighbours as adjacent vertices

  const traverse = (matrix, row, col, visited) => {
    const rowNumber = [-1, -1, -1, 0, 0, 1, 1, 1];
    const columnNumber = [-1, 0, 1, -1, 1, -1, 0, 1];

    // Recursing for all connected neighbours
    for (let i = 0; i < 8; i++) {
      if (isSafeToVisit(matrix, row + rowNumber[i], col + columnNumber[i], visited)) {
        visited[row][col] = true;
        countPopulation += matrix[row + rowNumber[i]][col + columnNumber[i]];
        rowArray.push(row + rowNumber[i]);
        columnArray.push(col + columnNumber[i]);

        traverse(matrix, row + rowNumber[i], col + columnNumber[i], visited);
      }
    }
  };

  // Make a boolean array to mark visited cells
  // Initially all cells are unvisited

  const visited = new Array(ROW);

  for (let i = 0; i < ROW; i++) {
    visited[i] = new Array(COL);
  }
  for (let i = 0; i < ROW; i++) {
    for (let j = 0; j < COL; j++) {
      visited[i][j] = false;
    }
  }
  // Initialize count as 0 and traverse through the all cells
  // of given matrix
  // Increment population count
  let count = 0;
  for (let i = 0; i < ROW; ++i) {
    for (let j = 0; j < COL; ++j) {
      if (matrix[i][j] !== water && !visited[i][j]) {
        countPopulation = matrix[i][j];
        rowArray.push(i);
        columnArray.push(j);
        traverse(matrix, i, j, visited);
      }

      if (count < countPopulation) {
        count = countPopulation;
      }
    }
  }
  return count;
}

// Decode the scroll
// ~ represents water while # can be a village or water
// The population of each village is the number of water cells before it

function decodeSequence (scroll) {
  let counter = 0;

  const lostIslands = scroll.map((char) => {
    if (char === water) {
      counter++;
      return water;
    } else if (counter % 10 === 0) {
      counter = 0;
      return water;
    } else {
      const population = counter % 10;
      counter = 0;
      return population;
    }
  });
  return lostIslands;
};

// Fill the remaining cell with water in case the returned value is not a round number

function fillRemainingCell (array) {
  const remainingCellNumber = Math.pow(Math.ceil(Math.sqrt(array.length)), 2) - array.length;
  for (let i = 0; i < remainingCellNumber; i++) {
    array.push(water);
  }
  return array;
}
// Get the square spiralmatrix and filling up the arrays with values

function getSpiralMatrix (array, matrix) {
  let counter = 0;
  let startCol = matrix.length - 1;
  let endCol = 0;
  let startRow = 0;
  let endRow = matrix[0].length - 1;
  while (startCol >= endCol && startRow <= endRow) {
    for (let i = startCol; i >= endCol; i--) {
      matrix[startRow][i] = array[counter];
      counter++;
    }
    startRow++;

    for (let j = startRow; j <= endRow; j++) {
      matrix[j][endCol] = array[counter];
      counter++;
    }
    endCol++;

    for (let k = endCol; k <= startCol; k++) {
      matrix[endRow][k] = array[counter];
      counter++;
    }
    endRow--;

    for (let m = endRow; m >= startRow; m--) {
      matrix[m][startCol] = array[counter];
      counter++;
    }
    startCol--;
  }
  return matrix;
}

// Create the square matrix based on the length of the array

function getSquareMatrix (num) {
  const rootLength = Math.ceil(Math.sqrt(num));
  return Array.from(Array(rootLength), () => Array.from(Array(rootLength)));
};

export {
  getHighestPopulation,
  decodeSequence,
  fillRemainingCell,
  getSpiralMatrix,
  getSquareMatrix
};
