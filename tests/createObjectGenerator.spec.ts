import {createObjectGenerator} from "../src/index";
import {firstNames} from "@faykah/first-names-en";
import {lastNames} from "@faykah/last-names-en";

// Later, import @faykah/emails-en when the issue #1 is fixed
const emails = ["foo@domain.com", "bar@domain.com", "foobar@domain.com"];

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
    const schema = {firstName, lastName};
    const generateUser = createObjectGenerator(schema);
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

  it("should return a random user with a nested meta object containing an email property", () => {
    expect.assertions(1);

    const firstName = firstNames;
    const lastName = lastNames;
    const email = emails;
    const meta = {email};
    const generateUser = createObjectGenerator({firstName, lastName, meta});
    const user = generateUser();
    const result = emails.includes(user.meta.email);
    const expectation = true;

    expect(result).toStrictEqual(expectation);
  });

  it("should return a random user with a nested meta object containing an email property with applied nested middlewares", () => {
    expect.assertions(1);

    const firstName = firstNames;
    const lastName = lastNames;
    const email = emails;
    const meta = {email};
    const generateUser = createObjectGenerator({firstName, lastName, meta});
    const uppercased = (text: Readonly<string>): string => text.toUpperCase();
    const user = generateUser({meta: {email: uppercased}});
    const result = emails.map(uppercased).includes(user.meta.email);
    const expectation = true;

    expect(result).toStrictEqual(expectation);
  });

  it("should not be usable with not owned properties", () => {
    expect.assertions(1);

    const user = Object.create({name: ["inherited"]}) as {name: string[]};
    const generateUser = createObjectGenerator(user);
    const result = generateUser();
    const expectation = {};

    expect(result).toStrictEqual(expectation);
  });
});
