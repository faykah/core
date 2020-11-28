import {createGenerator} from "../src/index";
import {firstNames} from "@faykah/first-names-en";
import {lastNames} from "@faykah/last-names-en";

describe("createGenerator", () => {
  it("should expose a named function", () => {
    expect.assertions(1);

    const result = typeof createGenerator;
    const expectation = "function";

    expect(result).toStrictEqual(expectation);
  });

  it("should return a random first name", () => {
    expect.assertions(1);

    const generateFirstName = createGenerator(firstNames);
    const firstName = generateFirstName();
    const result = firstNames.includes(firstName);
    const expectation = true;

    expect(result).toStrictEqual(expectation);
  });

  it("should return a random first name uppercased", () => {
    expect.assertions(1);

    const generateFirstName = createGenerator(firstNames);
    const uppercased = (firstName: string): string => firstName.toUpperCase();
    const firstName = generateFirstName(uppercased);
    const result = firstNames.map(uppercased).includes(firstName);
    const expectation = true;

    expect(result).toStrictEqual(expectation);
  });

  it("should return a random last name", () => {
    expect.assertions(1);

    const generateLastName = createGenerator(lastNames);
    const lastName = generateLastName();
    const result = lastNames.includes(lastName);
    const expectation = true;

    expect(result).toStrictEqual(expectation);
  });

  it("should return a random last name uppercased", () => {
    expect.assertions(1);

    const generateLastName = createGenerator(lastNames);
    const uppercased = (firstName: string): string => firstName.toUpperCase();
    const lastName = generateLastName(uppercased);
    const result = lastNames.map(currentLastName => currentLastName.toUpperCase()).includes(lastName);
    const expectation = true;

    expect(result).toStrictEqual(expectation);
  });
});
