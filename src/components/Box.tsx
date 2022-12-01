import { FC, memo } from "react";
import { Motion, spring } from "react-motion";
import { BOARD_SIZE, BOX_COUNT, GRID_SIZE } from "../constants";
import { getMatrixPosition, getVisualPosition } from "../logic";

type BoxProps = {
  box: any;
  index: any;
  width: any;
  height: any;
  handleBoxClick: any;
  imgUrl: any;
};

const Box: FC<BoxProps> = ({
  box,
  index,
  width,
  height,
  handleBoxClick,
  imgUrl,
}) => {
  const { row, col } = getMatrixPosition(index);
  const visulalPosition = getVisualPosition(row, col, width, height);
  const boxStyle = {
    width: `calc(100%/${GRID_SIZE})`,
    height: `calc(100%/${GRID_SIZE})`,
    backgroundImage: `url(${imgUrl})`,
    translateX: visulalPosition.x,
    translateY: visulalPosition.y,
    backgroundSize: `${BOARD_SIZE}px`,
    backgroundPosition: `${(100 / (GRID_SIZE - 1)) * (box % GRID_SIZE)}% ${
      (100 / (GRID_SIZE - 1)) * Math.floor(box / GRID_SIZE)
    }%`,
  };
  const motionStyle = {
    translateX: spring(visulalPosition.x),
    translateY: spring(visulalPosition.y),
  };

  return (
    <Motion style={motionStyle}>
      {({ translateX, translateY }) => (
        <li
          className="box cursor-pointer"
          style={{
            ...boxStyle,
            transform: `translate3d(${translateX}px, ${translateY}px, 0)`,
            // Is last box?
            opacity: box === BOX_COUNT - 1 ? 0 : 1,
          }}
          onClick={() => handleBoxClick(index)}
        >
          {!imgUrl && `${box + 1}`}
        </li>
      )}
    </Motion>
  );
};

Box.defaultProps = {};

export default memo(Box);
