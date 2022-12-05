import {
  getHighestPopulation,
  decodeSequence,
  fillRemainingCell,
  getSpiralMatrix,
  getSquareMatrix
} from "./util";

function runSpiralWorldScript (sequence) {
  const decodedScroll = fillRemainingCell(decodeSequence(sequence.split("")));
  const decodedSquareMatrix = getSquareMatrix(decodedScroll.length);
  const decodedSpiralMatrix = getSpiralMatrix(decodedScroll.reverse(), decodedSquareMatrix);
  return getHighestPopulation(decodedSpiralMatrix);
}

export default runSpiralWorldScript;
