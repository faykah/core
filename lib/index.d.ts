declare const createObjectGenerator: <Schema>(schemaDefinition: { [Key in keyof Schema]: Schema[Key][]; }) => (middlewares?: Readonly<{ [Key_1 in keyof Schema]?: ((value: Schema[Key_1]) => Schema[Key_1]) | undefined; }> | undefined) => Schema;
declare const createGenerator: <Value>(values: readonly Value[]) => (middleware?: ((value: Value) => Value) | undefined) => Value;
export { createObjectGenerator, createGenerator };
