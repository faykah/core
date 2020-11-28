import {random} from "../src/random";

describe("random", () => {
  it("should expose a function named random", () => {
    expect.assertions(1);

    expect(typeof random).toStrictEqual("function");
  });

  it("should return a random value from an array of values", () => {
    expect.assertions(1);

    const values = ["foo", "bar", "foobar"];
    const result = random(values);

    expect(typeof result).toStrictEqual("string");
  });
});
