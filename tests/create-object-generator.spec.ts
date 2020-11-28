import {createObjectGenerator} from "../src/index";
import {firstNames} from "@faykah/first-names-en";
import {lastNames} from "@faykah/last-names-en";

describe("createObjectGenerator", () => {
  it("should return an object", () => {
    const FIRST_AGE = 27;
    const SECOND_AGE = 27;
    const THIRD_AGE = 27;

    const generateUser = createObjectGenerator({
      age: [FIRST_AGE, SECOND_AGE, THIRD_AGE],
      firstname: firstNames,
      lastname: lastNames
    });

    const user = generateUser();

    expect(typeof user).toStrictEqual("object");
    expect(typeof user.firstname).toStrictEqual("string");
    expect(typeof user.lastname).toStrictEqual("string");
    expect(typeof user.age).toStrictEqual("number");
  });

  it("should return an object with middlewares applied", () => {
    const FIRST_AGE = 2;
    const SECOND_AGE = 2;
    const THIRD_AGE = 2;
    const EXPECTED_AGE = 4;

    const generateUser = createObjectGenerator({
      age: [FIRST_AGE, SECOND_AGE, THIRD_AGE],
      firstname: firstNames,
      lastname: lastNames
    });

    const user = generateUser({age: oldAge => oldAge * oldAge});

    expect(typeof user).toStrictEqual("object");
    expect(typeof user.firstname).toStrictEqual("string");
    expect(typeof user.lastname).toStrictEqual("string");
    expect(typeof user.age).toStrictEqual("number");
    expect(user.age).toStrictEqual(EXPECTED_AGE);
  });
});
