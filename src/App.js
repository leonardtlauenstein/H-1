import React, { useState, useEffect } from "react";
import {
  drawH,
  drawE,
  drawL,
  drawO,
  drawW,
  drawR,
  drawD,
  drawComma,
  drawExclamation,
} from "./components/drawLetter";

function App() {
  const initialGrid = Array.from({ length: 7 }, () => Array(52).fill(0));
  const [grid, setGrid] = useState(initialGrid);
  const [cellSize, setCellSize] = useState(window.innerWidth / 100);

  useEffect(() => {
    const handleResize = () => {
      setCellSize(window.innerWidth / 100);
    };

    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []); // empty dependency array so this runs only once after initial render

  useEffect(() => {
    const phrase = "HELLO, WORLD!";
    let startCol = 1;
    for (let i = 0; i < phrase.length; i++) {
      drawLetter(phrase[i], 1, startCol);
      startCol += getLetterWidth(phrase[i]) + 1; // letter width + 1 for space
    }
  }, []); // empty dependency array so this runs only once after initial render

  const toggleCell = (rowIndex, cellIndex) => {
    const newGrid = [...grid];
    newGrid[rowIndex][cellIndex] = (newGrid[rowIndex][cellIndex] + 1) % 5;
    setGrid(newGrid);
  };

  const clearGrid = () => {
    setGrid(initialGrid);
  };

  const getLetterWidth = (letter) => {
    switch (letter) {
      case "W":
        return 5;
      case "H":
      case "O":
      case "D":
      case "R":
        return 4;
      case "E":
      case "L":
        return 3;
      case ",":
      case "!":
        return 0;
      default:
        console.log("Unsupported letter: ", letter);
        return 0;
    }
  };

  const drawLetter = (letter, startRow, startCol) => {
    const newGrid = [...grid];
    switch (letter) {
      case "H":
        drawH(newGrid, startRow, startCol);
        break;
      case "E":
        drawE(newGrid, startRow, startCol);
        break;
      case "L":
        drawL(newGrid, startRow, startCol);
        break;
      case "O":
        drawO(newGrid, startRow, startCol);
        break;
      case "W":
        drawW(newGrid, startRow, startCol);
        break;
      case "R":
        drawR(newGrid, startRow, startCol);
        break;
      case "D":
        drawD(newGrid, startRow, startCol);
        break;
      case ",":
        drawComma(newGrid, startRow, startCol);
        break;
      case "!":
        drawExclamation(newGrid, startRow, startCol);
        break;
      default:
        console.log("Unsupported letter: ", letter);
        break;
    }
    setGrid(newGrid);
  };

  return (
    <>
      <div className="App">
        <div className="grid">
          {grid.map((row, rowIndex) => (
            <div className="row" key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <div
                  key={cellIndex}
                  className={`cell color-${cell}`}
                  onClick={() => toggleCell(rowIndex, cellIndex)}
                  style={{
                    width: `${cellSize}px`,
                    height: `${cellSize}px`,
                  }}
                />
              ))}
            </div>
          ))}
        </div>{" "}
        <div className="Button">
          <button
            onClick={clearGrid}
            alt="Clear the entire grid"
            title="Clear the entire grid"
          >
            Clear
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
