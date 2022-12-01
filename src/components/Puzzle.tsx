import { FC, memo, useState } from "react";
import { BOARD_SIZE, BOX_COUNT, GRID_SIZE } from "../constants";
import { canSwap, isSolved, suffle, swap } from "../logic";
import Box from "./Box";
import Button from "./Box";

type PuzzleProps = { imgUrl: string };

const Puzzle: FC<PuzzleProps> = ({ imgUrl }) => {
  const [boxes, setBoxes] = useState([...Array(BOX_COUNT).keys()]);
  const [isStarted, setIsStarted] = useState(false);
  const hasWon = isSolved(boxes);

  const boxWidth = Math.round(BOARD_SIZE / GRID_SIZE);
  const boxHeight = Math.round(BOARD_SIZE / GRID_SIZE);
  const style = { width: BOARD_SIZE, height: BOARD_SIZE };

  const suffleBoxes = () => {
    const suffledBoxes = suffle(boxes);
    setBoxes(suffledBoxes);
  };
  const swapBoxes = (boxIndex: any) => {
    if (canSwap(boxIndex, boxes.indexOf(boxes.length - 1))) {
      const swappedBoxes = swap(
        boxes,
        boxIndex,
        boxes.indexOf(boxes.length - 1)
      );
      setBoxes(swappedBoxes);
    }
  };
  const handleBoxClick = (index: any) => {
    swapBoxes(index);
  };

  const handleSuffleClick = () => {
    suffleBoxes();
  };

  const handleStartClick = () => {
    suffleBoxes();
    setIsStarted(true);
  };
  return (
    <div>
      <h1 className="text-5xl sm:text-7xl text-center text-gray-200 py-16 font-mono font-semibold">
        15 Puzzle{" "}
      </h1>
      <div className="h-16">
        {hasWon && isStarted && (
          <h1 className="flex font-mono justify-center text-3xl  text-white animate-bounce">
            Puzzle Solved
          </h1>
        )}
      </div>
      <ul style={style} className="puzzle">
        {boxes.map((box, index) => (
          <Box
            key={box}
            index={index}
            imgUrl={imgUrl}
            handleBoxClick={handleBoxClick}
            width={boxWidth}
            height={boxHeight}
            box={box}
          />
        ))}
      </ul>
      <div className="flex  justify-center py-8 ">
        {!isStarted ? (
          <button
            className="text-white hover:bg-gray-900 hover:scale-110 font-mono text-3xl border-2 rounded-xl px-2 py-1 "
            onClick={() => handleStartClick()}
          >
            Start game
          </button>
        ) : (
          <button
            className="text-white hover:bg-gray-900 hover:scale-110 font-mono text-3xl border-2 rounded-xl px-2 py-1 "
            onClick={() => handleSuffleClick()}
          >
            Restart game
          </button>
        )}
      </div>
    </div>
  );
};

Puzzle.defaultProps = {};

export default memo(Puzzle);
