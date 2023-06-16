export const drawH = (newGrid, startRow, startCol) => {
  for (let i = 0; i < 5; i++) {
    newGrid[startRow + i][startCol] = 4;
    newGrid[startRow + i][startCol + 3] = 4;
  }
  newGrid[startRow + 2][startCol + 1] = 4;
  newGrid[startRow + 2][startCol + 2] = 4;
};

export const drawE = (newGrid, startRow, startCol) => {
  for (let i = 0; i < 5; i++) {
    newGrid[startRow + i][startCol] = 4;
  }
  newGrid[startRow][startCol + 1] = 4;
  newGrid[startRow][startCol + 2] = 4;
  newGrid[startRow + 2][startCol + 1] = 4;
  newGrid[startRow + 2][startCol + 2] = 4;
  newGrid[startRow + 4][startCol + 1] = 4;
  newGrid[startRow + 4][startCol + 2] = 4;
};

export const drawL = (newGrid, startRow, startCol) => {
  for (let i = 0; i < 5; i++) {
    newGrid[startRow + i][startCol] = 4;
  }
  newGrid[startRow + 4][startCol + 1] = 4;
  newGrid[startRow + 4][startCol + 2] = 4;
};

export const drawO = (newGrid, startRow, startCol) => {
  for (let i = 0; i < 5; i++) {
    newGrid[startRow + 1][startCol] = 4;
    newGrid[startRow + 2][startCol] = 4;
    newGrid[startRow + 3][startCol] = 4;
    newGrid[startRow + 1][startCol + 3] = 4;
    newGrid[startRow + 2][startCol + 3] = 4;
    newGrid[startRow + 3][startCol + 3] = 4;
  }
  newGrid[startRow][startCol + 1] = 4;
  newGrid[startRow][startCol + 2] = 4;
  newGrid[startRow + 4][startCol + 1] = 4;
  newGrid[startRow + 4][startCol + 2] = 4;
};

export const drawW = (newGrid, startRow, startCol) => {
  for (let i = 0; i < 5; i++) {
    newGrid[startRow + 0][startCol] = 4;
    newGrid[startRow + 1][startCol] = 4;
    newGrid[startRow + 2][startCol] = 4;
    newGrid[startRow + 3][startCol] = 4;
    newGrid[startRow + i][startCol + 2] = 4;
    newGrid[startRow + 0][startCol + 4] = 4;
    newGrid[startRow + 1][startCol + 4] = 4;
    newGrid[startRow + 2][startCol + 4] = 4;
    newGrid[startRow + 3][startCol + 4] = 4;
  }
  newGrid[startRow + 4][startCol + 1] = 4;
  newGrid[startRow + 4][startCol + 3] = 4;
};

export const drawR = (newGrid, startRow, startCol) => {
  for (let i = 0; i < 5; i++) {
    newGrid[startRow + 1][startCol] = 4;
    newGrid[startRow + 2][startCol] = 4;
    newGrid[startRow + 3][startCol] = 4;
    newGrid[startRow + 4][startCol] = 4;
  }
  newGrid[startRow][startCol + 1] = 4;
  newGrid[startRow][startCol + 2] = 4;
  newGrid[startRow + 1][startCol + 3] = 4;
};

export const drawD = (newGrid, startRow, startCol) => {
  for (let i = 0; i < 5; i++) {
    newGrid[startRow + i][startCol] = 4;
  }
  newGrid[startRow][startCol + 1] = 4;
  newGrid[startRow][startCol + 2] = 4;
  newGrid[startRow + 4][startCol + 2] = 4;
  newGrid[startRow + 4][startCol + 1] = 4;
  newGrid[startRow + 1][startCol + 3] = 4;
  newGrid[startRow + 2][startCol + 3] = 4;
  newGrid[startRow + 3][startCol + 3] = 4;
};

export const drawComma = (newGrid, startRow, startCol) => {
  newGrid[startRow + 4][startCol] = 4;
  newGrid[startRow + 5][startCol - 1] = 4;
};

export const drawExclamation = (newGrid, startRow, startCol) => {
  for (let i = 0; i < 4; i++) {
    newGrid[startRow + i][startCol] = 4;
  }
  newGrid[startRow + 3][startCol] = false;
  newGrid[startRow + 4][startCol] = 4;
};
