import {createObjectGenerator} from "../src/index";
import {firstNames} from "@faykah/first-names-en";
import {lastNames} from "@faykah/last-names-en";

describe("createObjectGenerator", () => {
  it("should be exposed as a named function", () => {
    expect.assertions(1);

    const result = typeof createObjectGenerator;
    const expectation = "function";

    expect(result).toStrictEqual(expectation);
  });

  it("should return a random user with last name & first name", () => {
    expect.assertions(1);

    const firstName = firstNames;
    const lastName = lastNames;
    const generateUser = createObjectGenerator({firstName, lastName});
    const user = generateUser();
    const result = lastNames.includes(user.lastName) && firstNames.includes(user.firstName);
    const expectation = true;

    expect(result).toStrictEqual(expectation);
  });

  it("should return a random user with uppercased last name & first name", () => {
    expect.assertions(1);

    const firstName = firstNames;
    const lastName = lastNames;
    const generateUser = createObjectGenerator({firstName, lastName});
    const uppercased = (text: string): string => text.toUpperCase();
    const user = generateUser({firstName: uppercased, lastName: uppercased});
    const result = lastNames.map(uppercased).includes(user.lastName) && firstNames.map(uppercased).includes(user.firstName);
    const expectation = true;

    expect(result).toStrictEqual(expectation);
  });
});
