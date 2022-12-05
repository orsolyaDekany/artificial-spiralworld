import {
  decodeSequence,
  getHighestPopulation,
  getSpiralMatrix,
  getSquareMatrix
} from "../js/util";

import {
  describe,
  expect,
  test
} from "@jest/globals";

const substr1 = "~~~#";
const substr2 = "~##";
const substr3 = "~~~~~~~~~~#";
const substr4 = "#~~~#";

describe("decodeSequence", () => {
  test("should be equal to", () => {
    expect(decodeSequence(substr1.split(""))).toEqual(["~", "~", "~", 3]);
    expect(decodeSequence(substr2.split(""))).toEqual(["~", 1, "~"]);
    expect(decodeSequence(substr3.split(""))).toEqual(["~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~"]);
    expect(decodeSequence(substr4.split(""))).toEqual(["~", "~", "~", "~", 3]);
  });
});

describe("decodeSequence", () => {
  test("result should be number or ~ and it should not contain #", () => {
    const scroll = decodeSequence("#~~~##~~#~~###~#~~##~#~#~".split(""));
    expect(scroll).not.toContain("#");
  });
});

describe("getSquareMatrix", () => {
  test("should be a square matrix", () => {
    const squareMatrix = getSquareMatrix(2);
    expect(squareMatrix.length).toEqual(squareMatrix[0].length);
  });
});

describe("getHighestPopulation", () => {
  test("should return the highest population", () => {
    const scroll = decodeSequence("#~~~##~~#~~###~#~~##~#~#~".split(""));
    const decodedSquareMatrix = getSquareMatrix(scroll.length);
    const decodedSpiralMatrix = getSpiralMatrix(scroll.reverse(), decodedSquareMatrix);
    const highestPopulation = getHighestPopulation(decodedSpiralMatrix);
    expect(highestPopulation).toEqual(6);
  });
});
