import { Result } from "postcss";
import { BOX_COUNT, GRID_SIZE } from "./constants";

//for checking is puzzle is solvable & if not it randomize it again
export const isSolvable = (boxes: any) => {
  let product = 1;
  for (let i = 1, l = BOX_COUNT - 1; i <= l; i++) {
    for (let j = i + 1, m = l + 1; j <= m; j++) {
      product *= (boxes[i - 1] - boxes[j - 1]) / (i - j);
    }
  }
  return Math.round(product) === 1;
};

//for checking is puzzle is solved
export const isSolved = (boxes: any) => {
  for (let i = 0, l = boxes.length; i < l; i++) {
    if (boxes[i] !== i) {
      return false;
    }
  }
  return true;
};

// For Liner Index from a Row/Col pair.
export const getIndex = (row: any, col: any) => {
  return parseInt(row, 10) * GRID_SIZE + parseInt(col, 10);
};

// Get Row/Col pair from a linear index.
export const getMatrixPosition = (index: any) => {
  return {
    row: Math.floor(index / GRID_SIZE),
    col: index % GRID_SIZE,
  };
};

export const getVisualPosition = (
  row: any,
  col: any,
  width: any,
  height: any
) => {
  return {
    x: col * width,
    y: row * height,
  };
};

export const suffle = (boxes: any) => {
  const suffledBoxes = [
    ...boxes
      .filter((b: any) => b !== boxes.length - 1)
      .sort(() => Math.random() - 0.5),
    boxes.length - 1,
  ];
  return isSolvable(suffledBoxes) && !isSolved(suffledBoxes)
    ? suffledBoxes
    : suffle(suffledBoxes);
};

export const canSwap = (srcIndex: any, destIndex: any) => {
  const { row: srcRow, col: srcCol } = getMatrixPosition(srcIndex);
  const { row: destRow, col: destCol } = getMatrixPosition(destIndex);
  return Math.abs(srcRow - destRow) + Math.abs(srcCol - destCol) === 1;
};

export const swap = (boxes: any, src: any, dest: any) => {
  const boxesResult = [...boxes];
  [boxesResult[src], boxesResult[dest]] = [boxesResult[dest], boxesResult[src]];
  return boxesResult;
};

export const updateURLParameter = (url: string, param: any, paramVal: any) => {
  var newAdditionalURL = "";
  var tempArray = url.split("?");
  var baseURL = tempArray[0];
  var additionalURL = tempArray[1];
  var temp = "";
  if (additionalURL) {
    tempArray = additionalURL.split("&");
    for (var i = 0; i < tempArray.length; i++) {
      if (tempArray[i].split("=")[0] !== param) {
        newAdditionalURL += temp + tempArray[i];
        temp = "&";
      }
    }
  }

  var rows_txt = temp + "" + param + "=" + paramVal;
  return baseURL + "?" + newAdditionalURL + rows_txt;
};
