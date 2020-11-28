import {createArrayGenerator} from "../src/main";

describe("createArrayGenerator", () => {
    it("should return one value", () => {
        const generateValue = createArrayGenerator([1, 2, 3]);

        expect(typeof generateValue()).toStrictEqual("number");
    });
});
