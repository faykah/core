import {createObjectGenerator} from "../src/main";

describe("createObjectGenerator", () => {
    it("should return an object", () => {
        const generateUser = createObjectGenerator({
            firstname: ["John", "Foo", "Bar"],
            lastname: ["Doe", "Baz", "Faz"],
            age: [27, 28, 29]
        });

        const user = generateUser();

        expect(typeof user).toStrictEqual("object");
        expect(typeof user.firstname).toStrictEqual("string");
        expect(typeof user.lastname).toStrictEqual("string");
        expect(typeof user.age).toStrictEqual("number");
    });
});
