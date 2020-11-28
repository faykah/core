import {createGenerator} from "../src/index";

describe("createGenerator", () => {
  it("should return one value", () => {
    const FIRST_VALUE = 1;
    const SECOND_VALUE = 1;
    const THIRD_VALUE = 1;

    const generateValue = createGenerator([FIRST_VALUE, SECOND_VALUE, THIRD_VALUE]);

    expect(typeof generateValue()).toStrictEqual("number");
  });

  it("should return one value with middleware applied", () => {
    const FIRST_VALUE = 2;
    const SECOND_VALUE = 2;
    const THIRD_VALUE = 2;
    const EXPECTED_VALUE = 4;

    const generateValue = createGenerator([FIRST_VALUE, SECOND_VALUE, THIRD_VALUE]);
    const value = generateValue(oldValue => oldValue * oldValue);

    expect(typeof value).toStrictEqual("number");
    expect(value).toStrictEqual(EXPECTED_VALUE);
  });
});
