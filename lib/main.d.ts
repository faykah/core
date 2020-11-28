interface Property {
    [key: string]: any;
}
declare const createObjectGenerator: (properties: Property) => () => Property;
declare const createArrayGenerator: <T>(values: T[]) => () => T;
export { createObjectGenerator, createArrayGenerator, };
