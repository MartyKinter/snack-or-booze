
const unroll = require("./unroll");

describe("#unroll", function () {
  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  it("unrolls a square array in spiral order", function () {
    const square = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ];
    const expected = [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10];
    expect(unroll(square)).toEqual(expected);
  });

  it("unrolls a smaller square array in spiral order", function () {
    const smallerSquare = [
      ["a", "b", "c"],
      ["d", "e", "f"],
      ["g", "h", "i"]
    ];
    const expected = ["a", "b", "c", "f", "i", "h", "g", "d", "e"];
    expect(unroll(smallerSquare)).toEqual(expected);
  });

  it("unrolls a square array with one element", function () {
    const square = [[42]];
    const expected = [42];
    expect(unroll(square)).toEqual(expected);
  });

  it("unrolls an empty square array", function () {
    const square = [];
    const expected = [];
    expect(unroll(square)).toEqual(expected);
  });

  it("unrolls a square array with a single row", function () {
    const square = [[1, 2, 3, 4]];
    const expected = [1, 2, 3, 4];
    expect(unroll(square)).toEqual(expected);
  });

  it("unrolls a square array with a single column", function () {
    const square = [
      [1],
      [2],
      [3],
      [4]
    ];
    const expected = [1, 2, 3, 4];
    expect(unroll(square)).toEqual(expected);
  });

  it("unrolls a rectangular array in spiral order", function () {
    const rectangle = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [10, 11, 12]
    ];
    const expected = [1, 2, 3, 6, 9, 12, 11, 10, 7, 4, 5, 8];
    expect(unroll(rectangle)).toEqual(expected);
  });
});

